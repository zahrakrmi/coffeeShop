'use client';
import React from 'react'
import { FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import Image from 'next/image'
import { motion } from 'framer-motion'


const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-primary to bg-primaryDark pt-12 pb-8 text-white mt-12'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {/* /////////1//////// */}
                    <motion.div initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className='space-y-6 lg:ml-14'>
                        <h1 className='text-3xl font-bold uppercase'>
                            Black Coffee
                        </h1>
                        <p className='text-sm max-w-[300px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, dolorem reprehenderit cumque aut provident vel deleniti maxime facilis ex praesentium, amet, commodi quos. Porro amet maiores accusantium fugit repellat laudantium!</p>
                        <div className='flex'>
                            <FaMapMarkerAlt className=' w-[40px] h-[20px] mt-1' /> Tehran ,Iran
                        </div>
                    </motion.div>
                    {/* //////////2/////////// */}
                    <motion.div initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className='space-y-6'>
                        <h1 className='font-bold text-3xl'>Quick Links</h1>
                        <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <ul className='space-y-2'>
                                    <li>Home</li>
                                    <li>About</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='space-y-2'>
                                    <li>Contact us</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                    {/* ///////////3////////// */}
                    <motion.div initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className='space-y-6'>
                        <h1 className='text-3xl font-bold'>Follow Us</h1>
                        <div className='flex items-center gap-3'>
                            <a href="https://www.linkedin.com/in/zahra-karami-7643ba231/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} className=" cursor-pointer" />
                            </a>
                            <a href="mailto:zkrmy23@gmail.com">
                                <FaEnvelope size={30} className="cursor-pointer" />
                            </a>
                            <a href="https://www.zahra_karami_developer.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={30} className="cursor-pointer" />
                            </a>
                        </div>
                        <div>
                            <h2 className='text-xl mb-2 font-semibold'>Payment Methods</h2>
                            <Image src='https://coders-coffee.netlify.app/assets/credit-cards-JstMMRFE.webp' width={100} height={100} alt='credit' className='w-[50%] object-cover' />
                        </div>
                    </motion.div>
                </div>
                {/* ////////copy right////////// */}
                <p className='text-white text-center mt-8 pt-8 border-t-2'>
                    Copyright © 2024 Code By ZahraKarami. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer