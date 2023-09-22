'use client';

import Link from "next/link"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card";
import { Icons } from "@/components/icons";

export default function IndexPage() {
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);
  
  // useEffect(() => { //render matrix title
  //   const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  //   if (canvas) {
  //   const context = canvas.getContext('2d');
  //   if (context) {
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerWidth/7.5;
  //   canvas.style.height = canvas.height + 'px';
  //   // const alphabet = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0987654321!@#$%^&*()';
  //   const alphabet = 'w'
  
  //   let fontSize = 8;
  //   const columns = canvas.width/fontSize;
  
  //   const rainDrops: number[] = Array.from({ length: columns }, () => 0);

  //   for( let x = 0; x < columns; x++ ) {
  //       rainDrops[x] = 1;
  //   }
  
  //   const draw = () => {
  //   //   context.fillStyle = 'rgba(0, 0, 0, 0.04)';
  //   //   context.fillRect(0, 0, canvas.width, canvas.height);
  
  //     context.fillStyle = '#82F';
  //     context.font = fontSize + 'px monospace';
  
  //     for(let i = 0; i < rainDrops.length; i++)
      
  //     {
  //       const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  //         context.fillText(text, i*fontSize, rainDrops[i]*fontSize, 8);
  
  //         if(rainDrops[i]*fontSize > canvas.height){
  //         // if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
  //             // rainDrops[i] = 0;
  //             if (intervalId) {
  //               clearInterval(intervalId);
  //             }
  //         }
  //         rainDrops[i]++;
  //     }
  //   };
  
  //   setIntervalId(() => {
  //     const intervalId = setInterval(draw, 30);
  //     return intervalId;
  //   })
  //   setTimeout(() => {setTitleRendered(true)}, 300)
    
  //   }}
  // }, [])

  return (
    <>
      <div id="main-div" className="m-4">
        <div className="flex gap-1.5">
          <p className="font-bold">calvin ducharme, 21</p>
          <Link href="mailto:c@calvin.art" className="fade-in text-muted-foreground">c@calvin.art</Link>
        </div>
        <p className="text-muted-foreground">funding my startup (life-coach) by building webapps for local businesses</p>
        <div className={" mt-2"}>
          <Card>
          <CardContent className="mt-4">
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
              <p className="text-blue-300 underline">life-coach</p>
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
              <Link href="https://instagram.com/glyptodon" className="text-blue-300 underline">glyptodon</Link>
              <div className="flex gap-1.5 items-end">
                <p className="text-sm">alt rock band</p>
                <p className="text-xs text-muted-foreground">2022</p>
              </div>
              <ul className="text-muted-foreground text-xs">
                <li>• rhythm guitarist and lead singer</li>
                <li>• we don&apos;t play much anymore as I focus on software development</li>
              </ul>
            </div>
          </CardContent>
          </Card>
        </div>
        <div className="mt-2 flex justify-end">
          <Link href="https://twitter.com/calvinducharme"><Icons.twitter/></Link>
        </div>
      </div>
    </>
  )}