'use client';

import Link from "next/link";
import { easeInOut, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Rating } from "@mui/material";




const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.6,
            staggerChildren: 0.4
        },
    },
}
const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 150,
            damping: 10,
            ease: 'easeInOut'
        },
    },
}
export default function Product() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://675efc0f1f7ad24269974044.mockapi.io/procuct/');
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await res.json();
                setData(result);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="container mx-auto my-16">
            {/* Header Section */}
            <div className="text-center max-w-lg mx-auto space-y-2">
                <motion.h1
                    className="text-3xl font-bold text-lightGray"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.2 }}
                >
                    Fresh and <span className="text-primary">Testycoffee</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 1, scale: 0 }}
                    transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.4 }}
                    className="opacity-50 text-sm"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id culpa quasi aliquid laudantium. Accusantium totam, ullam harum vel, praesentium hic laudantium, modi sequi sapiente quibusdam ipsa voluptatibus laboriosam voluptates.
                </motion.p>
            </div>

            {/* Product Section */}
            <motion.div variants={containerVariants} initial='hidden' whileInView={'visible'} viewport={{ amount: 0.8 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-10">
                {data.map((val) => {
                    const randomRating = Math.floor(Math.random() * 5) + 1;
                    const x = `${val.id}-${val.name}`;
                    return (
                        <motion.div hidden={{opacity:0, y:20}} visible={{opacity:1,y:0}} transition={{type:'spring',stiffness:'150',damping:10,ease:'easeInOut'}}
                            key={val.id}
                            className=" text-lightGray p-5 flex flex-col justify-center items-center text-center"
                        >
                            <Image
                                src={val.avatar}
                                width={200}
                                height={200}
                                alt={val.name}
                                className="m-5  hover:scale-110 duration-300 cursor-pointer"
                            />
                            <p className="text-lg font-semibold text-primary ">{val.desc}</p>
                            <h2 className="text-xl w-full mt-2">
                                Price: <span className="text-2xl font-bold">${val.price}</span>
                            </h2>
                            <Rating
                                name={`rating-${val.id}`}
                                value={randomRating}
                                readOnly
                                className="w-full flex justify-center mt-2"
                            />
                            <div className="flex justify-center w-full mt-4">
                                <Button
                                    variant="contained"
                                    color="warning"
                                    sx={{ width: '150px', height: '50px' }}
                                >
                                    <Link href={x} as={x}>
                                        ADD To Cart
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}
