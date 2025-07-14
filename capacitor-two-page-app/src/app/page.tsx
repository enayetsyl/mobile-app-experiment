"use client"
import { Button } from "@/components/ui/button";
import { Card, CardAction,  CardTitle } from "@/components/ui/card";
import {  ArrowBigRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
    const router = useRouter()
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <Card className="p-5 flex flex-col justify-center items-center w-[90%] h-screen m-5">
        <CardTitle>Welcome to my mobile app!</CardTitle>
        <CardAction>
          <Button
          onClick={() => router.push('/hello')}
          >
            Next Page
            <ArrowBigRight />
          </Button>
        </CardAction>
        {/* <CardFooter>
          <Button>Back
            <ArrowBigLeft/>
          </Button>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default Home;
