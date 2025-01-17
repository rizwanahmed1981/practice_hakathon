'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BestSellingCard from './bestSellingCard';


const bestsell = [
    {
        src: '/images/c1-1.webp',
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
        src: '/images/w4-2.webp',
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

const NewArrivals = () => {
    //carousel settings
    var settings = {
        arrows:false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                dots:true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
                dots:true
              }
            }
          ]

    };

    return (
        <div className="text-black bg-myColor3 pt-6 capitalize mb-[70px] body-font">
            {/*heading*/}
            <div className='text-center mb-10'>
                <h1 className='scroll-m-20 text-xl lg:text-2xl font-semibold tracking-tight '>NEW ARRIVALS</h1>
                <div className='flex mt-2 justify-center'>
                    <div className='w-16 h-1 rounded-full bg-myColor2 inline-flex' />
                </div>
            </div>

            {/* Carosel */}
            <div className="slider-container mx-2">

            <Slider {...settings}>
            {
                    bestsell.map((item, index: number) => (
                        <BestSellingCard key={index} src={item.src} alt={item.alt} title={item.title} description={item.description} orignalPrice={item.orignalPrice} discountedPrice={item.discountedPrice} tags1={item.tags1} tags2={item.tags2} category={item.category} slug={item.slug} />
                    ))
                }
            </Slider>
            </div>

        </div>
    )
}

export default NewArrivals