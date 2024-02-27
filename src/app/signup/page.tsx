"use client"

import axios from "axios";
import { isWebpackDefaultLayer } from "next/dist/build/utils";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import React, { useEffect } from "react";
import toast from 'react-hot-toast';
import FormTextInput from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import Heading from "../components/Header";
import { Root } from "postcss";
import RootContainer from "../components/ParentDiv";
import Dialog from "../components/FlexHolder";
export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        username: "",
        password: "",
        email: "",
        confirmPassword: ""
    })
    const [loading, setLoading] = React.useState(false)
    const onSignup = async () => {
        console.log('running onSignup')
        let api_endpoint = process.env.NEXT_PUBLIC_API_URL?.concat("create_user");
        setLoading(true);
        axios
            .post(api_endpoint!, user, { withCredentials: true })
            .then(function (response) {
                console.log(response.status);
                toast.success("Account Created");
                router.push('/login');
            }
            )
            .catch(function (error) {
                toast.error("Account creation failed");
                toast(error.response.data);
            })
            .finally(() => {
                setLoading(false);
            })
    }


    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    useEffect(() => {
        if (user.password != user.confirmPassword || user.password == "") {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
            console.log("password and confirm same")
        }
    }, [user]);
    const styles = {
        disabledButton: {
            cursor: "not-allowed",
            pointerEvents: "none"
        },
        enabledButton: {
            cursor: "pointer"
        }
    }


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
            <Heading />

            <Dialog>
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 dark:bg-zinc-900 bg-slate-50 rounded-lg border-2  border-gray-700 dark:border-white ">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create and account
                    </h1>
                    <form className="space-y-4 md:space-y-6">
                        <FormTextInput type="text" label="Your Username" value={user.username}
                            onchange_func={(e: { target: { value: any; }; }) => setUser({ ...user, username: e.target.value })} >
                        </FormTextInput>

                        {/* EMAIL INPUT */}
                        <FormTextInput type="text" label="Email" value={user.email}
                            onchange_func={(e: { target: { value: any; }; }) => setUser({ ...user, email: e.target.value })}>
                        </FormTextInput>

                        {/* Password input */}
                        <FormTextInput type="password" label="Password" value={user.password}
                            onchange_func={(e: { target: { value: any; }; }) => setUser({ ...user, password: e.target.value })}>
                        </FormTextInput>
                        {/* Confirm password input */}
                        <FormTextInput type="password" label="Confirm Password" value={user.confirmPassword}
                            onchange_func={(e: { target: { value: any; }; }) => setUser({ ...user, confirmPassword: e.target.value })}>
                        </FormTextInput>

                        <SubmitButton on_click={onSignup} disabled={buttonDisabled}>
                            {loading ? "Processing..." : "Create an account"}
                        </SubmitButton>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <Link href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                        </p>
                    </form>
                </div>
            </Dialog>        </RootContainer>
    )
}