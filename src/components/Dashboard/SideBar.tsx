'use client'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Menu, SlidersHorizontal, SunMoon, X } from 'lucide-react';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { DATAPROPS } from "./data"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "../ui/ThemeSwitcher"

interface Props {
    set_view: Dispatch<SetStateAction<any>>,
    data: Array<Number>
}


export let visible_export = true;
export default function SideBar({ set_view, data }: Props) {

    const [isVisible, setVisible] = useState(true);

    function toggleSidebar() {
        setVisible(!isVisible);
        visible_export = isVisible;
        console.log("TOGGLED TO " + visible_export)

    }
    const handle_click = (event: any) => {
        console.log(event.currentTarget.id);
        let data: DATAPROPS = {
            url: event.currentTarget.id,
        }
        set_view(data);
    }
    return (
        <div className={` items-center justify-center border-r p-1 ${!isVisible ? 'h-[40px] w-[40px]' : ''}`}>
            <div className={`${!isVisible ? 'h-[40px] w-[40px]' : 'hidden'}`}>
                <Button variant="outline" className="border-0 h-full" onClick={toggleSidebar}><Menu /></Button>
            </div>
            <div className={`flex flex-col h-svh transition-all ${isVisible ? 'h-full w-80 md:w-[400px]' : 'h-0 w-0 -m-10'}`}>
                <div className={`grid grid-cols-6 gap-1 justify-center pr-4 pt-1 `}>
                    <Button variant="outline" className=" transition-opacity ease-out duration-200 border-0 h-full" size="sm" onClick={toggleSidebar}><X /></Button>

                    <Input type="text" placeholder="Search" className="col-span-5" />
                </div>
                <Separator className="my-3" />

                <ScrollArea className={`max-h-svh rounded-md grow border-0 -mt-4`}>
                    <div className="p-4">
                        {data.map(
                            (_, i, a) => <Button variant={"outline"} id={(i - 1).toString()} onClick={(e) => handle_click(e)} className="w-full border-0 justify-start">`v1.2.0-beta.${a.length - i}`</Button>
                        ).map((tag: any) => (
                            <>
                                {tag}
                                <Separator className="my-2" />
                            </>
                        ))}
                    </div>

                </ScrollArea>
                <Separator className="my-3" />
                <div className={`flex flex-row justify-between -m-1 ${isVisible ? '' : 'hidden'} pb-6 pr-6 pl-4`}>
                    <div className={`grid grid-cols-3 gap-4 ${isVisible ? '' : 'hidden'}`}>
                        <Avatar className="h-full col-span-1">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>SN</AvatarFallback>
                        </Avatar>
                        <h1 className="col-span-2 text-lg font-bold  m-auto text-left">natimerry</h1>
                    </div>
                    <ModeToggle></ModeToggle>
                    
                </div>

            </div>
        </div>

    )
}