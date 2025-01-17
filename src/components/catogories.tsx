import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



const Category = () => {
  return (
    <div className=' mt-[50px] mb-[70px]'>
      {/*heading */}
      <div className='text-center mb-10'>
        <h1 className='scroll-m-20 text-xl lg:text-2xl font-semibold tracking-tight '>CATEGORIES</h1>
        <div className='flex mt-2 justify-center'>
          <div className='w-16 h-1 rounded-full bg-myColor2 inline-flex' />
        </div>
      </div>
      {/* categiries section start from here */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* category 1 */}
        <Link href={'/womenclothing'}>
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
          <Image src={'/pic1.png'} alt='product image' width={450} height={350} className='rounded-xl  duration-500 group-hover:scale-125' />
          <div className='absolute bottom-2 scroll-m-20 text-2xl font-extrabold hidden lg:block tracking-tight bg-myButton2 text-center text-myWhite w-full'>
            <h1 className='uppercase'>women clothing</h1>
          </div>
        </div>
        </Link>
        {/* category 2 */}
        <Link href={'/newborn'}>
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
          <Image src={'/newBorn.jpg'} alt='product image' width={450} height={350} className='rounded-xl  duration-500 group-hover:scale-125' />
          <div className='absolute bottom-2 scroll-m-20 text-2xl font-extrabold hidden lg:block tracking-tight bg-myButton2 text-center text-myWhite w-full'>
            <h1 className='uppercase'>new born</h1>
          </div>
        </div>
        </Link>
        {/* category 3 */}
        <Link href={'/children'}>
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
          <Image src={'/children.jpg'} alt='product image' width={450} height={350} className='rounded-xl duration-500 group-hover:scale-125' />
          <div className='absolute bottom-2 scroll-m-20 text-2xl font-extrabold hidden lg:block tracking-tight bg-myButton2 text-center text-myWhite w-full'>
            <h1 className='uppercase'>children</h1>
          </div>
        </div>
        </Link>
        {/* category 4 */}
        <Link href={'/shoes'}>
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
          <Image src={'/shoes.jpg'} alt='product image' width={450} height={350} className='rounded-xl duration-500 group-hover:scale-125' />
          <div className='absolute bottom-2 scroll-m-20 text-2xl font-extrabold hidden lg:block tracking-tight bg-myButton2 text-center text-myWhite w-full'>
            <h1 className='uppercase'>shoes/ accesories</h1>
          </div>
        </div>
        </Link>
        <div className='text-black text-centre justify-center flex items-center w-screen text-xl mt-6'>
          <Link href={'/category'} className='bg-myColor2 '> explore more</Link>
        </div>
      </div>
    </div>
  )
}

export default Category