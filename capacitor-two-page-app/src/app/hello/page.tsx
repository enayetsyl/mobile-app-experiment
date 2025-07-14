"use client"

import { Button } from '@/components/ui/button'
import { Card, CardFooter, CardTitle } from '@/components/ui/card'
import { ArrowBigLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Hello = () => {
  const router = useRouter()
  return (
   <div className="flex flex-col justify-center items-center w-full h-screen">
         <Card className="p-5 flex flex-col justify-center items-center w-[90%] h-screen m-5">
        <CardTitle>Hello World</CardTitle>
      
        <CardFooter>
          <Button 
          onClick={() => router.back()}
          >
            Back
            <ArrowBigLeft/>
          </Button>
        </CardFooter>
      </Card></div>
  )
}

export default Hello