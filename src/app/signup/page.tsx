"use client"

import axios from "axios";
import React from "react";
import toast from 'react-hot-toast';
import RootContainer from "../components/ParentDiv";
import Dialog from "../components/SignupFlexContainer";
import { FormEvent } from 'react'
import { NextRequest, NextResponse } from "next/server";
import SignupForm from "./form";



interface LoginDetails {
    username: string;
    email: string;
    password: string;
}
export default async function SignupPage(request: NextRequest) {
    

    const onSignup = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        let data: LoginDetails = {
            username: formData.get('username')?.toString()!,
            email: formData.get('email')?.toString()!,
            password: formData.get('password')?.toString()!
        };
        console.log('running onSignup')
        console.log(data)
        let api_endpoint = process.env.NEXT_PUBLIC_API_URL?.concat("create_user");
        axios
            .post(api_endpoint!, data, { withCredentials: true })
            .then(function (response) {
                console.log(response.status);
                toast.success("Account Created");
                NextResponse.redirect(new URL('/login', request.url))
                })
            .catch(function (error) {
                toast.error("Account creation failed");
                toast(error.response.data);
            })
    }
    
    // useEffect(() => {
    //     if (user.password != user.confirmPassword || user.password == "") {
    //         setButtonDisabled(true);
    //     } else {
    //         setButtonDisabled(false);
    //         console.log("password and confirm same")
    //     }
    // }, [user]);
    // const styles = {
    //     disabledButton: {
    //         cursor: "not-allowed",
    //         pointerEvents: "none"
    //     },
    //     enabledButton: {
    //         cursor: "pointer"
    //     }
    // }


    // const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setUser(prev => ({...prev,[name]: value}));
    //     validateInput(e);
    // }

    //(e) => setUser({...user, confirmPassword: e.target.value})

    // const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     let { name, value } = e.target;
    //     setError(prev => {
    //       const stateObj = { ...prev, [name]: "" };

    //       switch (name) {
    //         case "username":
    //           if (!value) {
    //             stateObj[name] = "Please enter Username.";
    //           }
    //           break;

    //         case "password":
    //           if (!value) {
    //             stateObj[name] = "Please enter Password.";
    //           } else if (user.confirmPassword && value !== user.confirmPassword) {
    //             stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
    //           } else {
    //             stateObj["confirmPassword"] = user.confirmPassword ? "" : error.confirmPassword;
    //           }
    //           break;

    //         case "confirmPassword":
    //           if (!value) {
    //             stateObj[name] = "Please enter Confirm Password.";
    //           } else if (user.password && value !== user.password) {
    //             stateObj[name] = "Password and Confirm Password does not match.";
    //           }
    //           break;

    //         default:
    //           break;
    //       }

    //       return stateObj;
    //     });
    // }

    return (
        <RootContainer>
            <a className="py-4 sm:py-10 items-center text-4xl md:text-5xl font-bold bg-gradient-to-br from-slate-100 to-slate-600 animate-text inline-block text-transparent bg-clip-text">
                {/* <img className="w-8 h-8 mr-2" alt="logo" src={String(logo)}/> */}
                Nexus Console
            </a>
            <Dialog>
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 dark:bg-zinc-900 bg-slate-50 rounded-lg border-2  border-gray-700 dark:border-white ">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create and account
                    </h1>
                    <SignupForm  signup_func={onSignup}/>
                </div>
            </Dialog>        
        </RootContainer>
    )
}