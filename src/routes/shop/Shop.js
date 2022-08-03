import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/products';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Shop.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className='products-container'>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product}></ProductCard>;
      })}
    </div>
  );
};

export default Shop;
