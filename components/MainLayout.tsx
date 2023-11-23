"use client";

import React, { useContext, ReactNode } from 'react';
import MainHeader from './MainHeader'
import {BiCategoryAlt, BiChevronRight, BiHomeAlt2} from "react-icons/bi";
import {ImQuestion} from "react-icons/im";
import {FiChevronRight} from "react-icons/fi";
import {SlBasket} from "react-icons/sl";
import Link from 'next/link';
import { MenuContext } from '@/content/MenuContext';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { open } = useContext(MenuContext);

  return (
    <div className='bg-gray-100 w-full min-h-screen'>
      <MainHeader/>
      <div className='flex justify-start items-start'>
        <aside
            className={`bg-white rounded-lg mx-3 mt-3 shadow-lg overflow-hidden transition-all ${
              open ? 'w-60 p-4' : 'w-0'
            } lg:w-60 lg:p-4`}
          >
          <ul>
            <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer'>
              <BiHomeAlt2 className="mr-2" />
              <Link href="/">Home</Link>
            </li>
            <li className='flex justify-start items-center hover:bg-green-200 hover:text-green-800 rounded-xl p-2 cursor-pointer'>
              <ImQuestion className="mr-2" />
              <Link href="/about">About</Link>
            </li>
            <li className='flex justify-start items-center hover:bg-yellow-200 hover:text-yellow-800 rounded-xl p-2 cursor-pointer'>
              <BiCategoryAlt className="mr-2" />
              <Link href="/category" className='flex-1'>Category</Link>
              <FiChevronRight />
            </li>
            <li className='flex justify-start items-center hover:bg-yellow-200 hover:text-sky-800 rounded-xl p-2 cursor-pointer'>
              <BiCategoryAlt className="mr-2" />
              <Link href="/jenis" className='flex-1'>Jenis</Link>
              {/* <FiChevronRight /> */}
            </li>
            <li className='flex justify-start items-center hover:bg-cyan-200 hover:text-cyan-800 rounded-xl p-2 cursor-pointer'>
              <SlBasket className="mr-2" />
              <Link href="/produk" className='flex-1'>Product</Link>
              {/* <FiChevronRight /> */}
            </li>
          </ul>
        </aside>
        <main className='flex-1 bg-white rounded-lg mt-3 shadow-lg p-5 mr-5'>{children}</main>
      </div>
    </div>
  )
}

export default MainLayout
