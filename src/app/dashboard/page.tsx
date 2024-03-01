"use client"

import React, { useState } from 'react';
import SideBar from "@/components/Dashboard/SideBar"
import { DATAPROPS } from '@/components/Dashboard/data';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function dashboardPage() {
    let data: DATAPROPS = {
        url: "default"
    }
    const [view, setCurView] = useState<DATAPROPS>(data);

    function update_view(data: DATAPROPS) {
        setCurView(data);
    }
    return (
        <div className='flex flex-row items-start justify-start h-svh w-screen overflow-hidden'>
            <SideBar set_view={update_view} data={Array.from({ length: 50 })} />
            <div className="h-screen w-full items-center justify-center p-6">
                {view.url == "default" ? <p className='text-4xl text-center'> Click on a note to get started!</p> :
                    <div className='h-full flex flex-col'>
                        <div className='flex border-b-2 border-gray-600 flex-row justify-between align-text-bottom pb-4'>
                            <p className='w-fit font-extrabold text-4xl text-pink-500'> {view.url}</p>
                            <Button className='w-fit'>Save</Button>
                        </div>
                        <div className='grow flex-1 pt-2 pb-2'>
                            <Textarea className=' border-pink-500 resize-none h-full' placeholder="Enter some data!!">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus necessitatibus voluptatem mollitia dignissimos reprehenderit voluptatum quod fugit adipisci optio tempora. Modi ad quaerat ipsam cumque consequuntur molestias ut fugit vel?</Textarea>
                        </div>
                    </div>
                }
            </div>
        </div >
    )
} ``