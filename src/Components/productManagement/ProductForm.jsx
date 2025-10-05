import React from "react";

const ProductForm = ({handleAddProduct}) => {

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value; 
    const price = e.target.price.value; 
    const quantity = e.target.quantity.value; 
    // console.log(`${name}, ${price}taka, ${quantity} in stock`);
    // console.log(name, price, quantity);

    const newProduct ={
      name,
      price,
      quantity
    }
    // console.log(newProduct);

    handleAddProduct(newProduct);
  };

  return (
    <div>
      <h2 className="title !mb-0 !text-2xl !text-white">Add Your Product</h2>
      <form onSubmit={handleProductSubmit} className="text-center">
        <input type="text" name="name" placeholder="Product Name" />
        <br />
        <input type="text" name="price" placeholder="Product price" />
        <br />
        <input type="text" name="quantity" placeholder="Product quantity" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
