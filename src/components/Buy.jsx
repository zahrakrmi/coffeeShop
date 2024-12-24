'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'


const Buy = () => {
    return (
        <div className='container mx-auto my-36'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center'>
                {/* //////////form/////////// */}
                <div className='space-y-8  ml-20'>
                    <motion.h1 initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{type:'spring',stiffness:100,damping:10,delay:0.2}} className='text-4xl font-bold text-darkGray font-serif'>Buy our products from anywhere</motion.h1>
                    <motion.div initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{type:'spring',stiffness:100,damping:10, delay:0.4}} className='flex items-center gap-4'>
                        <input type="text" placeholder='Name' className='input-style w-full lg:w-[150px]' />
                        <input type="email" placeholder='Email' className='input-style w-full ' />
                    </motion.div>
                    <motion.div initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{type:'spring',stiffness:100,damping:10,delay:0.6}} className='flex items-center gap-4'>
                        <input type="text" placeholder='country' className='input-style w-full ' />
                        <input type="text" placeholder='ZipCode' className='input-style w-full lg:w-[150px]' />
                    </motion.div>
                    <motion.button initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{type:'spring',stiffness:100,damping:10,delay:0.8}} className='primary-btn w-full'>Order Now </motion.button>
                </div>
                {/* ///////////world///////// */}
                <div className='col-span-2'>
                    <Image src='/world.png' alt='world' width={500} height={300} className='w-full  sm:w-[500px] mx-auto ' />
                </div>
            </div>
        </div>
    )
}

export default Buy