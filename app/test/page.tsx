'use client'

import { Saturn, Stars } from '@/components/canvases';
import React, { useEffect } from 'react';

export default function Test() {

  return (
    <>
      <div className="relative w-full h-full">
        <div id="below" className="absolute z-10 w-full h-full mix-blend-screen">
          <Stars />
        </div>
        <div id="above" className="absolute z-30 w-full h-full mix-blend-lighten">
          <Saturn />
        </div>
      </div>
    </>
  )
}
