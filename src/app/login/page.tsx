"use client"

import axios from "axios";
import React from "react";
import toast from 'react-hot-toast';
import RootContainer from "../components/ParentDiv";
import Dialog from "../components/SignupFlexContainer";
import { FormEvent } from 'react'
import SignupForm from "./form";
import Company from "../components/companyName";
import Box from "../components/box";
import {BackgroundBeams} from "../components/ui/background-beams"
import { useRouter } from "next/navigation";
interface LoginDetails {
    username: string;
    password: string;
}
export default async function SignupPage() {
    

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
        <RootContainer>
            <Company>
                Nexus Console
            </Company>
            <Dialog>
                <Box>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create and account
                    </h1>
                    <SignupForm  signup_func={onSignup}/>
                </Box>
            </Dialog>       
            <BackgroundBeams/>    
        </RootContainer>
        
    )
}