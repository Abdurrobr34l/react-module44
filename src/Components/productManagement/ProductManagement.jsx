import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProdectTable from './ProductTable';

const ProdeuctManagement = () => {

  const [products, setProducts] = useState([]);
  const handleAddProduct = (newProduct) => {
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
  }

  return (
    <div>
      <h1 className='title'>Product Management</h1>
      
      <div className='flex flex-col lg:flex-row lg:justify-center lg:gap-20'>
        <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
      <ProdectTable products={products}></ProdectTable>
      </div>
    </div>
  );
};

export default ProdeuctManagement;