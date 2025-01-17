import React from 'react'
import { Button } from './ui/button'
import { GiShoppingBag } from "react-icons/gi";
const Hero = () => {
    return (
        <div className='mb-[80px]'>
            <div className="hero min-h-[90vh] custom-img bg-fixed bg-center bg-no-repeat">
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md text-black">
                        <h1 className="mb-5 text-myColor2 opacity-80 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Premium Products</h1>
                        <p className="mb-5 text-myColor4 opacity-70 scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize">
                            Change Your Look from Ordinary to Elite Just by Using Our Products and Services
                        </p>
                        <Button className='bg-myButton2 rounded-xl text-myColor1 outline outline-1 outline-myColor3 group-hover:cursor-pointer hover:text-myColor2'>
                            <GiShoppingBag className='mr-2 h-6 w-6 group-hover:animate-bounce' />{" "} Let's Get Change
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero