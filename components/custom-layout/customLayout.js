'use client';
import logo from '../../public/assets/logo.png';

import support from '../../public/assets/I want to support.png';

import Image from 'next/image';

const CustomLayout = () => {
  return (
    <div>
      <div className='mt-6 '>
        <div className='bg-base-100 shadow-md mx-6 w-[100px] h-[680px] mb-10 rounded-[24px] overflow-scroll overflow-x-hidden'>
          <img
            src='https://i.postimg.cc/wj3CsshH/logo.png'
            height={76}
            width={76}
            alt='logo'
            className='mx-3 pt-4'
          />
          <div className='mt-10 mx-6'>
            <button className='bg-[#E8F0F5] btn-circle  my-3'>
              <img
                src='https://i.postimg.cc/wxZTvgK1/home-1.png'
                alt='home'
                className='mx-3'
                height={22}
                width={22}
              />
            </button>
            <button className='bg-[#E8F0F5] btn-circle   my-3'>
              <img
                src='https://i.postimg.cc/L5yS4Pnx/54-menu-2.png'
                alt='menu'
                className='mx-3'
                height={22}
                width={22}
              />
            </button>
            <button className='bg-[#E8F0F5] btn-circle   my-3'>
              <img
                src='https://i.postimg.cc/FHkvm7mx/memorize-1.png'
                alt='memorize'
                className='mx-3'
                height={22}
                width={22}
              />
            </button>
            <button className='bg-[#E8F0F5] btn-circle   my-3'>
              <img
                src='https://i.postimg.cc/pdB6tH9Z/3-keep-minus.png'
                alt='saved'
                className='mx-3'
                height={22}
                width={22}
              />
            </button>
            <button className='bg-[#E8F0F5] btn-circle   my-3'>
              <img
                src='https://i.postimg.cc/vZ00PvCq/ruqyah-1.png'
                alt='ruqyah'
                className='mx-3'
                height={22}
                width={22}
              />
            </button>
            <button className='bg-[#E8F0F5] btn-circle   my-3'>
              <img
                src='https://i.postimg.cc/kXBG6Mq2/dua-info-1.png'
                alt='dua'
                className='mx-3'
                height={22}
                width={22}
              />
            </button>
            <button className='bg-[#E8F0F5] btn-circle   my-3'>
              <img
                src='https://i.postimg.cc/dt2sThgt/books-1.png'
                alt='books'
                className='mx-3'
                height={22}
                width={22}
              />
            </button>
          </div>
          <div className='ml-2 mt-10 mb-16'>
            <img
              src='https://i.postimg.cc/Pxn9c30r/I-want-to-support.png'
              height={80}
              width={80}
              alt='support'
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CustomLayout;
