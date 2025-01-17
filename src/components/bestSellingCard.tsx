import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

const BestSellingCard = ({
    src,
    alt,
    title,
    orignalPrice,
    discountedPrice,
    description,
    tags1,
    tags2,
    category,
    slug,
}: {
    src: string,
    alt: string,
    title: string,
    orignalPrice: number,
    discountedPrice: number,
    description: string,
    tags1: string,
    tags2: string,
    category: string
    slug: string

}) => {
    return (
        <div className="h-[90vh] md:h-[100vh] bg-myWhite p-2 mx-auto rounded-xl shadow-lg relative flex flex-col gap-6 group">
            <Link href={`/${category}/${slug}`}>
            <div className='block relative h-[23rem] rounded-xl overflow-hidden'>
                <Image alt={alt} src={src} width={380} height={380} />
            </div>
            <div className="my-2 flex flex-col items-start gap-6">
                <div className='flex gap-4 items-center justify-centerc'>
                    {title && (<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ">
                        {title}
                    </h2>)}
                    <div className="badge badge-secondary">NEW</div>
                </div>
                <div>
                    <p className='flex flex-row gap-6' >{discountedPrice && (<span className=' text-myWhite rounded bg-gray-600 text-xl '>${discountedPrice}</span>)} {orignalPrice && (<span className='bg-green-500 text-black rounded'>${orignalPrice} </span>)}</p>
                </div>
                {description && (<p className='scroll-m-20 text-xl font-semibold tracking-tight'>{description} </p>)}
                <div className="flex flex-row justify-center gap-4">
                    {tags1 && (<div className="badge badge-outline">{tags1}</div>)}
                    {tags2 && (<div className="badge badge-outline">{tags2}</div>)}
                </div>
            </div>
            </Link>
            <div className='flex justify-center items-center gap-4'>
                <Button className='bg-myButton2 rounded-xl w-24'>Shop now</Button>
                <Button className='bg-myButton2 rounded-xl w-28'><ShoppingCart /> Add to CArt</Button>
            </div>
        </div>

    )
}

export default BestSellingCard