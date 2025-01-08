'use client';
import { createContext, useEffect, useState } from 'react';

export const ContextProvider = createContext();

const Context = ({ children }) => {
  const [subCategories, setSubCategories] = useState({});
  const [categories, setCategories] = useState([]);
  const [sendSubCategories, setSendSubCategories] = useState([]);
  const [duas, setDuas] = useState([]);
  const [sendDuas, setSendDuas] = useState([]);
  const [content, setContent] = useState({});

  useEffect(() => {
    fetch('https://islamic-lifecycle-app-backend.vercel.app/category')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, [setCategories]);

  useEffect(() => {
    fetch(`https://islamic-lifecycle-app-backend.vercel.app/subCategory`)
      .then((res) => res.json())
      .then((data) => setSubCategories(data));
  }, [setCategories]);

  useEffect(() => {
    fetch(`https://islamic-lifecycle-app-backend.vercel.app/duas`)
      .then((res) => res.json())
      .then((data) => setDuas(data));
  }, [setDuas]);
  console.log(duas);

  const handleCategory = (event) => {
    console.log(event?.cat_id);
    const subCategoriesMap = subCategories.filter(
      (subCategory) => subCategory.cat_id === event.cat_id
    );
    setSendSubCategories(subCategoriesMap);
    console.log(subCategoriesMap);
  };

  const handleDuasCollection = (event) => {
    console.log(event?.subcat_id);
    const DuasMap = duas.filter((dua) => dua.subcat_id === event.subcat_id);
    setSendDuas(DuasMap);
    console.log(DuasMap);
  };

  //   console.log(subCategories);
  const info = {
    handleCategory,
    categories,
    subCategories,
    sendSubCategories,
    handleDuasCollection,
    sendDuas,
    content,
    setContent,
  };
  return (
    <ContextProvider.Provider value={info}>{children}</ContextProvider.Provider>
  );
};

export default Context;
