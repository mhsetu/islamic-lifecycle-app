import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import search from '../../public/assets/Frame.png';

import Category from './Category';
import { ContextProvider } from '@/context/context';

const SearchSide = () => {
  const { categories } = useContext(ContextProvider);

  console.log(categories);

  return (
    <div className=' bg-base-100 w-96 shadow-xl rounded-lg'>
      <h2 className=' bg-[#1FA45B] rounded-t-md text-center  text-white text-md py-3'>
        Categories
      </h2>
      <div className='mx-4 mt-4'>
        <label className='input w-full max-w-xs flex items-center mt-2'>
          <Image
            src={search}
            height={24}
            width={24}
            alt='search'
            className='rounded mr-5'
          />
          <input type='text' placeholder='Search by Dua Name' />
        </label>

        <div className='h-[470px] overflow-y-auto overflow-scroll mt-4'>
          {categories.map((category) => (
            <div key={category._id}>
              <Category category={category}></Category>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSide;
