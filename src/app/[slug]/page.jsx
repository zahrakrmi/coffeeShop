// 'use client';
import Image from "next/image";

async function getData(x) {
    const res = await fetch('https://675efc0f1f7ad24269974044.mockapi.io/procuct/'+parseInt(x))
 
    if (!res.ok) {
       throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function Page({ params, searchParams }) {
    const data = await getData(params.slug)
    console.log(data);
    return (
        <main>
            <h2>hello , wlc to page: {parseInt(params.slug)} : {data.name} !</h2>
            <h3>{data.desc}</h3>
            <Image src={data.avatar} alt='' width={200} height={200} />
            <h4>{data.price }</h4>
        </main>
    )
  }