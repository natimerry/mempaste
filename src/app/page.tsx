"use client"

import axios from "axios";
import React from "react";
import toast from 'react-hot-toast';
import RootContainer from "./components/ParentDiv";
import Dialog from "./components/SignupFlexContainer";
import { FormEvent } from 'react'
import SignupForm from "./login/form";
import Company from "./components/companyName";
import Box from "./components/box";
import {BackgroundBeams} from "./components/ui/background-beams"
import { useRouter } from "next/navigation";
interface LoginDetails {
    username: string;
    password: string;
}
export default function SignupPage() {
    

    const onSignup = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        let data: LoginDetails = {
            username: formData.get('username')?.toString()!,
            password: formData.get('password')?.toString()!
        };
        console.log('running onSignup')
        console.log(data)
        let api_endpoint = process.env.NEXT_PUBLIC_API_URL?.concat("login");
        axios
            .post(api_endpoint!, data, { withCredentials: true })
            .then(function (response) {
                console.log(response.status);
                toast.success("Logged in");
                const router = useRouter();
                router.push("/dashboard");
            })
            .catch(function (error) {
                toast.error("Account creation failed");
                toast(error.data);
            })
    }
    return (
        <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-pink-500/[0.2] bg-grid-pink-900/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <RootContainer>
            <Company>
                MemPaste 
            </Company>
            <Dialog>
                <Box>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create and account
                    </h1>
                    <SignupForm  signup_func={onSignup}/>
                </Box>
            </Dialog>       
        </RootContainer>      
      </div>
    )
}