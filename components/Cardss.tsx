import React from 'react'
import { Card } from '.';

type CardssProps = {
    arr : (number | null)[];
    num : number;
}
export default function Cardss(props : CardssProps) {
    let i = 0;
    let arrey : React.ReactNode[] = [];
    for(i ; i< props.num; i++){
        arrey.push(<div key={i} className='h-full w-full flex justify-center'><Card num={i} key={i} indice={props.arr[i]}/></div>);
    }
    return (
        <div className='flex flex-col w-full h-full justify-center items-center'>
            {arrey}
        </div>
     )
}


