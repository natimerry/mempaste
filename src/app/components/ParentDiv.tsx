'use client'

import { useState } from 'react';
interface IProps {
  children: React.ReactNode;
}
export default function RootContainer({children}: IProps) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-svh sm:h-screen lg:py-0 overflow-hidden">
        {children}
    </div>

  );
}