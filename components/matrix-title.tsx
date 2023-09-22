'use client';

import React, { useEffect, useState } from 'react';

export default function MatrixTitle() {
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);
  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    if (canvas) {
    const context = canvas.getContext('2d');
    if (context) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    // const alphabet = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0987654321!@#$%^&*()';
    const alphabet = 'w'
  
    let fontSize = 8;
    const columns = canvas.width/fontSize;
  
    const rainDrops: number[] = Array.from({ length: columns }, () => 0);

    for( let x = 0; x < columns; x++ ) {
        rainDrops[x] = 1;
    }
  
    const draw = () => {
    //   context.fillStyle = 'rgba(0, 0, 0, 0.04)';
    //   context.fillRect(0, 0, canvas.width, canvas.height);
  
      context.fillStyle = '#82F';
      context.font = fontSize + 'px monospace';
  
      for(let i = 0; i < rainDrops.length; i++)
      
      {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
          context.fillText(text, i*fontSize, rainDrops[i]*fontSize, 8);
  
          if(rainDrops[i]*fontSize > canvas.height){
          // if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
              // rainDrops[i] = 0;
              if (intervalId) clearInterval(intervalId);
          }
          rainDrops[i]++;
      }
    };
  
    setIntervalId(() => {
      const intervalId = setInterval(draw, 30);
      return intervalId;
    })
    
    }}
  }, [])



  return (
      <canvas id="canvas" className="title-mask"></canvas>
  )
};