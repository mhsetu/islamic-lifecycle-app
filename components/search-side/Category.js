import Image from 'next/image';
import fever from '../../public/assets/Frame1.png';
import SubCategory from './Sub-Category';
import { useContext } from 'react';
import { ContextProvider } from '@/context/context';

const Category = ({ category }) => {
  console.log(category);
  const { handleCategory } = useContext(ContextProvider);

  const { cat_name_en, no_of_subcat } = category;

  return (
    <div>
      <div>
        <button onClick={() => handleCategory(category)}>
          <div className='collapse bg-base-100 hover:bg-[#E8F0F5] w-80'>
            <input type='radio' name='my-accordion-1' defaultChecked />
            <div className='collapse-title text-xl'>
              <div className='flex gap-x-4'>
                <div className='avatar'>
                  <div className='size-12 flex-none rounded bg-gray-50'>
                    <img
                      src='https://i.postimg.cc/k45XV5Xb/Frame1.png'
                      alt='fever'
                    />
                  </div>
                </div>

                <div className='min-w-0 flex-auto'>
                  <p
                    className='text-sm/6 font-semibold  text-[#1FA45B]
'
                  >
                    {cat_name_en}
                  </p>
                  <p className='mt-1 truncate text-xs/5 text-gray-500'>
                    Subcategory:{no_of_subcat}
                  </p>
                </div>
              </div>
            </div>
            <div className='collapse-content p-0'>
              <SubCategory></SubCategory>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Category;
