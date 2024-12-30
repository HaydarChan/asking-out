"use client"
// Library Import
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// Components Import
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// Asset Import
import Flower from "@/public/giphy.gif"
// Icon Import 
import { LogIn } from 'lucide-react';

export default function Home() {
  const router = useRouter()

  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true)
  
  const password = 200304;

  function onSubmit() {
    if (inputValue === password.toString()) {
      router.push("/ask")
    } else {
      setIsValid(false)
    }
  }

  return (
    <div className="w-full h-full md:max-w-[400px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] bg-white rounded-[48px] flex flex-col items-center justify-start p-8 gap-y-8">
      <Image 
        src={Flower}
        alt="Flower Gif"
        width={200}
        height={200}
      />
      <div>
        <h1 className="text-4xl font-beanie text-center">Hi, Grace..</h1>
        <p className="text-2xl font-beanie text-center">i hope you're doing fine, this is a letter for you ^_^</p>
      </div>
      <div className="flex items-center gap-x-2">
        <Input 
          className="focus-visible:ring-transparent border-slate-400 placeholder:font-beanie placeholder:text-xl w-[200px]"
          placeholder="enter the passcode"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button onClick={onSubmit} className="space-x-2">
          Masuk <LogIn />
        </Button>
      </div>
      {!isValid && (
        <p className="text-center text-xl font-beanie text-red-400">Yahh, passcodenya salah, boleh coba lagi</p>
      )}
    </div>
  );
};