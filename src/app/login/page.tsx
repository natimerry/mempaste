"use client"

import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from 'react';
import toast from "react-hot-toast";
import TextInput from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import Header from "../components/Header";
import RootContainer from "../components/ParentDiv";
import SignupFlexContainer from "../components/SignupFlexContainer";
import SignupBox from "../components/SignupBox";
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
        <RootContainer>
            <Header />
            <SignupFlexContainer>
                <SignupBox>
                    <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Login
                    </h1>
                    <form className="space-y-4 md:space-y-6">

                        <TextInput type="text" label="Your Username" value={user.username}
                            onchange_func={(e: { target: { value: any; }; }) => setUser({ ...user, username: e.target.value })}>
                        </TextInput>


                        <TextInput type="password" label="Password" value={user.password}
                            onchange_func={(e: { target: { value: any; }; }) => setUser({ ...user, password: e.target.value })}>
                        </TextInput>


                        <SubmitButton on_click={onLogin}>
                            {loading ? "Processing..." : "Login"}
                        </SubmitButton>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don't have an account? <Link href="signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up here</Link>
                        </p>
                    </form>
                </SignupBox>
            </SignupFlexContainer>
        </RootContainer>)

}


