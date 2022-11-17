import React from 'react'
import { useState } from 'react';
import { GifGrid } from "./components/GifGrid"
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon ball']);

    const onAddCategory =(newCategory)=>{
      // categories.push(newCategory);
      //setCategories([...categories,'Valorant']);
     // setCategories(cat=>[...cat,'Valorant']);
     if(categories.includes(newCategory))return;
     setCategories([newCategory,...categories])
    }

  return (
    <>
    {/**Tituo */}
    <h1>GifExpertApp</h1>


    {/**Input */}
    <AddCategory 
   // setCategories={setCategories}
    onNewCategory={(value)=>onAddCategory(value)}
     />


    {/**Listado de GIF */}


    {
        categories.map((category)=>(
            <GifGrid key={category}
            category = {category}
            />
        ) )
    }

    </>
  )
}