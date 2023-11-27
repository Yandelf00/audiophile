"use client"
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CartProvider } from '@/context/cartContext'
import { useCartContext } from '@/context/cartContext'
import Data from '@/data/products.json'

export default function Navbar() {
    const [change, setChange] = useState(false)
    const [totalprice, setTotalprice] = useState<number>(0)
    const { items, addItem, subItem, quantity} = useCartContext()
    function toggle(){
      setChange(preChange => true)
      document.body.style.overflow = 'hidden';
    }
    function toggleback(){
      setChange(preChange => false)
      document.body.style.overflow = 'visible';
    }
    useEffect(()=>{
      setTotalprice(()=>{
        let price = 0 
        for(const item of items){
          const dataaa = Data.products.find(product=> product.id === item.id)
          price = price + (dataaa?.price ?? 0)
        } 
        return price
      })
    },[items]);
    if (change === false){
      return (
        <div className='flex flex-row justify-between items-center w-full mt-11 '>
            <div className='flex justify-center w-1/3'><h1 className='font-bold text-5xl text-slate-50 cursor-pointer'>audiophile</h1></div>
            <div className='flex flex-row justify-between w-1/3 mt-4 '>
                <h2 className='text-2xl text-slate-50 cursor-pointer transition duration-300 ease-in-out hover:text-[rgba(216,125,74,255)]'>
                  <Link href="/">
                    HOME
                  </Link> 
                </h2>
                <h2 className='text-2xl text-slate-50 cursor-pointer transition duration-300 ease-in-out hover:text-[rgba(216,125,74,255)]'>
                <Link href="/headphones">
                  HEADPHONES
                </Link>
                </h2>
                <h2 className='text-2xl text-slate-50 cursor-pointer transition duration-300 ease-in-out hover:text-[rgba(216,125,74,255)]'>
                  <Link href="/speakers">SPEAKERS</Link>
                </h2>
                <h2 className='text-2xl text-slate-50 cursor-pointer transition duration-300 ease-in-out hover:text-[rgba(216,125,74,255)]'>
                  <Link href="/earphones">EARPHONES</Link>
                  </h2>
            </div>
            <div onClick={toggle} className='flex justify-center w-1/3 mt-4 cursor-pointer'>
                <Image src="/images/cart/cart.png" alt='tkt' height={50} width={50}/>
            </div>
        </div>
      )
    }
    else{
      return (
        <CartProvider>
        <div className='flex flex-row justify-between items-center w-full mt-11 '>
            <div className='flex justify-center w-1/3'><h1 className='font-bold text-5xl text-slate-50 cursor-pointer'>audiophile</h1></div>
            <div className='flex flex-row justify-between w-1/3 mt-4 '>
                <h2 className='text-2xl text-slate-50 cursor-pointer transition duration-300 ease-in-out hover:text-[rgba(216,125,74,255)]'>
                  <Link href="/">
                    HOME
                  </Link> 
                </h2>
                <h2 className='text-2xl text-slate-50 cursor-pointer transition duration-300 ease-in-out hover:text-[rgba(216,125,74,255)]'>
                <Link href="/headphones">
                  HEADPHONES
                </Link>
                </h2>
                <h2 className='text-2xl text-slate-50 cursor-pointer transition duration-300 ease-in-out hover:text-[rgba(216,125,74,255)]'>
                  <Link href="/speakers">SPEAKERS</Link>
                </h2>
                <h2 className='text-2xl text-slate-50 cursor-pointer transition duration-300 ease-in-out hover:text-[rgba(216,125,74,255)]'>
                  <Link href="/earphones">EARPHONES</Link>
                  </h2>
            </div>
            <div className='flex flex-col items-center justify-center w-1/3 mt-4'>
                <Image src="/images/cart/cart.png" alt='tkt' height={50} width={50}/>
                <div className='bg-white w-[45rem] min-h-[30rem] fixed top-[15rem] right-[15rem] z-[1100] rounded-2xl flex flex-col
                items-center'>
                  {items?.length > 0 ? (
                    <div className='flex flex-col w-full h-full items-start justify-start'>
                        <div className= 'mt-24 w-full'>
                          {items?.map((item)=>{
                            const dataa = Data.products.find(product=> product.id === item.id)
                            return(
                              <div className='w-full h-full flex flex-col' key={item.id}>
                                  <div className='flex flex-row justify-between w-full'>
                                  <div className='flex flex-row m-5'>
                                      <div>
                                          <Image className='rounded-2xl' src={dataa?.cartImage ?? ""} alt='tkt' height={150} width={150}/>
                                      </div>
                                      <div className='flex flex-col ml-5 justify-center'>
                                          <p className='text-[2rem] font-semibold mb-2'>{JSON.stringify(dataa?.shortName)}</p>
                                          <p className='text-[2rem] text-[gray]'>${JSON.stringify(dataa?.price)}</p>
                                      </div>
                                  </div>
                                  <div className='flex w-[20%] flex-row items-center mr-7'>
                                      <button onClick={()=>subItem(item?.id, item?.counter)} className='w-[33%]  flex items-center justify-center text-[2rem] bg-[rgba(241,241,241,255)] hover:bg-[rgb(151,151,152)] hover:text-[rgba(216,125,74,255)]'>-</button>
                                      <p className='w-[33%] bg-[rgba(241,241,241,255)] flex justify-center text-[2rem]'> {JSON.stringify(item.counter)} </p>
                                      <button onClick={()=>addItem(item?.id, 1)} className='w-[33%] flex items-center justify-center text-[2rem] bg-[rgba(241,241,241,255)] hover:bg-[rgb(151,151,152)] hover:text-[rgba(216,125,74,255)]'>+</button>
                                  </div>
                              </div>
                                
                              </div>
                          )})}
                          <div className='flex flex-row justify-between mt-9'>
                                  <div className='ml-[2rem]'>
                                    <h1 className='text-[2rem]'>TOTAL</h1>
                                  </div>
                                  <div className='mr-[2rem]'>
                                    <h1 className='text-[2rem]'>${quantity * totalprice}</h1>
                                  </div>
                          </div>
                        </div>
                    </div>
                  ) : (
                    <div>
                      <h1 className='text-[2rem] mb-[5rem] mt-24 '>Your cart is empty</h1>
                      <Image src="/images/cart/empty-cart.png" alt='tkt' height={200} width={200} />
                    </div>
                  )}  
                  </div>
                </div>
            </div>
              <div onClick={toggleback} className='fixed z-[1000] top-0 left-0 w-full h-full bg-black opacity-[50%] 
              overflow-y-hidden'>
              </div>     
        
        </CartProvider>
      )
    }
    
}
