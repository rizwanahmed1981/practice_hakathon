import { Copyright } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-myColor1 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
            COMPANY
          </h2>
          <nav className="list-none mb-10 ">
            <li>
              <Link href={'#'} className="text-gray-400 hover:text-white">About Us</Link >
            </li>
            <li>
              <Link href={'#'} className="text-gray-400 hover:text-white">FAQ's</Link >
            </li>
            <li>
              <Link href={'#'} className="text-gray-400 hover:text-white">Exchange/ Return Policy</Link >
            </li>
            <li>
              <Link href={'#'} className="text-gray-400 hover:text-white">Blogs</Link >
            </li>
          </nav>
        </div>
        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
            PRODUCTS
          </h2>
          <nav className="list-none mb-10">
            <li>
              <Link href={'#'} className="text-gray-400 hover:text-white">Women Clothing</Link >
            </li>
            <li>
              <Link href={'#'} className="text-gray-400 hover:text-white">New Born</Link >
            </li>
            <li>
              <Link href={'#'} className="text-gray-400 hover:text-white">Children</Link >
            </li>
            <li>
              <Link href={'#'} className="text-gray-400 hover:text-white">Toys</Link >
            </li>
          </nav>
        </div>
        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
            WOMEN
          </h2>
          <nav className="list-none mb-10">
            <li>
              <Link href={'#'} className="text-gray-400 hover:text-white">Shirts</Link >
            </li>
            <li>
              <Link href={'#'} className="text-gray-400 hover:text-white">Under Garments</Link >
            </li>
            <li>
              <Link href={'#'} className="text-gray-400 hover:text-white">Casual Wear</Link >
            </li>
            <li>
              <Link href={'#'} className="text-gray-400 hover:text-white">Shoes/ Accesories</Link >
            </li>
          </nav>
        </div>
        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
           NEW BORN
          </h2>
          <nav className="list-none mb-10">
            <li>
              <Link href={'#'} className="text-gray-400 hover:text-white">Clothes</Link >
            </li>
            <li>
              <Link href={'#'} className="text-gray-400 hover:text-white">Add-ons</Link >
            </li>
            <li>
              <Link href={'#'} className="text-gray-400 hover:text-white">Accesories</Link >
            </li>
            <li>
              <Link href={'#'} className="text-gray-400 hover:text-white">Baby Care</Link >
            </li>
          </nav>
        </div>
        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
            OTHER PRODUCTS
          </h2>
          <nav className="list-none mb-10">
            <li>
              <Link href={'#'} className="text-gray-400 hover:text-white">Toys</Link >
            </li>
            <li>
              <Link href={'#'} className="text-gray-400 hover:text-white">Makup</Link >
            </li>
            <li>
              <Link href={'#'} className="text-gray-400 hover:text-white">Home Care</Link >
            </li>
            <li>
              <Link href={'#'} className="text-gray-400 hover:text-white">blogs</Link >
            </li>
          </nav>
        </div>
        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
            INFORMATION
          </h2>
          <nav className="list-none mb-10">
            <li>
              <Link href={'#'} className="text-gray-400 hover:text-white">Contact</Link >
            </li>
            <li>
              <Link href={'#'} className="text-gray-400 hover:text-white">Become A Partner</Link >
            </li>
            <li>
              <Link href={'#'} className="text-gray-400 hover:text-white">Jobs/ Carrier </Link >
            </li>
            <li>
              <Link href={'#'} className="text-gray-400 hover:text-white">Affiliate Program</Link >
            </li>
          </nav>
          
        </div>
      </div>
    </div>
    <div className="border-t border-gray-800">
      <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
        <div className="flex md:flex-row flex-col justify-center gap-4 items-center md:items-end md:justify-start">
          <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
            <label
              htmlFor="footer-field"
              className="leading-7 text-sm text-gray-400"
            >
              Please Subscribe
            </label>
            <input
              type="text"
              placeholder='email@example.com'
              id="footer-field"
              name="footer-field"
              className="w-full bg-myColor2 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div>
           <button className="inline-flex text-white bg-myButton border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Subscribe
          </button>
          </div>
          <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 text-center sm:text-left">
            For Updates on Latest Products and Discounts/ Promotions
            <br className="lg:block hidden" />
            Thanks for Subscription
          </p>
        </div>
        <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
          <Link href={'#'} className="text-gray-400">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </Link>
          <Link href={'#'} className="ml-3 text-gray-400">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </Link>
          <Link href={'#'} className="ml-3 text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </Link>
          <Link href={'#'} className="ml-3 text-gray-400">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </Link>
        </span>
      </div>
    </div>
    <div className="bg-mycolor1 bg-opacity-50">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="flex items-center gap-4 text-gray-400 text-sm text-center sm:text-left">
          <Copyright/> 2025 NovaNex Innovations —
          <span>
           
            @Pakistan
          </span>
        </p>
        <span className="flex items-center gap-4 sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm">
          <Copyright/> All rights reserved
        </span>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer