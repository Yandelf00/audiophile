import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type othersType = 
{
    slug: string;
    name: string;
    image: {
          mobile: string;
          tablet: string;
          desktop: string;
        }
}

type GalerieProps = 
{
    gallery : othersType[]
}

export default function Galerie(props : GalerieProps) {

  return (
    <div className='w-full h-[50vh] flex flex-col justify-center items-center '>
        <h1 className='text-[4rem] font-semibold mb-[10rem]'>YOU MAY ALSO LIKE</h1>
        <div className='w-[69%] h-full flex flex-row  justify-center items-center'>
            <div className='flex flex-col items-center h-full w-full '>
                <div className='bg-[rgba(241,241,241,255)] flex h-[80%] w-[70%] rounded-2xl justify-center items-center'>
                    <Image src={props.gallery[0]?.image.desktop} alt='tkt' width={600} height={600}/>
                </div>
                <h1 className='text-[3rem] font-semibold mt-6'>{props.gallery[0]?.name}</h1>
                <button className='w-[40%] mt-6 h-[5rem] bg-[rgba(216,125,74,255)] hover:bg-[rgb(253,176,132)] text-white text-[1.5rem] font-bold'>
                <Link href={`/${props.gallery[0]?.slug}`}>
                        SEE PRODUCT
                </Link>
                </button>
            </div>
            <div className='flex flex-col items-center h-full w-full'>
                <div className='bg-[rgba(241,241,241,255)] flex h-[80%] w-[70%] rounded-2xl justify-center items-center'>
                    <Image src={props.gallery[1]?.image.desktop} alt='tkt' width={600} height={600}/>
                </div>
                <h1 className='text-[3rem] font-semibold mt-6'>{props.gallery[1]?.name}</h1>
                <button className='w-[40%] mt-6 h-[5rem] bg-[rgba(216,125,74,255)] hover:bg-[rgb(253,176,132)] text-white text-[1.5rem] font-bold'>
                <Link href={`/${props.gallery[1]?.slug}`}>
                        SEE PRODUCT
                    </Link>
                </button>
            </div>
            <div className='flex flex-col items-center h-full w-full'>
                <div className='bg-[rgba(241,241,241,255)] flex h-[80%] w-[70%] rounded-2xl justify-center items-center'>
                    <Image src={props.gallery[2]?.image.desktop} alt='tkt' width={600} height={600}/>
                    </div>
                    <h1 className='text-[3rem] font-semibold mt-6'>{props.gallery[2]?.name}</h1>
                    <button className='w-[40%] mt-6 h-[5rem] bg-[rgba(216,125,74,255)] hover:bg-[rgb(253,176,132)] text-white text-[1.5rem] font-bold'>
                    <Link href={`/${props.gallery[2]?.slug}`}>
                        SEE PRODUCT
                    </Link>
                    </button>
            </div>
        </div>
    </div>
  )
}
