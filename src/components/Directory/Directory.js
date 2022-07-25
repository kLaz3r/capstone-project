import React from 'react';
import './Directory.scss';
import CategoryItem from '../CategoryItem/CategoryItem';
const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category}></CategoryItem>
      ))}
    </div>
  );
};

export default Directory;
