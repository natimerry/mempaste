"use client"

import axios from "axios"
import Link from "next/link"
import {useRouter} from "next/navigation"
import React, { useState } from 'react';
import toast from "react-hot-toast";
import FormTextInput from "../components/InputForm";
export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        username:"",
        password:""
    })
    const [loading, setLoading] = useState(false);
    const onLogin = async () => {
        console.log("running onlogin");
        let api_endpoint = process.env.NEXT_PUBLIC_API_URL?.concat("login");
        setLoading(true);
        axios
            .post(api_endpoint!, user, {withCredentials:true, headers:{'Accept':'application/json',timeout:200}})
            .then(function (response){
                    toast.success("Login successful");
                    console.log(response.data);
                    router.push('/dashboard')   
                    // toast.success("Logged in");
                })
            .catch(function (error){
                toast.error("Login failed!")
                toast(error.response.data);
            })
            .finally(() => {
                 setLoading(false);
            })
    }
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="home" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                {/* <img className="w-8 h-8 mr-2" alt="logo" src={String(logo)}/> */}
                Faketernos    
            </a>
            
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Login
                    </h1>
                    <form className="space-y-4 md:space-y-6">
             
                        <FormTextInput type="text" label="Email" value={user.username}
                            onchange_func={(e: { target: { value: any; }; }) => setUser({ ...user, username: e.target.value })}>
                        </FormTextInput>


                        <FormTextInput type="password" label="Email" value={user.password}
                            onchange_func={(e: { target: { value: any; }; }) => setUser({ ...user, username: e.target.value })}>
                        </FormTextInput>
                        <button 
                            type="button"
                            onClick={onLogin} 
                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                {loading ? "Processing..." : "Login"}
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don't have an account? <Link href="signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )

    }


