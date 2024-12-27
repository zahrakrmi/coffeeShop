'use client'
import CartIcon from './CartIcon';

const Header = () => {

    return (
        <div className='fixed bg-[#1b1f24] w-full text-white pt-3 pb-3 z-20'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    {/* ////////////logo////////// */}
                    <h1 className='font-semibold text-2xl uppercase lg:ml-10'>
                        <span className='text-primary'>Black </span>Coffee
                    </h1>
                    <CartIcon/>
                </div>
            </div>
        </div>
    );
}

export default Header;
