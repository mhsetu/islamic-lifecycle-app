'use client';
import React, { useContext, useEffect, useState } from 'react';
import search from '../../public/assets/Frame.png';
import Image from 'next/image';
import SearchSide from '@/components/search-side/Search-Side';
import { ContextProvider } from '@/context/context';
import arbi from '../../public/assets/allah 1 (Traced).png';
import profile from '../../public/assets/Group 174 (1).png';

const Homepage = () => {
  const { sendDuas, content } = useContext(ContextProvider);

  const {
    dua_name_en,
    top_en,
    dua_arabic,
    clean_arabic,
    refference_en,
    translation_en,
    transliteration_en,
  } = content;

  return (
    <div className='mt-10'>
      <div className='flex justify-between mr-6'>
        <h1 className='text-xl'>Duas Page</h1>
        <div className='flex justify-between'>
          <label className='input w-full max-w-xs flex items-center justify-between mr-5'>
            <input type='text' placeholder='Search by Dua Name' />
            <Image src={search} alt='search' className='  size-6  rounded' />
          </label>
          <Image src={profile} width={70} height={70} alt='profile' />
        </div>
      </div>
      <div className='grid grid-cols-10'>
        <div className='col-span-3 '>
          <SearchSide />
        </div>

        <div className='col-span-7 mt-5 mr-5'>
          <div>
            {content && (
              <div className='card  w-full '>
                <div
                  className={`${
                    content ? 'card-body bg-base-100 shadow-md rounded-md' : ''
                  }`}
                >
                  {dua_name_en && (
                    <div className='flex mb-3'>
                      <Image src={arbi} alt='arbi' />
                      <h2 className='list-decimal text-[#1FA45B] text-lg ml-2 place-items-center'>
                        {dua_name_en}
                      </h2>
                    </div>
                  )}

                  <p className='mb-2'>{top_en}</p>
                  <p className='mb-2'>{clean_arabic}</p>
                  <p className='mb-2'>{dua_arabic}</p>
                  {transliteration_en && (
                    <p>
                      <span className='font-semibold '>Transliteration: </span>
                      {transliteration_en}
                    </p>
                  )}

                  {translation_en && (
                    <p>
                      <span className='font-semibold '>Translation:</span>{' '}
                      {translation_en}
                    </p>
                  )}
                  {refference_en && (
                    <div>
                      <p className='font-semibold'>Reference:</p>
                      <p>{refference_en}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
