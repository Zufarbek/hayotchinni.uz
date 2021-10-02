import React from 'react';
import CategoriesList from '../components/Home/CategoriesList'
import Products from '../components/Home/Products'


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {

  return (
    <div>
      <main>
        <CategoriesList/>
        <Products/>
      </main>
    </div>
  );
}
