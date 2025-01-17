import CartCard from '@/components/cartCard';
import { Button } from '@/components/ui/button'
import React from 'react'
import { FaCcVisa } from "react-icons/fa6";

const Cart = () => {
    return (

        <div className='mt-[60px] mb-[80px] bg-myColor3 py-10 '>
            {/*heading*/}
            <div className='text-center mb-10'>
                <h1 className='scroll-m-20 text-xl lg:text-4xl font-semibold tracking-tight uppercase '>
                    CHECKOUT
                </h1>
                <div className='flex mt-2 justify-center'>
                    <div className='w-16 h-1 rounded-full bg-myColor2 inline-flex' />
                </div>
            </div>
            {/* CHECKOUT SECTION STARTS FROM HERE */}
            <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>

                <div className='md:col-span-8 w-full bg-myColor4 rounded-xl capitalize md:ml-4 p-6 mx-auto mt-4 mb-4'>
                    <CartCard />
                </div>
                {/* payment receipt */}
                {/* heading */}
                <div className='md:col-span-4 bg-myColor4 rounded-xl capitalize p-6 ml-6 mr-4 mt-4 mb-4'>
                    <div>
                        <h2 className="scroll-m-20 text-myBlack border-b pb-2 text-center text-2xl md:text-3xl font-semibold tracking-tight uppercase first:mt-0">ORDER SUMMARY</h2>
                    </div>
                    {/* divider */}
                    <div className="divider divider-primary"></div>
                    <div className='flex items-center justify-between'>
                        <h2 className="scroll-m-20 text-myBlack border-b pb-2 text-xl font-bold opacity-75  tracking-tight first:mt-0">Sub Total</h2>
                        <h2 className="scroll-m-20 text-myBlack border-b pb-2 text-xl font-bold opacity-75  tracking-tight first:mt-0">$ 1500</h2>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h2 className="scroll-m-20 text-myBlack border-b pb-2 text-xl font-bold opacity-75  tracking-tight first:mt-0">shipping charges</h2>
                        <h2 className="scroll-m-20 text-myBlack border-b pb-2 text-xl font-bold opacity-75  tracking-tight first:mt-0">TBD</h2>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h2 className="scroll-m-20 text-myBlack border-b pb-2 text-xl font-bold  opacity-75 tracking-tight first:mt-0">taxes gst</h2>
                        <h2 className="scroll-m-20 text-myBlack border-b pb-2 text-xl font-bold opacity-75  tracking-tight first:mt-0">8%</h2>
                    </div>
                    {/* sub total */}
                    <div className='flex items-center justify-between'>
                        <h2 className="scroll-m-20 text-myBlack border-b pb-2 text-xl font-bold  opacity-75 tracking-tight first:mt-0">sub total</h2>
                        <h2 className="scroll-m-20 text-myBlack border-b pb-2 text-xl font-bold opacity-75  tracking-tight first:mt-0">$ 1620</h2>
                    </div>
                    {/* divider */}
                    <div className="divider divider-primary"></div>
                    <div className='flex items-center justify-between'>
                        <h2 className="scroll-m-20 text-myBlack border-b pb-2 text-xl font-extrabold tracking-tight first:mt-0">estimated total</h2>
                        <h2 className="scroll-m-20 text-myBlack border-b pb-2 text-xl font-bold tracking-tight first:mt-0">$ 1620</h2>
                    </div>
                    {/* divider */}
                    <div className="divider divider-primary"></div>
                    {/* checkout button */}
                    <div className='w-full flex justify-evenly items-center'>
                        <Button className='bg-myButton text-myWhite rounded-xl cursor-pointer hover:bg-slate-950 gap-4'><FaCcVisa /> procced to checkout</Button>
                    </div>
                    {/* divider */}
                    <div className="divider divider-primary"></div>
                    <div className='flex items-center justify-center mx-auto text-center'>
                        <p className="mt-6 border-l-2 italic">{`* final price will be calculated after shipping charges `}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart