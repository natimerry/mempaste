"use client"

import axios from "axios";
import React, { useState } from "react";
import toast from 'react-hot-toast';
import RootContainer from "../components/LoginPage/ParentDiv";
import Dialog from "../components/LoginPage/SignupFlexContainer";

import Company from "../components/LoginPage/companyName";
import Box from "../components/LoginPage/box";
import { useRouter } from "next/navigation";
import TextInput from "../components/LoginPage/InputForm";
import SubmitButton from "../components/LoginPage/SubmitButton";

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const [loading, setLoading] = useState(false);
    const onLogin = async () => {
        console.log("running onlogin");
        let api_endpoint = process.env.NEXT_PUBLIC_API_URL?.concat("login");
        setLoading(true);
        axios.defaults.withCredentials = true
        axios
            .post(api_endpoint!, user, { withCredentials: true, headers: { 'Accept': 'application/json', timeout: 200 } })
            .then(function (response) {
                toast.success("Login successful");
                console.log(response.data);
                router.push('/dashboard')
                // toast.success("Logged in");
            })
            .catch(function (error) {
                toast.error("Login failed!")
                toast(error.response.data);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        
        <div className="w-full dark:bg-black bg-white  h-svh dark:bg-grid-pink-500/[0.2] bg-grid-pink-900/[0.2] relative flex items-center justify-center">
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
                        <form className="space-y-4 slat md:space-y-6">
                            {/* USERNAME INPUT */}
                            <TextInput value={user.username} onchange_func={(e: { target: { value: any; }; }) => setUser({ ...user, username: e.target.value })} name="username" type="text" label="Your Username">
                            </TextInput>

                            <TextInput value={user.password} onchange_func={(e: { target: { value: any; }; }) => setUser({ ...user, password: e.target.value })} name="password" type="password" label="Your Username">
                            </TextInput>


                            <SubmitButton type='button' on_click={onLogin}>
                                {loading ? "Processing..." : "Login"}
                            </SubmitButton>

                        </form>
                    </Box>
                </Dialog>
            </RootContainer>
        </div>
    )
}
