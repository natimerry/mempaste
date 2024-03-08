"use client"

import React, { useState } from 'react';
import SideBar from "@/components/Dashboard/SideBar"
import { DATAPROPS } from '@/components/Dashboard/data';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export default function dashboardPage() {
    let data: DATAPROPS = {
        url: "default"
    }
    const [view, setCurView] = useState<DATAPROPS>(data);
    function update_view(data: DATAPROPS) {
        setCurView(data);
    }
    const [sidebar, set_sidebar_toggle] = useState<boolean>(true);

    function toggleSidebar() {
        set_sidebar_toggle(true);
    }


    return (
        <div className='flex flex-row items-start justify-start h-svh w-screen overflow-hidden'>
            {sidebar ? <SideBar set_toggle={set_sidebar_toggle} set_view={update_view} data={Array.from({ length: 50 })} /> : ''}
            <div className={`h-screen w-full items-center justify-center p-6 ${!sidebar ? 'ml-auto' : ''}`}>
                {view.url == "default" ? <p className='text-4xl text-center'> Click on a note to get started!</p> :
                    <div className='h-full flex flex-col'>
                        <div className='flex border-b-2 border-gray-600 flex-row justify-between align-text-bottom pb-4'>
                            <div className='grid grid-cols-2 justify-start gap-0'>
                                <div className='max-w-[40px]'>
                                {!sidebar ? <Button variant="outline" className="border-0 h-full" onClick={toggleSidebar}><Menu /></Button> : ''}
                                </div>
                                <p className=' w-fit font-extrabold text-4xl text-pink-500'> {"Valentines Day Poem "}</p>
                            </div>
                            <Button className='w-fit'>Save</Button>
                        </div>
                        <div className='grow flex-1 pt-2 pb-2'>
                            <Textarea className=' border-pink-500 resize-none h-full text-md' placeholder="Enter some data!!">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus necessitatibus voluptatem mollitia dignissimos reprehenderit voluptatum quod fugit adipisci optio tempora. Modi ad quaerat ipsam cumque consequuntur molestias ut fugit vel?</Textarea>
                        </div>
                    </div>
                }
            </div>
        </div >
    )
} ``
