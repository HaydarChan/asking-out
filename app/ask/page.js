"use client"
// Library Import
import Image from "next/image";
import { useRouter } from "next/navigation";
// Asset Import
import Cat from "@/public/cat.gif"
import { Button } from "@/components/ui/button";
// Icons Import
import { Smile, Frown } from 'lucide-react';

const AskPage = () => {
  const router = useRouter()

  return (
    <div className="w-full h-full md:max-w-[400px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] bg-white rounded-[48px] flex flex-col items-center justify-center p-8 gap-y-8">
      <Image 
        src={Cat}
        alt="Cat Gif"
        width={200}
        height={200}
      />
      <div>
        <p className="text-xl font-beanie text-center">Hi, I just wanted to tell you that I think you’re absolutely amazing and incredibly fun to talk to. I’d love the chance to spend some time with you and get to know you better. Would you like to go out with me?</p>
      </div>
      <div className="flex items-center gap-x-4">
        <Button onClick={() => router.push("/places")}>
          Yes <Smile />
        </Button>
        <Button variant={"outline"}>
          No <Frown />
        </Button>
      </div>
    </div>
  )
}

export default AskPage