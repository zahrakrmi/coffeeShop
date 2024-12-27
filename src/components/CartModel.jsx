
import React from 'react'

const CartModel = (data) => {
    const cartItems=true

  return (
    <div className='absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-22 '>
    {!cartItems ?(
        <div className='text-black'>Cart Is Empty</div>
    ):(
        <div className='w-[72px] h-[96px]'>{data.avatar}</div>

    )}
    </div>
  )
}

export default CartModel