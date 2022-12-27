import React, { useState, createContext, useReducer } from "react";
import { faker } from "@faker-js/faker";

import Cartreducer from "../Reducer/Cartreducer";
export const ProductContext = createContext();
export const DispatchContext = createContext();

export default function Productprovider(props) {
  const products = [...Array(20)].map(() => ({
    userId: faker.datatype.uuid(),
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    show: faker.image.cats(),
    //inStock: faker.random.arrayElement([0,3,5,6,7]),
    fastDelivery: faker.datatype.boolean(),
    // ratings: faker.random.arrayElement([1,2,3,4,5])
  }));
 // console.log(products);
  const [state, dispatch] = useReducer(Cartreducer, {
    randomData: products,
    cart: [],
  });
  return (
    <ProductContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </ProductContext.Provider>
  );
}
