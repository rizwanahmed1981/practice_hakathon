import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BestSellingCard from '@/components/bestSellingCard'


const bestsell = [
    {
        src: '/children.jpg',
        alt: "children photo",
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
        src: '/children.jpg',
        alt: "children photo",
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
        src: '/children.jpg',
        alt: "children photo",
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
        src: '/children.jpg',
        alt: "children photo",
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

const Category = () => {
    return (
        <div className='mt-[60px] mb-[80px]'>
            {/*heading*/}
            <div className='text-center mb-10'>
                <h1 className='scroll-m-20 text-xl lg:text-2xl font-semibold tracking-tight uppercase '>
                    cloaths
                </h1>
                <div className='flex mt-2 justify-center'>
                    <div className='w-16 h-1 rounded-full bg-myColor2 inline-flex' />
                </div>
            </div>
            {/* sections starts from here*/}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    bestsell.map((item, index: number) => (
                        <BestSellingCard key={index} src={item.src} alt={item.alt} title={item.title} description={item.description} orignalPrice={item.orignalPrice} discountedPrice={item.discountedPrice} tags1={item.tags1} tags2={item.tags2} category={item.category} slug={item.slug} />
                    ))
                }
            </div>

        </div>
    )
}

export default Category