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
        <main>
            <Link href='./basket'>go to basket</Link>
            <h2>hello, welcome to page: {data.id} : {data.name}!</h2>
            <h3>{data.desc}</h3>
            <Image src={data.avatar} width="200" height="200" alt={data.name} />
            <h4>{data.price}</h4>
            <button><Link href="./">Back to list</Link></button>
            <button onClick={() => updateBasket(data)}>Add to Basket</button>
        </main>
    );
}

