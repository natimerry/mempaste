"use client"

import { getAuth } from "@/action";
import axios from "axios"
import Link from "next/link"
import {useRouter} from "next/navigation"
import React, { useState } from 'react';
import toast, {Toaster} from "react-hot-toast";
// import { cookies } from 'next/headers'
export default function LoginPage() {
    // const cookieStore = cookies()
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
            .post("http://localhost:9090/login", user, {withCredentials:true, headers:{'Accept':'application/json'}})
            .then(function (response){
                    console.log(response.data);
                    // toast.success("Logged in");
                })
            .catch(function (error){
                 console.log(error);
                //  toast(error.response.data);
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
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Username</label>
                            <input 
                                id="username"
                                type="text"
                                value={user.username}
                                onChange={(e) => setUser({...user, username: e.target.value})}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Username" 
                                required/>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input 
                                id="password"
                                type="password"
                                value={user.password}
                                onChange={(e) => setUser({...user, password: e.target.value})} //onChange={(e) => setUser({...user, password: e.target.value})}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Password" 
                                required/>
                        </div>
                        <button 
                            type="submit"
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


