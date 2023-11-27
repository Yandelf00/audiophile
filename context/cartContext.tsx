"use client"
import React, { useState, useContext, useEffect} from 'react'

type ShoppingCartProviderProps = {
    children: React.ReactNode | JSX.Element
  }

type itemType = {
  id : number ;
  counter : number;
}

type userType = {
  showItems : ()=>void;
  addItem : (id:number, counter : number)=>void;
  subItem : (id:number, counter : number)=>void;
  plusItem : (id:number, counter : number)=>void;
  items : itemType[];
  quantity: number;
}
const cartContext = React.createContext({} as userType)
export function useCartContext(){
   return useContext(cartContext)
}

export function CartProvider({ children }: ShoppingCartProviderProps)
{
    const [items, setItems] = useState<itemType[]>([])
    const [quantity, setQuantity] = useState<number>(0)
    function addItem(leid:number, lecounter:number) : void{
      setItems((currItems) => {
        let check : boolean = false; 
        for(const item of currItems){
            if (item.id == leid){
              check = true;
            }
        }
        if (check === false ){
          return [...currItems, {id : leid, counter : lecounter}]
        }
        else {
          return currItems.map((item)=>{
            if (item.id === leid){
              return {...item, counter : item.counter + lecounter}
            }
            else {
              return item
            }
          })
        }
      });
    }
    function subItem(leid:number, lecounter:number) : void{
      setItems((currItems) => {
          if (lecounter === 1){
            return []
          }
          else {
            return currItems.map((item)=>{
              if (item.id === leid){
                return {...item, counter : item.counter - 1}
              }
              else {      
                return item
              }
            })  
          }  
      });
    }
    function showItems(){
        console.log(items)
    }
    function plusItem(leid:number, lecounter:number) : void{
      setItems((currItems) => {
          return currItems.map((item)=>{
            if (item.id === leid){
              console.log("this is a plus try")
              return {...item, counter : item.counter + lecounter}
            }
            else {
              return item
            }
          })     
        // const newItem = { id: leid, counter: lecounter };
        // const newItems = [...currItems, newItem];
        // return newItems;
      });
    }
    useEffect(()=>{
      setQuantity(()=>{
        let number = 0;
        for(const item of items){
          number = number + item.counter
        }
        return number
      })
    }, [items])
  return (
    <cartContext.Provider value={{showItems, addItem, plusItem, subItem, items, quantity}}>
        {children}
    </cartContext.Provider>   
  )
}
