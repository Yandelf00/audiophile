import React from 'react'
import { Theeme, Settheeme } from './Themeprovider'

export default function Bbox() {
    const value = Theeme()
    const toggle = Settheeme()
    const themestyle = {
        backgroundColor: value? "black" : "white"
    }
  return (
    <div>
        <button onClick={toggle} className='h-[3rem] w-[10rem] bg-white'>change color</button>
        <div className='h-[10rem] w-[10rem] mt-[3rem]' style={themestyle}>
        </div>   
    </div>
  )
}
