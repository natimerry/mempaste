'use client'

import { useState } from 'react';


type ChildComponentProps = { type: string, label: string; value: string; onchange_func?: any };
export default function FormTextInput({type, label, value, onchange_func }: ChildComponentProps) {

  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <input
        id="username"
        type={type}
        value={value}

        className="bg-gray-100 w-full text-black hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 dark:hover:bg-zinc-800 dark:focus:ring-white dark:bg-zinc-900 border
        border-black
        dark:border-white
        dark:text-white
        "
        
        onChange={onchange_func}
        placeholder={label.split(' ').pop()}
        required />
    </div>

  );
}