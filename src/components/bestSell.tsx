import React from 'react'
import BestSellingCard from './bestSellingCard'


const bestsell = [
    {
        src: '/images/c1-1.webp',
        alt: "children photo",
        title: "Child Shalwar Kameez",
        orignalPrice: 350,
        discountedPrice: 180,
        description: "best products",
        tags1: "fashion",
        tags2: "products",
        category: "t-shirt",
        slug: "t-shit"
    },
    {
        src: '/images/w4-2.webp',
        alt: "women photo",
        title: "Printed Kurti",
        orignalPrice: 500,
        discountedPrice: 350,
        description: "best products",
        tags1: "fashion",
        tags2: "products",
        category: "t-shirt",
        slug: "t-shit"
    },
    {
        src: '/images/w3-3.webp',
        alt: "women photo",
        title: "t-shirt",
        orignalPrice: 500,
        discountedPrice: 350,
        description: "best products",
        tags1: "fashion",
        tags2: "products",
        category: "t-shirt",
        slug: "t-shit"
    },
    {
        src: '/images/w7-1.webp',
        alt: "women photo",
        title: "t-shirt",
        orignalPrice: 500,
        discountedPrice: 350,
        description: "best products",
        tags1: "fashion",
        tags2: "products",
        category: "t-shirt",
        slug: "t-shit"
    },
    {
        src: '/images/c2-4.webp',
        alt: "women photo",
        title: "t-shirt",
        orignalPrice: 500,
        discountedPrice: 350,
        description: "best products",
        tags1: "fashion",
        tags2: "products",
        category: "t-shirt",
        slug: "t-shit"
    },
    {
        src: '/images/w4-3.webp',
        alt: "women photo",
        title: "t-shirt",
        orignalPrice: 500,
        discountedPrice: 350,
        description: "best products",
        tags1: "fashion",
        tags2: "products",
        category: "t-shirt",
        slug: "t-shit"
    },
    {
        src: '/images/c1-2.webp',
        alt: "women photo",
        title: "t-shirt",
        orignalPrice: 500,
        discountedPrice: 350,
        description: "best products",
        tags1: "fashion",
        tags2: "products",
        category: "t-shirt",
        slug: "t-shit"
    },
    {
        src: '/images/w8-3.webp',
        alt: "women photo",
        title: "t-shirt",
        orignalPrice: 500,
        discountedPrice: 350,
        description: "best products",
        tags1: "fashion",
        tags2: "products",
        category: "t-shirt",
        slug: "t-shit"
    },
]




const BestSell = () => {
    return (
        <div className="text-black min-h-[150vh] bg-myColor3 pt-6 capitalize mb-[70px] body-font rounded-xl">
            {/*heading*/}
            <div className='text-center mb-10'>
                <h1 className='scroll-m-20 text-xl lg:text-2xl font-semibold tracking-tight '>BEST SELLING PRODUCTS</h1>
                <div className='flex mt-2 justify-center'>
                    <div className='w-16 h-1 rounded-full bg-myColor2 inline-flex' />
                </div>
            </div>
            {/*BEST SELLING PRODUCTS CARD HERE*/}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6'>
                {
                    bestsell.map((item, index: number) => (
                        <BestSellingCard key={index} src={item.src} alt={item.alt} title={item.title} description={item.description} orignalPrice={item.orignalPrice} discountedPrice={item.discountedPrice} tags1={item.tags1} tags2={item.tags2} category={item.category} slug={item.slug} />
                    ))
                }
            </div>

        </div>
    )
}

export default BestSell