"use client"
// Libary Impoty
import React from 'react'
import { useRouter } from 'next/navigation'
// Components Import
import { DatePickerWithPresets } from '@/components/DatePicker'
import { Button } from '@/components/ui/button'
// Icons Import
import { MoveLeft, MoveRight } from 'lucide-react';

const DatePage = () => {
  const router = useRouter()

  return (
    <div className="w-full h-full md:max-w-[400px] shadow-lg bg-white rounded-[48px] flex flex-col items-center justify-center p-8 gap-y-8">
      <p className="text-center font-beanie text-2xl">
        Please pick a date when you're free and not busy."
      </p>
      <div className='w-full flex items-center justify-center'>
        <DatePickerWithPresets />
      </div>
      <div className='w-full flex items-center justify-center gap-x-4'>
        <Button className="w-[100px] space-x-2" variant={"outline"} onClick={() => router.push("/places")}>
          <MoveLeft /> Prev
        </Button>
        <Button className="w-[100px] space-x-2" onClick={() => router.push("/thanks")}>
          Next <MoveRight />
        </Button>
      </div>
    </div>
  )
}

export default DatePage