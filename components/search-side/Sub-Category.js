import Image from 'next/image';
import hrLine from '../../public/assets/Vector 1.png';
import { useContext, useEffect, useState } from 'react';
import { ContextProvider } from '@/context/context';

const SubCategory = () => {
  const { sendSubCategories, handleDuasCollection, sendDuas, setContent } =
    useContext(ContextProvider);
  console.log(sendSubCategories);
  console.log(sendDuas);
  return (
    <div>
      <div>
        <ul className='list-inside'>
          {sendSubCategories.map((subCategories) => (
            <button
              key={subCategories._id}
              onClick={() => handleDuasCollection(subCategories)}
            >
              <li className=' list-disc mb-5'>
                {subCategories.subcat_name_en}
              </li>
            </button>
          ))}
        </ul>
        <div>
          <ul className='flex-none my-3'>
            {sendDuas.map((sendDua) => (
              <div key={sendDua._id}>
                <button onClick={() => setContent(sendDua)}>
                  <li className='mb-5 text-xs'>{sendDua.dua_name_en}</li>
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
