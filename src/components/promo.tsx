import Image from 'next/image'
import React from 'react'

const Promo = () => {
    return (
        <div className='flex flex-col items-center text-black bg-myColor3 py-6 capitalize mb-[70px] body-font min-h-[90vh] promo1 bg-fixed bg-center bg-no-repeat'>
            {/* heading*/}
            <div className='text-center mb-10'>
                <h1 className='scroll-m-20 border-b-4 border-myColor2 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>Promotion</h1>
            </div>
            <section className="text-myWhite body-font">
                <div className="container px-5  mx-auto">
                    <div className="flex flex-wrap mx-4 -mb-10 text-center">
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className=" h-64 overflow-hidden group relative">
                                <Image src={'/spring.png'} alt='jewl ' width={500} height={500} className='rounded-xl duration-500 group-hover:scale-125' />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-myColor2 mt-6 mb-3">
                                spring collection
                            </h2>
                            <p className="leading-relaxed text-myWhite">
                                in this spring we brought you the beauty
                            </p>
                            <button className="flex mx-auto mt-6 text-white bg-myButton border-0 py-2 px-5 focus:outline-none hover:bg-myButton2 rounded">
                                shop now
                            </button>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className=" h-64 overflow-hidden group relative">
                                <Image src={'/winter.png'} alt='jewl ' width={500} height={500} className='rounded-xl duration-500 group-hover:scale-125' />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-myColor2 mt-6 mb-3">
                                winter collection
                            </h2>
                            <p className="leading-relaxed text-myWhite">
                                in this cold we have something to keep you <br /> warm and gorgious
                            </p>
                            <button className="flex mx-auto mt-6 text-white bg-myButton border-0 py-2 px-5 focus:outline-none hover:bg-myButton2 rounded">
                                shop now
                            </button>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className=" h-64 overflow-hidden group relative">
                                <Image src={'/jewlary.jpg'} alt='jewl ' width={500} height={500} className='rounded-xl duration-500 group-hover:scale-125' />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-myColor2 mt-6 mb-3">
                                special price sale
                            </h2>
                            <p className="leading-relaxed text-myWhite">
                                upto 70% of on all products in this section
                            </p>
                            <button className="flex mx-auto mt-6 text-white bg-myButton border-0 py-2 px-5 focus:outline-none hover:bg-myButton2 rounded">
                                shop now
                            </button>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className=" h-64 overflow-hidden group relative">
                                <Image src={'/teens.png'} alt='jewl ' width={500} height={500} className='rounded-xl duration-500 group-hover:scale-125' />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-myColor2 mt-6 mb-3">
                                winter for your child
                            </h2>
                            <p className="leading-relaxed text-myWhite">
                                soft and warm collection
                            </p>
                            <button className="flex mx-auto mt-6 text-white bg-myButton border-0 py-2 px-5 focus:outline-none hover:bg-myButton2 rounded">
                                shop now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Promo