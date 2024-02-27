'use client'

import { useState } from 'react';
interface IProps {
    children: React.ReactNode;
}
export default function Dialog({ children }: IProps) {

    return (
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 dark:bg-zinc-900 bg-slate-50 rounded-lg border-2  border-gray-700 dark:border-white ">
            {children}
        </div>
    );
}