'use client';

import Link from "next/link"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { BeautifulWaveCanvas, SimpleMatrixCanvas, } from "@/components/canvases";
import { ScrollArea } from "@/components/ui/scroll-area";

function IndexPage() {
  return ( 
    <>
    <div>
    <div className="relative w-full h-full">
      <div className="absolute z-10 w-full h-full mix-blend-screen">
        <BeautifulWaveCanvas />
      </div>
      <div className="absolute z-30 w-full h-full">
        <div id="main-div" className="m-4">
        <div className="bg-black/0 mix-blend-color-dodge">
        <div className="flex gap-1.5 ">
          <p className="font-bold">calvin ducharme, 21</p>
          <Link href="mailto:c@calvin.art" className="fade-in text-muted-foreground">c@calvin.art</Link>
        </div>
        <p className="text-muted-foreground">building webapps for local businesses, learning about ai + information tech</p>
        </div>
        <div className="mt-2">
        <Card className="bg-[hsl(var(--card))]/70">
          <ScrollArea className="p-4 h-[500px]">
            <div>
              <Link href="https://peden.net" className="text-blue-300 underline">Peden Excavation</Link>
              <div className="flex gap-1.5 items-end">
                <p className="text-sm">webapp, marketing</p>
                <p className="text-xs text-muted-foreground">current</p>
              </div>
              <ul className="text-muted-foreground text-xs">
                <li>• made it easy to upload projects to web</li>
                <li>• created a bot that automatically uploads those posts to facebook, using chatGPT for wording</li>
                <li>• took over the google ads campaign, doubled results</li>
                <li>• handle customer testimonials</li>
              </ul>
            </div>
            <div>
            <Link href="https://shh.calvin.art" className="text-blue-300 underline">shh</Link>
              <div className="flex gap-1.5 items-end">
                <p className="text-sm">peer-to-peer livestreaming app</p>
                <p className="text-xs text-muted-foreground">2023</p>
              </div>
              <ul className="text-muted-foreground text-xs">
                <li>• free, open-source project built for UBC community</li>
                <li>• stream audio from the library piano without disturbing readers </li>
              </ul>
            </div>
            <div>
              <p className="text-blue-300">life-coach</p>
              <div className="flex gap-1.5 items-end">
                <p className="text-sm">health app</p>
                <p className="text-xs text-muted-foreground">private alpha</p>
              </div>
              <ul className="text-muted-foreground text-xs">
                <li>• chat with an AI trained on the best science about how to improve your health</li>
                <li>• upload your health data to get personalized results </li>
                <li>• fitness routine & health regimen designed for you, customized by you</li>
                <li>• automatic sourcing & ordering of supplements</li>
              </ul>
            </div>
            <div>
              <Link href="https://aslanpro.com" className="text-blue-300 underline">Aslan Pro</Link>
              <div className="flex gap-1.5 items-end">
                <p className="text-sm">web design, copywriting</p>
                <p className="text-xs text-muted-foreground">2023</p>
              </div>
              <ul className="text-muted-foreground text-xs">
                <li>• improved website visitor experience</li>
                <li>• crafted a compelling narrative about company values </li>
              </ul>
            </div>
            <div>
              <Link href="https://instagram.com/glyptodon" className="text-blue-300">glyptodon</Link>
              <div className="flex gap-1.5 items-end">
                <p className="text-sm">alt rock band</p>
                <p className="text-xs text-muted-foreground">2022</p>
              </div>
              <ul className="text-muted-foreground text-xs">
                <li>• rhythm guitarist and lead singer</li>
                <li>• played twice a week for like 3 years</li>
                <li>• we don&apos;t play much anymore as I focus on software development</li>
              </ul>
            </div>
          </ScrollArea>
          </Card>
        </div>
        <div className="mt-2 flex justify-end">
          <Link href="https://twitter.com/calvinducharme"><Icons.twitter/></Link>
        </div>
      </div>
      </div>
    </div>
      
    </div>
    </>
  )}

export default function SaturnIndexPage() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-black">
      <div className="w-full h-full">
        <SimpleMatrixCanvas className="w-full h-full z-20" rgbacolor='rgba(255, 255, 255, 0.5)' />
      </div>
      <div className="absolute bg-gradient-to-br from-orange-900 to-blue-900 opacity-90 mix-blend-overlay w-full h-full top-0 left-0 z-30"/>
      <div className="absolute flex justify-center w-full h-full top-0 left-0 items-center z-40 backdrop-blur-sm">
        <div className=" rounded  p-8 font-sans text-white items-center flex flex-col">
          <span>I am the human they call &quot;calvin.&quot;</span>
          <span className="text-muted-foreground font-light">I use software to solve problems. I also do other things. </span>
          <div className="flex gap-4 justify-center items-center">

          <Link href="https://saturn.calvin.art" className="">
            <Icons.saturn className="h-[50px] w-[50px] fill-white stroke-white"/>
          </Link>
          <Link href="https://hyperfollow.com/calvinducharme" className="">
            <Icons.music className="h-[40px] w-[40px] stroke-white"/>
          </Link>
          <Link href="https://podcasters.spotify.com/pod/show/calvin-ducharme" className="">
            <Icons.mic className="h-[50px] w-[50px] fill-white stroke-white"/>
          </Link>
          <Link href="https://x.com/calvinducharme">
            <Icons.twitter className="h-[30px] w-[30px] fill-white stroke-white"/>
          </Link>
          </div>

        </div>
      </div>
    </div>
  )
} 
