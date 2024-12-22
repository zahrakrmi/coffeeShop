import React from "react";
import Hero from "@/components/Hero";
import Product from "@/app/product/page";



const page = () => {
  return (
    <div className="overflow-x-hidden">
    <Hero />
    <Product />
    </div>
  )
}

export default page