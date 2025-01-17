'use client'

import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

const SlugComponenet = () => {
    const [path, setPath] = useState("")
    return (
        <div>
            <Image src={path ? path : '/images/w1-1.webp'} alt='ecommerce' width={400} height={400} />
            <div className='flex items-center justify-evenly mx-auto mt-2'>
                <div className='cursor-pointer w-16 h-16'>
                    <Image src={'/images/w1-2.webp'} width={60} height={60} alt='second image' onClick={() => setPath("/images/w1-2.webp")} />
                </div>
                <div className='cursor-pointer w-16 h-16'>
                    <Image src={'/images/w1-3.webp'} width={60} height={60} alt='second image' onClick={() => setPath("/images/w1-3.webp")} />
                </div>
                <div className='cursor-pointer w-16 h-16'>
                    <Image src={'/images/w1-1.webp'} width={60} height={60} alt='second image' onClick={() => setPath("/images/w1-1.webp")} />
                </div>
            </div>
        </div>
    )
}

export default SlugComponenet
