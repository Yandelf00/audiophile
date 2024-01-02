import Image from 'next/image'
import { Boxes, Earphones, Hero, Navbar, Speaker, Speakertwo, Experience, Footer } from '@/components'
import './globals.css'
import { CartProvider } from '@/context/cartContext'

export default function Home() {
  return (
    <CartProvider>
      <main className="flex justify-center flex-col w-full">
        <div className="w-full bg-size bg-[url('/images/home/desktop/image-hero.jpg')] bg-cover bg-center bg-no-repeat">
          <Navbar/>
          <Hero/>
        </div>
        <div className='w-full h-[300vh] flex items-center flex-col'>
          <Boxes/>
          <Speaker/>
          <Speakertwo/>
          <Earphones/>
          <Experience/>
          <Footer/>
        </div>    
      </main>
    </CartProvider>
  )
}
