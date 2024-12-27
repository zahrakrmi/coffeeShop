import React from "react";
import Hero from "@/components/Hero";
import Product from "@/app/product/page";
import Buy from "@/components/Buy";
import Banner from "@/components/Banner";




const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Product />
      <Buy />
      <Banner />
    </div>
  )
}

export default page