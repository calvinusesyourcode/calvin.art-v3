'use client'

import React, { useEffect, useState, useRef } from 'react';

export function BeautifulWaveCanvas() {
    // const [renderStrokes, setRenderStrokes] = useState(true);
    const renderStrokes = useRef(true)
  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d");
    if (canvas && context) {
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    context.globalAlpha = 1
    context.lineWidth = 0.1;
    const colors = ["#0AE7FF", "#DA4167"]
    context.strokeStyle = colors[Math.floor(Math.random()*colors.length)]
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';


    let a = Math.random() * 4 - 2;
    let b = Math.random() * 4 - 2;
    let c = Math.random() * 4 - 2;
    let d = Math.random() * 4 - 2;

    const points: {x: number, y: number, vx: number, vy: number}[] = [];
    for (let y = 0; y < height; y += 5) {
      points.push({
        x: 0,
        y: y,
        vx: 0,
        vy: 0
      });
    }

    const render = () => {
      if (context.globalAlpha != 0) {
        // context.fillStyle = "rgba(0, 0, 0, 0.04)"
        // context.fillRect(0, 0, width, height)
        for (let i = 0; i < points.length; i++) {
          const p = points[i];
          const value = getValue(p.x, p.y, a, b, c, d, width, height);
          p.vx += Math.cos(value) * 0.3;
          p.vy += Math.sin(value) * 0.3;

          context.beginPath();
          context.moveTo(p.x, p.y);

          p.x += p.vx;
          p.y += p.vy;
          context.lineTo(p.x, p.y);
          context.stroke();

          p.vx *= 0.99;
          p.vy *= 0.99;

          if (p.x > width) p.x = 0;
          if (p.y > height) p.y = 0;
          if (p.x < 0) p.x = width;
          if (p.y < 0) p.y = height;
        }

        requestAnimationFrame(render);
      }
    };

    render();

    const opacityFade = () => {
      context.globalAlpha -= 0.1;
      if (context.globalAlpha > 0.1) {
        setTimeout(() => {opacityFade()}, 200)
      } else {
        context.globalAlpha = 0;
      }
    }
    setTimeout(() => {opacityFade()}, 2000)

  }}, []);

  const getValue = (x: number, y: number, a: number, b: number, c: number, d: number, width: number, height: number) => {
    const scale = 0.005;
    x = (x - width / 2) * scale;
    y = (y - height / 2) * scale;

    const x1 = Math.sin(a * y) + c * Math.cos(a * x);
    const y1 = Math.sin(b * x) + d * Math.cos(b * y);

    return Math.atan2(y1 - y, x1 - x);
  }

  return (<canvas id="canvas"></canvas>)
}
export function BeautifulWaveCanvas2() {
    // const [renderStrokes, setRenderStrokes] = useState(true);
    const [array, setArray] = useState<number[]>([])
    const renderStrokes = useRef(true)
  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d");
    if (canvas && context) {
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    context.globalAlpha = 1
    context.lineWidth = 0.1;
    const colors = ["#0AE7FF", "#DA4167"]
    context.strokeStyle = colors[Math.floor(Math.random()*colors.length)]
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';

    
    let a = Math.random() * 4 - (2 * Math.random());
    let b = Math.random() * 4 - (2 * Math.random());
    let c = Math.random() * 4 - (2 * Math.random());
    let d = Math.random() * 4 - (2 * Math.random());
    // [a, b, c, d] = [1.2107424904368584,0.5148249435907468,2.0640536825137406,2.432117278180983]
    
    setArray([a,b,c,d]);
    // let a = 2
    // let b = 2.5
    // let c = 1
    // let d = 1

    const points: {x: number, y: number, vx: number, vy: number}[] = [];
    for (let y = 0; y < height; y += 5) {
      // if (y % 2 == 0 ) continue
      points.push({
        x: 0,
        y: y/4,
        vx: 0,
        vy: 0
      });
    }

    const render = () => {
      if (context.globalAlpha != 0) {
        context.fillStyle = "rgba(0, 0, 0, 0.05)"
        context.fillRect(0, 0, width, height)
        for (let i = 0; i < points.length; i++) {
          const p = points[i];
          const value = getValue(p.x, p.y, a, b, c, d, width, height);
          p.vx += Math.cos(value) * 0.3;
          p.vy += Math.sin(value) * 0.3;

          context.beginPath();
          context.moveTo(p.x, p.y);

          p.x += p.vx;
          p.y += p.vy;
          context.lineTo(p.x, p.y);
          context.stroke();

          p.vx *= 0.99;
          p.vy *= 0.99;

          // if (p.x > width) p.x = 0;
          // if (p.y > height) p.y = 0;
          // if (p.x < 0) p.x = width;
          // if (p.y < 0) p.y = height;
        }

        requestAnimationFrame(render);
        
      }
    };

    render();
    // setInterval(() => {render()}, 100)

    const opacityFade = () => {
      context.globalAlpha -= 0.1;
      if (context.globalAlpha > 0.1) {
        setTimeout(() => {opacityFade()}, 200)
      } else {
        context.globalAlpha = 0;
      }
    }
    setTimeout(() => {opacityFade()}, 10000)

  }}, []);

  const getValue = (x: number, y: number, a: number, b: number, c: number, d: number, width: number, height: number) => {
    const scale = 0.005;
    x = (x - width / 2) * scale;
    y = (y - height / 2) * scale;

    const x1 = Math.sin(a * y) + c * Math.cos(a * x);
    const y1 = Math.sin(b * x) + d * Math.cos(b * y);

    return Math.atan2(y1 - y, x1 - x);
  }

  return (
    <>
    <p>{JSON.stringify(array)}</p>
  <canvas id="canvas"></canvas>
    </>
  )
}


export function Saturn() {
  
  const alphabet = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  
  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const fontSize = 8;
    let columns = canvas.width/fontSize;
    // columns = 100;
    const radius = 500;
    let angle = 0;
    
  
  //   let waves = Array.from({ length: columns }, (_, i) => Math.floor(Math.random()*canvas.width));
  //   let waves2 = Array.from({ length: columns }, (_, i) => false);
    //waves = waves.filter((_, i) => i % 20 === 0);
  let angles = Array.from({ length: columns}, () => Math.random()*5)
  // let angles = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    const draw = () => { if (canvas && context) {
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);
  
      context.fillStyle = '#3bccdf';
      context.font = fontSize + 'px monospace';
      //context.fillText(`${canvas.width} by ${canvas.height}`, canvas.width/3, canvas.height/2);

      // create 10 different waves to loop through and draw text
      // each wave is offset by some pixels and has a different x value offset
      for(let j = 0; j < 1; j++) {

        for(let i = 0; i < 20; i++) {
          const x = canvas.width/2.4 + radius * Math.cos(angles[i]) + canvas.width/20*(i/5);
          const yNatural = canvas.height/2 + radius * Math.sin(angles[i]);
          // const y = yNatural / 10 + x/8 + canvas.height/6;
          const y = (yNatural / 10) + x/8 + canvas.height/3;
          //const y = combinedFunction(x, canvas) + (i)*fontSize - canvas.height/2;
          // const y = combinedFunction(x, canvas) + (i)*fontSize/1.2 - canvas.height/4 + 200; 
          const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length)); 
          const calc = (Math.sqrt(Math.pow(x-canvas.width/2,2) + Math.pow(y-canvas.height/2, 2))) < 200 && y < canvas.height*.5
          if (!calc) context.fillText(text, x, y);
          console.clear()
          console.log(angles[i])

          angles[i] += ((20-i+1)/2)*.005;
        }
      }
      requestAnimationFrame(draw);
    }};
    
    draw()
  // setInterval(() => {draw()},10)
  }, [])
  
  
  
  
  
return (
  <>
    <canvas id="canvas" />
  </>
)
}

export function SimpleMatrixCanvas(props: { rgbacolor?: string, [x: string]: any }) {
  const { rgbacolor, ...restProps } = props;
  const matrixCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const alphabet = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0987654321!@#$%^&*()'
  useEffect(() => {
    const canvas = matrixCanvasRef.current;
    const context = canvas?.getContext("2d") as CanvasRenderingContext2D
    if (canvas && context) {
    const width = canvas.width
    const height = canvas.height
    const color = rgbacolor ? rgbacolor : 'rgba(0, 255, 0, 0.5)'
    console.log(rgbacolor, color)

    const fontSize = 2
    context.font = `${fontSize}px monospace`;

    const points: number[] = []
    for (let x = 0; x < width; x += fontSize) {points.push(height * 1.05)}

    const render = () => {
      context.fillStyle = "rgba(0, 0, 0, 0.05)"
      context.fillRect(0, 0, width, height)
      context.fillStyle = color
      for (let i = 0; i < points.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        context.fillText(text, i*fontSize, points[i]*fontSize)
        if (points[i]*fontSize > height && Math.random() > 0.975) {
          points[i] = 0
        }
        points[i]++
      }
      setTimeout(() => {render()}, 100)
    }
    render()
    }

  }, [])

  return (<canvas ref={matrixCanvasRef} {...restProps}></canvas>)
}