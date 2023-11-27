import React from 'react'


type includedItemsType = {
    quantity : number;
    item : string
}

type featureProps = {
    features : string;
    includedItems : includedItemsType[];
}

export default function Features(props : featureProps) {
  return (
    <div className='w-full h-[40vh] flex justify-center items-center mt-[10rem]'>
        <div className='w-[69%] h-full flex flex-row justify-between items-center'>
            <div className='w-[60%] h-full flex flex-col'>
                <h1 className='text-[4rem] font-semibold'>FEATURES</h1>
                <p className='text-[2.25rem] text-gray-400 mt-10'>{props.features}</p>
            </div>
            <div className='w-[35%] h-full flex flex-col'>
                <h1 className='text-[4rem] font-semibold'>IN THE BOX</h1>
                <div className='flex flex-col mt-9'>
                    {props.includedItems.map((item, index)=>{
                        return(
                            <div key={index} className='flex flex-row mt-3'>
                                <div className='text-[2rem] font-bold text-[rgba(216,125,74,255)]'>{item.quantity}x</div>
                                <div className='text-[2rem] ml-5 text-gray-400'>{item.item}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}
