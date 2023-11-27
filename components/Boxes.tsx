import React from 'react'
import { Box } from '.'

export default function Boxes() {
  return (
    <div className='flex flex-row'>
        <Box image="/images/category-headphones/desktop/headphones-main.png" title='HEADPHONES'/>
        <Box image='/images/category-speakers/desktop/lespeaker.png' title='SPEAKERS'/>
        <Box image='/images/category-earphones/desktop/earphoones.png' title='EARPHONES'/>
    </div>
  )
}
