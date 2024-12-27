'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import useStore from "../store/store";
import ProductDetail from "@/components/detail";
import CustomAlertBox from "@/components/alert";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LoadingComponent from "@/components/LoadingComponent";

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
    const [showAlert, setShowAlert] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState('')
    const [alertSeverity, setAlertSeverity] = React.useState('success')

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
        return <main><LoadingComponent /></main>;
    }



    const alert = (data) => {

        const alertType = updateBasket(data)


        if (alertType === "success") {
            setAlertMessage("product added to cart!");
            setAlertSeverity("success");
        } else if (alertType === "error") {
            setAlertMessage("product is already in the cart!");
            setAlertSeverity("error");
        }

        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    };


    return (
        <div className="flex flex-wrap w-full  justify-evenly">
            <button className="mt-20 h-10 "><Link href="./"><ArrowBackIcon/></Link></button>
           
            <Image src={data.avatar} width="400" height="400" alt={data.name} className=" mt-32" />
            <div className="w-full lg:w-1/2 lg:static top-20 h-max mt-32 ">
            <ProductDetail data={data} onAddToCart={() => alert(data)} />
            <CustomAlertBox showAlert={showAlert} severity={alertSeverity} message={alertMessage} />
            </div>
        </div>
    );
}

