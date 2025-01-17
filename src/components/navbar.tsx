import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import Link from 'next/link'
import { NavigationMenuDemo } from './navLinks'
import Image from 'next/image'


const Navbar = () => {
  return (

    <div className="navbar bg-myColor2 p-4 mb-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" md:hidden">
            <RxHamburgerMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link href={"/"} >Home</Link></li>
            <li>
              <Link href={"/category"}>Catogories</Link>
              <ul className="p-2">
                <li><Link href={"/shirts"}>Shirts</Link></li>
                <li><Link href={"/undergarments"}>Under Garments</Link></li>
                <li><Link href={"/sasualwear"}>Casul Wear</Link></li>
                <li><Link href={"/partwear"}>Party Wear</Link></li>
                <li><Link href={"/accessories"}>Accessories</Link></li>
                <li><Link href={"/shoes"}>Shoes</Link></li>
                <li><Link href={"/makeup"}>Makup</Link></li>
              </ul>
            </li>
            <li><Link href={"/about"}>About</Link></li>
            <li><Link href={"/contact"}>Contact</Link></li>
          </ul>
        </div>
        <Link href={"/"} className="p-2 text-xl">
        <Image src={'/logo1.png'} alt='logo' width={100} height={100} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">

        <div className='p-4'>
          <NavigationMenuDemo />
        </div>
      </div>
      <div className="navbar-end">
        <Link href={'/cart'}>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          </Link>
        
      </div>

    </div>
  )
}

export default Navbar