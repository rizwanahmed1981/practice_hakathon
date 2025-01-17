import React from 'react'
import Image from 'next/image'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from './ui/button'






const CartCard = () => {
    return (
        <div className='flex flex-col bg-myColor4 rounded-xl  mt-4 mb-4 capitalize'>
            <h1 className="border-b  text-myBlack text-xl md:text-3xl font-bold tracking-tight ">My Cart</h1>
            <div className="flex flex-col  ">
                <div className="flex bg-myColor3 rounded-box justify-between p-4 place-items-center">
                    <div className='flex items-center justify-start gap-6'>
                        <Checkbox />
                        <p className='text-myBlack text-sm'>Select All</p>
                    </div>
                    <div>
                        <Button className='bg-myBlack text-myWhite cursor-pointer text-sm rounded-xl'>Delete</Button>
                    </div>
                </div>
                {/* divider */}
                <div className="divider"></div>
                {/* first card */}
                <div className="flex flex-col md:flex-row  bg-myColor3 rounded-box justify-between p-2 items-center">

                    <div className='flex items-center justify-between gap-2 md:gap-4'>
                        <div className='flex items-center justify-start gap-6'>
                            <Checkbox />
                            <Image src={'/images/w3-1.webp'} alt='women 3' width={50} height={30} className='rounded-xl' />
                            <div className='flex flex-col jutify-start items-start gap-2'>
                                <span className='rounded-xl text-xs border-gray-800 border-2 bg-myWhite px-2 '> other</span>
                                <p className="scroll-m-20 text-sm font-semibold tracking-tight">shalwar kameez</p>
                                <div className='flex gap-4'>
                                    <p className='text-xs text-myBlack/50'>type:<span className='text-myBlack'>clothing</span></p>
                                    <p className='text-xs text-myBlack/50'>color:<span className='text-myBlack'>red</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between items-end md:items-end  gap-2'>
                        <span className='text-xs text-myBlack/50 md:mr-4'>$ 100.00</span>
                        <p className="scroll-m-20 text-sm font-semibold tracking-tight md:mr-4">$ 29.00</p>
                        <div className='flex hover:cursor-pointer items-center gap-2 text-xs bg-myWhite border-myBlack/50 px-4 py-1 rounded-xl'>
                            <Button className='bg-myBlack rounded-xl w-fit h-fit py-0 text-myWhite'>-</Button>
                            <p className='text-myBlack/70 '>1</p>
                            <Button className='bg-myBlack rounded-xl w-fit h-fit py-0 text-myWhite'>+</Button>
                        </div>
                    </div>



                </div>
                {/* divider */}
                <div className="divider"></div>
                {/* 2nd card */}
                <div className="flex flex-col md:flex-row  bg-myColor3 rounded-box justify-between p-2 items-center">

                    <div className='flex items-center justify-between gap-2 md:gap-4'>
                        <div className='flex items-center justify-start gap-6'>
                            <Checkbox />
                            <Image src={'/images/w2-1.webp'} alt='women 3' width={50} height={30} className='rounded-xl' />
                            <div className='flex flex-col jutify-start items-start gap-2'>
                                <span className='rounded-xl text-xs border-gray-800 border-2 bg-myWhite px-2 '> other</span>
                                <p className="scroll-m-20 text-sm font-semibold tracking-tight">shalwar kameez</p>
                                <div className='flex gap-4'>
                                    <p className='text-xs text-myBlack/50'>type:<span className='text-myBlack'>clothing</span></p>
                                    <p className='text-xs text-myBlack/50'>color:<span className='text-myBlack'>red</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between items-end md:items-end  gap-2'>
                        <span className='text-xs text-myBlack/50 md:mr-4'>$ 110.00</span>
                        <p className="scroll-m-20 text-sm font-semibold tracking-tight md:mr-4">$ 45.00</p>
                        <div className='flex hover:cursor-pointer items-center gap-2 text-xs bg-myWhite border-myBlack/50 px-4 py-1 rounded-xl'>
                            <Button className='bg-myBlack rounded-xl w-fit h-fit py-0 text-myWhite'>-</Button>
                            <p className='text-myBlack/70 '>1</p>
                            <Button className='bg-myBlack rounded-xl w-fit h-fit py-0 text-myWhite'>+</Button>
                        </div>
                    </div>



                </div>
                {/* divider */}
                <div className="divider"></div>
                {/* 3rd card */}
                <div className="flex flex-col md:flex-row  bg-myColor3 rounded-box justify-between p-2 items-center">

                    <div className='flex items-center justify-between gap-2 md:gap-4'>
                        <div className='flex items-center justify-start gap-6'>
                            <Checkbox />
                            <Image src={'/images/w8-1.webp'} alt='women 3' width={50} height={30} className='rounded-xl' />
                            <div className='flex flex-col jutify-start items-start gap-2'>
                                <span className='rounded-xl text-xs border-gray-800 border-2 bg-myWhite px-2 '> other</span>
                                <p className="scroll-m-20 text-sm font-semibold tracking-tight">shalwar kameez</p>
                                <div className='flex gap-4'>
                                    <p className='text-xs text-myBlack/50'>type:<span className='text-myBlack'>clothing</span></p>
                                    <p className='text-xs text-myBlack/50'>color:<span className='text-myBlack'>red</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between items-end md:items-end  gap-2'>
                        <span className='text-xs text-myBlack/50 md:mr-4'>$ 120.00</span>
                        <p className="scroll-m-20 text-sm font-semibold tracking-tight md:mr-4">$ 55.00</p>
                        <div className='flex hover:cursor-pointer items-center gap-2 text-xs bg-myWhite border-myBlack/50 px-4 py-1 rounded-xl'>
                            <Button className='bg-myBlack rounded-xl w-fit h-fit py-0 text-myWhite'>-</Button>
                            <p className='text-myBlack/70 '>1</p>
                            <Button className='bg-myBlack rounded-xl w-fit h-fit py-0 text-myWhite'>+</Button>
                        </div>
                    </div>



                </div>
            </div>



        </div>
    )
}

export default CartCard