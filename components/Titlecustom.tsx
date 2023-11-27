import React from 'react'

type TitlecustomProps = {
    title : string,
}
export default function Titlecustom(props : TitlecustomProps) {
  return (
    <div className='w-full flex justify-center items-center'>
        <div className='w-[75%] h-[25vh] flex justify-center items-center'>
            <h1 className='text-[7rem] font-semibold text-slate-100'>{props.title}</h1>
        </div>
    </div>
  )
}
