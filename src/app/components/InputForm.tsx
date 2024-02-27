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
        onChange={onchange_func}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={label.split(' ').pop()}
        required />
    </div>

  );
}