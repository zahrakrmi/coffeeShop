"use client"
import React from 'react'
import useStore from '../store/store'
import Link from 'next/link';

export default function page() {
    const {myPlus, myMinus} = useStore()
    const temp = useStore((state) => state.data)
    // console.log(temp);

    return (
        <div>
            <Link href='./'>go to list</Link>
            <h1>cart shopping</h1>
            <ul>
                {temp && temp.map((val, i) => {
                    return <li key={i}> {val.id} : {val.name} - {val.price} - count : {val.count}

                        <button onClick={() => myMinus(val.id)}>-</button>
                        <button onClick={() => myPlus(val.id)}>+</button>
                    </li>
                })}
            </ul>
        </div>
    )
}