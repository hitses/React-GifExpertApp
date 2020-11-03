import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'Dragon Ball',
  ]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>
      <button>Añadir</button>
      <ul>
        {categories.map((cat) => (
          <GifGrid
            category={cat}
            key={cat}
          />
        ))}
      </ul>
    </>
  )
}
