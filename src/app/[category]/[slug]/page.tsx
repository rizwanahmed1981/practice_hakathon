import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { PortableText } from '@portabletext/react'
// import Slug from "@/app/[category]/[slug]/page";
import React from 'react'



const query = `*[_type=='womenCloth && slug.current ==4slug'][0]{
    title,
    'slug':slug.current,
    description,
    "image":images[] {
        'url': asset->url
      },
      "size":size[],
      colors[],
      price,
      discountedPrice,
      category
}`

const options = {next: {revalidate: 30}};

export default async function Slug(){
    const posts = await client.fetch(query);

    return (
      <main className="container mx-auto min-h-screen flex flex-col items-center p-8">
        <h1 className="text-4xl font-bold mb-8">Most Recent Posts</h1>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8">
          {posts.map((post: any) => (
            <ul key={post.id} className=" flex flex-col gap-4">
              {/* <li> <img src={urlForImage(post.image).width(400).url()} /></li> */}
  
              <li><Link href={post.slug} className="text-lg font-bold cursor-pointer">{post.title}</Link></li>
              <li>{post.summary}</li>
              {/* <li>{post.author}</li> */}
  
  
            </ul>
          ))}
        </div>
  
      </main>
    );
}







// import SlugComponenet from '@/components/slugComponenet'
// import { Button } from '@/components/ui/button'
// import React from 'react'
// import { FaShoppingCart } from 'react-icons/fa'

// const Slug = () => {
//     return (
//         <section className="text-gray-600 body-font overflow-hidden">
//             <div className="container px-5 py-24 mx-auto">
//                 <div className="lg:w-4/5 mx-auto flex flex-wrap">
//                     <SlugComponenet/>
//                     <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//                         {/* Category*/}
//                         <h2 className="text-sm title-font text-myBlack opacity-80 tracking-widest">
//                             Women Clothing
//                         </h2>
//                         {/* title*/}
//                         <h1 className="mt-2 mb-3 text-myBlack text-3xl title-font font-medium ">
//                             Eye Cathing Designs
//                         </h1>
//                         {/* ratings*/}
//                         <div className="rating rating-md">
//                             <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
//                             <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
//                             <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
//                             <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
//                             <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
//                         </div>
//                         <div className="divider"></div>
//                         {/* description*/}
//                         <p className="leading-relaxed text-myBlack">
//                             Fam locavore kickstarter distillery. Mixtape chillwave tumeric
//                             sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps
//                             cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine
//                             tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean
//                             shorts keytar banjo tattooed umami cardigan.
//                         </p>
//                         {/* colors*/}
//                         <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//                             <div className="flex">
//                                 <span className="mr-3">Color</span>
//                                 <button className="border-2 bg-myWhite border-gray-300 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
//                                 <button className="border-2 bg-blue-700 border-gray-300 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
//                                 <button className="border-2 bg-red-600 border-gray-300 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
//                                 <button className="border-2 bg-black border-gray-300 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />

//                             </div>
//                             {/* Sizes*/}
//                             <div className="flex ml-6 items-center">
//                                 <span className="mr-3">Size</span>
//                                 <label className="form-control w-full ">

//                                     <select className="select select-bordered">
//                                         <option disabled selected>Select Size</option>
//                                         <option>S</option>
//                                         <option>M</option>
//                                         <option>L</option>
//                                         <option>XL</option>
//                                         <option>XXL</option>
//                                     </select>

//                                 </label>
//                             </div>
//                         </div>
//                         {/* quantity */}
//                         <div className='flex gap-4 items-center cursor-pointer text-myWhite'>
//                             <p className='text-myBlack'>Qty</p>
//                         <Button className='bg-black border-myWhite border-2 rounded-xl'>- </Button>
//                         <p className=' w-fit h-fit bg-slate-500 text-myWhite'>12</p>
//                         <Button  className='bg-black border-myWhite border-2 rounded-xl'>+ </Button>

//                         </div>

//                         {/* price */}
//                         <div className="divider"></div>
//                         <div className='flex flex-col gap-4'>
//                             <div className="flex items-center justify-between">
//                                 <span className="title-font font-medium text-2xl text-myColor2">
//                                     $58.00
//                                 </span>
//                                 {/* Buttons ad to cart*/}
//                                 <Button className='bg-myButton2 rounded-xl w-28'><FaShoppingCart /> Add to CArt</Button>
//                                 <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
//                                     <svg
//                                         fill="currentColor"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         className="w-5 h-5"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
//                                     </svg>
//                                 </button>

//                             </div>
//                             {/* button buy now*/}
//                             <div className='flex justify-around items-center ml-6'>
//                                 <Button className='bg-myButton rounded-xl w-28 text-myWhite '>check Out</Button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//     )
// }

// export default Slug