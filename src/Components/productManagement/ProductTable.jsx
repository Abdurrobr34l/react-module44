import React from "react";

const ProdectTable = ({ products }) => {
  // console.log(products);
  return (
    <div>
      <h2 className="title !mb-0 !text-2xl !text-white">Products Tables</h2>

      <table className="w-full border-collapse bg-white/10 text-white rounded-lg overflow-hidden">
        <thead className="thead">
          <th className="th">No.</th>
          <th className="th">Product</th>
          <th className="th">Price</th>
          <th className="th">Quantity</th>
          <th className="th">Action</th>
        </thead>

        <tbody>
          {products.map(({ name, price, quantity }, index) => {
            return (
              <tr key={index} className="tr">
                <td className="td">{index + 1}</td>
                <td className="td">{name}</td>
                <td className="td">{price}</td>
                <td className="td">{quantity}</td>
                <td className="td">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProdectTable;
