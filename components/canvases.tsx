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
    context.strokeStyle = "#0AE7FF";

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
      if (renderStrokes.current) {
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
      context.globalAlpha -= 0.05
      if (context.globalAlpha > 0) {
        setTimeout(() => {opacityFade()}, 100)
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
