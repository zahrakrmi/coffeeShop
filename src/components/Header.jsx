import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
const Header = () => {
    return (
        <div className='absolute top-0 left-0 w-full text-white pt-10 z-20'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                {/* ////////////logo////////// */}
                <h1 className='font-semibold text-2xl uppercase'><span className='text-primary'>Black </span>Coffee</h1>

                {/* ///////////menu////////// */}
            <div>
                <GiHamburgerMenu className='text-3xl cursor-pointer'/>
            </div>
                </div>
            </div>
        </div>
    )
}

export default Header
