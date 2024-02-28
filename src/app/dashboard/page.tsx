"use client"

import React, { useState } from 'react';
import RootContainer from '../components/ParentDiv';

import SideBar from "@/components/Dashboard/SideBar"
import { DATAPROPS } from '@/components/Dashboard/data';

export default function dashboardPage() {
    let data:DATAPROPS = {
        url: "default"
    }
    const [view,setCurView] = useState<DATAPROPS>(data);

    function update_view(data:DATAPROPS){
        setCurView(data);
    }
    return (
        <div className='flex flex-row items-start justify-start h-svh w-screen overflow-hidden'>
            <SideBar set_view={update_view} data={Array.from({ length: 50 })}/>
            <div className="min-h-svh w-full items-center justify-center p-6 -z-10">
                <p className="font-semibold text-center">{view.url}</p>
            </div>
        </div >
    )
}``