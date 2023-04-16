'use client';

import { useState } from 'react';

/* eslint-disable @next/next/no-img-element */
export default function List() {
  const [products, setProducts] = useState([
    { 제품명: '토마토', 가격: 3, 개수: 0 },
    { 제품명: '파스타', 가격: 2, 개수: 0 },
    { 제품명: '코코넛', 가격: 5, 개수: 0 },
  ]);

  const pulsBtn = (index) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index].개수 += 1;
      return updatedProducts;
    });
  };

  const minusBtn = (index) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      if (updatedProducts[index].개수 > 0) updatedProducts[index].개수 -= 1;
      return updatedProducts;
    });
  };

  return (
    <div>
      <h1 className="title">상품목록</h1>
      {products.map((product, index) => {
        return (
          <div className="food" key={index}>
            <img src={`/food${index}.png`} alt={product.제품명} className="food-img" />
            <h3>
              {product.제품명} ${product.가격}
            </h3>
            <span> 구매 개수 : {product.개수} </span>
            <button onClick={() => pulsBtn(index)}>+</button>
            <button onClick={() => minusBtn(index)}>-</button>
          </div>
        );
      })}
    </div>
  );
}
