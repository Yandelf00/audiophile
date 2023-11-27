"use client"

import React, { useState } from 'react'
import Bbox from './Bbox'
import { Themeprovider } from './Themeprovider';

export default function page() {
  return (
    <main className="flex justify-center flex-col w-full h-[20rem] bg-slate-500">
       <Themeprovider> 
            <Bbox/>
       </Themeprovider>   
    </main>
  )
}