'use client';

import { useState } from 'react';

/* eslint-disable @next/next/no-img-element */
export default function List() {
  const [products, setProducts] = useState([
    { name: '토마토', price: 3, count: 0 },
    { name: '파스타', price: 2, count: 0 },
    { name: '코코넛', price: 5, count: 0 },
  ]);

  const pulsBtn = (index) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index].count += 1;
      return updatedProducts;
    });
  };

  const minusBtn = (index) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      if (updatedProducts[index].count > 0) updatedProducts[index].count -= 1;
      return updatedProducts;
    });
  };

  return (
    <div>
      <h1 className="title">상품목록</h1>
      {products.map((product, index) => {
        return (
          <div className="food" key={index}>
            <img src={`/food${index}.png`} alt={product.name} className="food-img" />
            <h3>
              {product.name} ${product.price}
            </h3>
            <span> 구매 개수 : {product.count} </span>
            <button onClick={() => pulsBtn(index)}>+</button>
            <button onClick={() => minusBtn(index)}>-</button>
          </div>
        );
      })}
    </div>
  );
}
