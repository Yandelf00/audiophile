import React from 'react'
import { Navbar, Titlecustom, Experience, Footer, Boxes, Cardss } from '@/components'
import Data from '@/data/products.json';
import { CartProvider } from '@/context/cartContext';

export default function Earphones() {
  let numarr : (number | null)[] = [];
  let i : number = 0;
  numarr = Data.products.filter(item => item.category === "earphones").map((item) => {
    return item.id;
   })
  return (
    <CartProvider>
    <main className="flex justify-center flex-col">
      <div className="w-full bg-[rgba(25,25,25,255)] h-[35vh] flex flex-col">
        <Navbar/>
        <Titlecustom title='Earphones'/> 
      </div>  
      <div className='w-full flex items-center flex-col'>
        <Cardss arr= {numarr} num={numarr.length}/>
        <Boxes/>
        <Experience/>
        <Footer/>
      </div>  
    </main>
    </CartProvider>
  )
}