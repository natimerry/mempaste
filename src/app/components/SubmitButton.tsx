'use client'

import { useState } from 'react';


type ChildComponentProps = { disabled?: boolean, style?: any, on_click: any, children?: React.ReactNode };
export default function SubmitButton({ disabled, style, on_click, children }: ChildComponentProps) {

    return (
        <div>
            <button
                disabled={disabled}
                type="button"
                onClick={on_click}
                className="w-full  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-black text-white
                dark:text-black
                transition-all duration-[250ms] ease-out    
                
                hover:bg-gray-300
                hover:text-black
                
                dark:bg-white
                dark:hover:text-white
                dark:hover:bg-black
                "
                style={style}>
                {children}
            </button>
        </div>

    );
}