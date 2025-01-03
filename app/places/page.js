'use client'
// Library Import 
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
// Components Import
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
// Assets Import
import GardenIce from "@/public/GardenIce.jpg"
import CatsAndIceCream from "@/public/CatsAndIceCream.jpg"
import Timezone from "@/public/Timezone.jpg"
import OhSome from "@/public/OhSome2.webp"
import FineDining from "@/public/dining.webp"
import CGV from "@/public/CGV.jpg"
import PVJ from "@/public/PVJ.webp"
import { Button } from '@/components/ui/button'
// Icon Import
import { Heart } from 'lucide-react';

const placesData = [
  {
    id: 1,
    name: "Garden Ice",
    description: "Ini ice skating, it's really fun. Sebetulnya aku udah lama juga engga ice skating, but if you want to, let's play this together.",
    image: GardenIce
  },
  {
    id: 2,
    name: "Cats and Ice Cream",
    description: "Disini kamu bisa main sama kucing yang banyak jenisnya sambil makan ice cream ^_^. Karena kamu suka banget kucing so i would recommend this.",
    image: CatsAndIceCream
  },
  {
    id: 3,
    name: "Timezone",
    description: "Di timezone kita main bowling and coba permainan yang lain juga.",
    image: Timezone
  },
  {
    id: 4, 
    name: "OhSome! Shopping",
    description: "Di tempat ini barang-barangnya unik, ada painting, lego, skincare, dll.",
    image: OhSome
  },
  {
    id: 5,
    name: "Fine Dining",
    description: "Kita makan malam atau makan siang, banyak opsi ada masakan jepang, steak, lokal juga ada. Feel free to choose whatever you desire.",
    image: FineDining
  },
  {
    id: 6,
    name: "CGV",
    description: "Nonton bioskop sambil ngemil aja sih hehe :).",
    image: CGV
  },
  {
    id: 7,
    name: "Jalan-Jalan & Ngemil",
    description: "Kalau kamu mau eksplor PVJ boleh banget sama aku, kita juga bakal cobain cemil-cemilan yang ada.",
    image: PVJ,
  }
]

const PlacesPage = () => {
  const router = useRouter()

  const [items, setItems] = useState([])
  const [openDialog, setOpenDialog] = useState(null)

  const handleAddToWishlist = (placeName) => {
    setItems((prevItems) => [...prevItems, placeName])
    setOpenDialog(null) 
  }

  return (
    <div className="w-full h-full md:max-w-[400px] shadow-lg bg-white rounded-[48px] flex flex-col items-center justify-start p-8 gap-y-8">
      <p className="text-center font-beanie text-2xl">
        Here are the places I've planned for us to go together. You can pick any place you'd like for a day.
      </p>
      <div className="grid grid-cols-3 gap-4">
        {placesData.map((item) => (
          <Dialog 
            key={item.id} 
            open={openDialog === item.id} 
            onOpenChange={(isOpen) => setOpenDialog(isOpen ? item.id : null)}
          >
            <DialogTrigger>
              <div className="rounded-lg w-full h-[100px] overflow-hidden relative group shadow-lg">
                <Image 
                  src={item.image}
                  alt={item.name}
                  className="object-cover h-[100px] w-[100px] group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/25 hover:bg-black/5 bg-opacity-50 group-hover:bg-opacity-60 transition-all duration-300"></div>
                <p className="text-center font-beanie text-[18px] w-full absolute bottom-1 text-white z-10">{item.name}</p>
              </div>
            </DialogTrigger>
            <DialogContent className="w-[350px] rounded-[12px]">
              <DialogHeader>
                <Image 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[200px] object-cover rounded-xl mb-4"
                />
                <DialogTitle className="font-beanie text-center text-2xl font-normal">
                  {item.name}
                </DialogTitle>
                <DialogDescription className="font-beanie text-center text-xl text-slate-800">
                  {item.description || "No additional details available."}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button 
                  className="w-full space-x-2"
                  onClick={() => handleAddToWishlist(item.name)}
                >
                  Add To My Wishlist <Heart />
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ))}
      </div>
      <div className="flex items-center gap-x-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"outline"} className="w-full space-x-2">
              See My Wishlist <Heart />
            </Button>
          </DialogTrigger>
          <DialogContent  className="w-[350px] rounded-[12px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-beanie font-normal">My Wishlist</DialogTitle>
            </DialogHeader>
            {items.length === 0 ? (
                  <div className='text-slate-600'>Wishlist kosong.</div>
                ) : (
                  <div className='space-y-2'>
                    {items.map((item, index) => (
                      <div className='w-full px-4 py-2 border-[1px] border-slate-200 rounded-lg flex items-center justify-between' key={index}>
                        <p>{item}</p>
                        <button 
                        className='text-xl font-beanie text-red-500' 
                        onClick={() => {
                          setItems((prevItems) => prevItems.filter((_, i) => i !== index))
                        }}>
                          hapus
                        </button>
                      </div>
                    ))}
                  </div>
                )}
          </DialogContent>
        </Dialog>
        <Button 
          className="w-full space-x-2"
          onClick={() => router.push("/date")}
        >
          Confirm
        </Button>
      </div>
    </div>
  )
}

export default PlacesPage