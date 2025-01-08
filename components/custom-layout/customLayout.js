'use client';
import logo from '../../public/assets/logo.png';
import home from '../../public/assets/home 1.png';
import menu from '../../public/assets/54-menu-2.png';
import memorize from '../../public/assets/memorize 1.png';
import books from '../../public/assets/books 1.png';
import dua from '../../public/assets/dua-info 1.png';
import ruqyah from '../../public/assets/ruqyah 1.png';
import support from '../../public/assets/I want to support.png';
import saved from '../../public/assets/3-keep-minus.png';
import Image from 'next/image';
import OuterLayoutRouter from 'next/dist/client/components/layout-router';

const CustomLayout = () => {
  return (
    <div >
      <div className='mt-6 '>
        <div className='bg-base-100 shadow-md mx-6 w-[100px] h-[680px] mb-10 rounded-[24px] overflow-scroll overflow-x-hidden'>
          <Image
            src={logo}
            height={76}
            width={76}
            alt='logo'
            className='mx-3 pt-4'
          />
          <div className='mt-10 mx-6'>
            <button className='bg-[#E8F0F5] btn-circle  my-3'>
              <Image
                src={home}
                alt='home'
                className='mx-3'
                height={22}
                width={22}
              />
            </button>
            <button className='bg-[#E8F0F5] btn-circle   my-3'>
              <Image
                src={menu}
                alt='menu'
                className='mx-3'
                height={22}
                width={22}
              />
            </button>
            <button className='bg-[#E8F0F5] btn-circle   my-3'>
              <Image
                src={memorize}
                alt='memorize'
                className='mx-3'
                height={22}
                width={22}
              />
            </button>
            <button className='bg-[#E8F0F5] btn-circle   my-3'>
              <Image
                src={saved}
                alt='saved'
                className='mx-3'
                height={22}
                width={22}
              />
            </button>
            <button className='bg-[#E8F0F5] btn-circle   my-3'>
              <Image
                src={ruqyah}
                alt='ruqyah'
                className='mx-3'
                height={22}
                width={22}
              />
            </button>
            <button className='bg-[#E8F0F5] btn-circle   my-3'>
              <Image
                src={dua}
                alt='dua'
                className='mx-3'
                height={22}
                width={22}
              />
            </button>
            <button className='bg-[#E8F0F5] btn-circle   my-3'>
              <Image
                src={books}
                alt='books'
                className='mx-3'
                height={22}
                width={22}
              />
            </button>
          </div>
          <div className='ml-2 mt-10 mb-16'>
            <Image src={support} height={80} width={80} alt='support' />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CustomLayout;
