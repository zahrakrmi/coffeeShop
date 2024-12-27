'use client'
import { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartModel from './CartModel';

const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <div className='fixed bg-[#1b1f24] w-full text-white pt-3 pb-3 z-20'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    {/* ////////////logo////////// */}
                    <h1 className='font-semibold text-2xl uppercase lg:ml-10'>
                        <span className='text-primary'>Black </span>Coffee
                    </h1>

                    {/* ///////////menu////////// */}
                    <div className='relative'>
                        <ShoppingCartIcon 
                            className='text-3xl cursor-pointer lg:mr-10' 
                            onClick={() => setIsCartOpen((prev) => !prev)} 
                        />
                        <div className='absolute -top-3 right-5 text-sm flex justify-center items-center w-6 h-6 bg-red-400 rounded-full'>2</div>
                    </div>
                    {isCartOpen && <CartModel />}
                </div>
            </div>
        </div>
    );
}

export default Header;
