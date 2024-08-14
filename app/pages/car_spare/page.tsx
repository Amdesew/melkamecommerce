"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import myimage from "@/public/favicon.ico";// Ensure this path is correct

interface Product {
  item_img: string;
  item_title: string;
  item_disc: string;
}

const CarSpare: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://melkamecommerce.pythonanywhere.com/api/carspare/");
      const data = await res.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <div>
      
      <div className="block m-auto">
        <div className="py-16 items-center text-center">
            <Image src={myimage} alt="icon" className="rounded-full p-7 h-40 w-40 m-auto inline" />
            <h1 className="inline font-semibold">Melkam Ecommerce</h1>
        </div>
      </div>

      <div className="px-9 font-semibold text-2xl text-center">
        <h1>Car Spare Parts</h1>
      </div>

      <div className="justify-center flex">
        <div className="py-3 item-center">
          {products.map((product, index) => (
            <div key={index} className="max-w-sm px-5 py-3 rounded border-black shadow w-60">
              <Image src={product.item_img} alt={product.item_title} width={300} height={200} />
              <div className="font-semibold text-2xl">{product.item_title}</div>
              <p>{product.item_disc}</p>
              <br />
              <a className="bg-orange-400 hover:text-white font-semibold text-1xl rounded py-2 px-16" href="/pages/form">
                🛒Order
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarSpare;
