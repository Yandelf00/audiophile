import React from 'react'
import { useCartContext } from '@/context/cartContext';
import ShowCase from './ShowCase'

type Items = {
  id : number;
  counter : number;
}
type ShowProps = {
  items : Items[];

}
export default function Show(props : ShowProps) {
    const { showItems } = useCartContext()
  return (
      <div className= 'mt-24'>
          {props.items?.map(item=>(
              <div className='w-full h-full' key={item.id}>
                  <ShowCase id = {item.id} counter = {item.counter} />
              </div>
          ))}
      </div>

  )
}
