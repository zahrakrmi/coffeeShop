'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import useStore from "../store/store";

async function getData(x) {
    const res = await fetch('https://675efc0f1f7ad24269974044.mockapi.io/procuct/' + parseInt(x));
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default function Page({ params: paramsPromise }) {
    const {updateBasket} = useStore();
    const [params, setParams] = React.useState(null);
    const [data, setData] = React.useState(null);

    // Unwrap `params`
    React.useEffect(() => {
        async function unwrapParams() {
            const resolvedParams = await paramsPromise;
            setParams(resolvedParams);
        }

        unwrapParams();
    }, [paramsPromise]);

    // Fetch data when params are available
    React.useEffect(() => {
        if (!params) return;

        async function fetchData() {
            try {
                const result = await getData(params.slug);
                setData(result);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        }

        fetchData();
    }, [params]);

    // Render loading states
    if (!params || !data) {
        return <main><h1>Loading...</h1></main>;
    }



    return (
        <div className="flex flex-wrap w-full  justify-evenly">
            <button className="mt-20 h-10 border"><Link href="./">Back to list</Link></button>
            <Link href='./basket' className="mt-20 h-10 border">go to basket</Link>
            <Image src={data.avatar} width="400" height="400" alt={data.name} className="border mt-32" />
            <h3 className="mt-20 -ml-64 h-10 border">{data.desc}</h3>
            <div className="w-full lg:w-1/2 lg:static top-20 h-max mt-20 border">uhuyh
            </div>
            <h4 className="mt-20">{data.price}</h4>
            <button onClick={() => updateBasket(data)}>Add to Basket</button>
        </div>
    );
}

