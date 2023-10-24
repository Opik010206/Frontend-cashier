"use client";

import { MenuContext } from '@/content/MenuContext';
import Link from 'next/link'
import React, { useContext } from 'react'
import {FaBars} from "react-icons/fa";

const MainHeader = () => {
  const { toggle } = useContext(MenuContext);

  return (
    <div className='bg-white flex justify-between items-center px-4 h-12 my-2'>
      <h1 className='font-semibold mx-3 text-xl'>Coffee Cashier</h1>
      <div className='flex justify-center items-center gap-4'>
        <div onClick={ toggle } className='lg:hidden'>
          <FaBars className="cursor-pointer text-lg" />
        </div>
        <div>User Area</div>
      </div>
      {/* <ul className='flex items-center'>
        <li className='mx-3 hover:text-green-700'>
            <Link href='/'>Home</Link>
        </li>
        <li className='mx-3 hover:text-green-700'>
            <Link href='/about'>About</Link>
        </li>
        <li className='mx-3 hover:text-green-700'>
            <Link href='/category'>Category</Link>
        </li>
      </ul> */}
    </div>
  )
}

export default MainHeader
