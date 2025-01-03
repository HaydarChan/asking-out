// Library Import
import React from 'react'
import Image from "next/image";
// Asset Import
import Cat from "@/public/cat2.gif"

const ThanksPage = () => {
  return (
    <div className="w-full h-full md:max-w-[400px] shadow-lg bg-white rounded-[48px] flex flex-col items-center justify-center p-8 gap-y-8">
       <Image 
          src={Cat}
          alt="Cat Gif"
          width={200}
          height={200}
        />
       <div>
        <p className="text-3xl font-beanie text-center">ThankYou ^_^</p>
        <p className='font-beanie text-2xl text-center'>See you on Saturday, February 15 th, 2024!</p>
      </div>
    </div>
  )
}

export default ThanksPage