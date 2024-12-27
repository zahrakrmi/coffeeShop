import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ProductDetail({ data,  onAddToCart }) {
  return (
    <article className="w-full md:w-5/12 *:my-5 text-center px-5 md:text-start ">
      <h2 className="font-bold text-lg md:text-2xl">Name: {data.name}</h2>
      <h2 className="font-bold text-2xl md:text-5xl my-2">Price:${data.price}</h2>
      <button
        onClick={onAddToCart}
        className="m-3 px-2 py-2 bg-primaryDark text-white rounded hover:bg-primary"
      >
        <ShoppingCartIcon />
        Add 
      </button>
    </article>
  );
}
