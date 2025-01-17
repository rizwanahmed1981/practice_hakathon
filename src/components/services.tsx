import React from 'react'
import Image from 'next/image'
import { FcCustomerSupport } from "react-icons/fc";

const Services = () => {
    return (
        <section className="text-black bg-myColor3 py-6 capitalize mb-[70px] body-font">
            <div className="container flex flex-col mb-5 items-center px-5 mx-auto">
                {/*heading */}
                <div className='text-center mb-10'>
                    <h1 className='scroll-m-20 text-xl lg:text-2xl font-semibold tracking-tight '>SERVICES</h1>
                    <div className='flex mt-2 justify-center'>
                        <div className='w-16 h-1 rounded-full bg-myColor2 inline-flex' />
                    </div>
                </div>
                <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-myColor2 text-indigo-500 flex-shrink-0">
                        <Image src={'/247.png'} width={200} height={100} alt='COd image here' className='rounded-full' />

                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-myColor1 text-xl title-font font-medium mb-2">
                            24/7 suport
                        </h2>
                        <p className="leading-relaxed text-base capitalize">
                            our help and support service is always here to reolve any issue..dont worry just call
                        </p>
                        <a className="mt-3 text-myColor2 inline-flex items-center">
                            Learn More
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-myColor1 text-xl title-font font-medium mb-2">
                            Free delivery
                        </h2>
                        <p className="leading-relaxed text-base">
                            free delivery on shopping...... see terms in product details
                        </p>
                        <a className="mt-3 text-myColor2 inline-flex items-center">
                            Learn More
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                    <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <Image src={'/delivery.png'} width={200} height={100} alt='COd image here' className='rounded-full' />
                    </div>
                </div>
                <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <Image src={'/cash.png'} width={200} height={200} alt='COd image here' className='rounded-full' />
                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-myColor1 text-lg title-font font-medium mb-2">
                            cash on delivery
                        </h2>
                        <p className="leading-relaxed text-base">
                            cash on delivery on our all products keeps us on the edge
                        </p>
                        <a className="mt-3 text-myColor2 inline-flex items-center">
                            Learn More
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default Services