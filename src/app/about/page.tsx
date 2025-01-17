import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className="w-full bg-myColor3">
      <div className="w-full container px-5 py-24 mx-auto flex gap-8 flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col gap-2 md:gap-6 md:flex text-center md:text-start">
          <div className="flex flex-col w-full gap-6">
            <h1 className='scroll-m-20 text-3xl text-myBlack font-extrabold tracking-tight lg:text-5xl'>ABOUT US</h1>
            <div className='capitalize pt-3 flex flex-col gap-6'>
              <div>
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-myBlack text-lg font-bold opacity-80">At Ladies Point, we believe in celebrating the beauty of womanhood across all stages of life. Whether you’re a fashion-forward teen, a proud new mom, or someone seeking to refresh your wardrobe and home, we’ve got you covered.</p>
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-myBlack text-lg font-bold opacity-80">Welcome to Ladies Point, your ultimate destination for fashion, comfort, and style for every woman and every home!</p>
              </div>
              <div className='hidden md:block'>
                <h3 className='scroll-m-20 text-myBlack border-b pb-2 text-xl md:text-2xl font-semibold tracking-tight first:mt-0'>Our carefully curated collections include:</h3>
                <ul className="leading-7 [&:not(:first-child)]:mt-6 text-myBlack text-lg font-bold opacity-80 list-disc ml-8">
                  <li>Women’s Clothing: Timeless classics and trendy pieces to suit every occasion</li>
                  <li>Newborn Baby Essentials: Soft, safe, and adorable items for your little ones.</li>
                  <li>Teen Clothing: Stylish and age-appropriate outfits for young trendsetters.</li>
                  <li>Ladies’ Shoes & Accessories: Step into style with footwear and accessories that complete your look.</li>
                  <li>Home Décor & Add-Ons: Add a touch of elegance and charm to your living space.</li>
                </ul>
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-myBlack text-lg font-bold opacity-80">At Ladies Point, we’re passionate about quality, variety, and affordability. Our mission is to provide products that resonate with your personality, meet your needs, and bring a smile to your face.

                  We take pride in delivering exceptional customer service, ensuring that your shopping experience is smooth, enjoyable, and memorable.</p>
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-myBlack text-lg font-bold opacity-80">Thank you for choosing Ladies Point — where style meets substance, and every point is made just for you.</p>
              </div>
            </div>

          </div>       
        </div>
        <div className='w-full md:w-1/2 flex items-center'>
        <Image
            src="/wall.webp"
            alt="wallpaper"
            width={850}
            height={700}
            className="rounded-2xl md:mt-0 mt-12"
          />
        </div>
      </div>
    </section>

  )
}

export default About