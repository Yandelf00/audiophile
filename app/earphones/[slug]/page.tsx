import React from 'react'
import data from '@/data/products.json'
import { Navbar, Boxes, Experience, Footer, Product, Features, Galerie } from '@/components'
import { CartProvider } from '@/context/cartContext'


type pageProps = {
    params : { slug : string }
}

export default function page({ params } : pageProps) {
    const dataa = data.products.find(product => product.slug === params.slug)
    if( dataa?.name !== null && dataa?.name !== undefined && dataa?.category === "earphones")
    {
        return (
            <CartProvider>
                <main className="flex justify-center flex-col">
                    <div className="w-full bg-[rgba(25,25,25,255)] h-[10vh] flex flex-col">
                        <Navbar/>
                    </div>
                    <div className='w-full flex items-center flex-col'>
                        <Product id={dataa.id} name = {dataa.name} description={dataa.description} price={dataa.price} image={dataa.categoryImage.desktop}/>
                        <Features features={dataa.features} includedItems={dataa.includedItems}/>
                        <Galerie gallery = {dataa.others}/>
                        <Boxes/>
                        <Experience/>
                        <Footer/>
                    </div>  
                </main>
            </CartProvider>
        )
    }
    else
    {
        return(
            <div> nothing my friend </div>
        )
    }
}

