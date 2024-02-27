'use client'

import { useState } from 'react';

export default function Heading() {
    return (
        <a href="home" className="py-10 items-center text-8xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 animate-text inline-block text-transparent bg-clip-text">
            {/* <img className="w-8 h-8 mr-2" alt="logo" src={String(logo)}/> */}
            Nexus Console
        </a>

    );
}