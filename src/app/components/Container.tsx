'use client'

import { useState } from 'react';
interface IProps {
  children: React.ReactNode;
}
export default function Container({children}: IProps) {

    return (
        <div className="w-full bg-gray-300 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ring-gray-700">
                {children}
        </div>

    );
}