"use client"

import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from 'react';
import toast from "react-hot-toast";
import FormTextInput from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
export default function LoginPage() {
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
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="home" className="py-10 items-center text-8xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 animate-text inline-block text-transparent bg-clip-text">
                {/* <img className="w-8 h-8 mr-2" alt="logo" src={String(logo)}/> */}
                Nexus Console
            </a>

            <div className="w-full bg-gray-300 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ring-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 dark:bg-zinc-900 bg-slate-50 rounded-lg border-2  border-gray-700 dark:border-white">
                    <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Login
                    </h1>
                    <form className="space-y-4 md:space-y-6">

                        <FormTextInput type="text" label="Your Username" value={user.username}
                            onchange_func={(e: { target: { value: any; }; }) => setUser({ ...user, username: e.target.value })}>
                        </FormTextInput>


                        <FormTextInput type="password" label="Password" value={user.password}
                            onchange_func={(e: { target: { value: any; }; }) => setUser({ ...user, username: e.target.value })}>
                        </FormTextInput>


                        <SubmitButton on_click={onLogin}>
                            {loading ? "Processing..." : "Login"}
                        </SubmitButton>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don't have an account? <Link href="signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )

}


