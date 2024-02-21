"use client"

import axios from "axios";
// import Link from "next/link"
import {useRouter} from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

export default function SignupPage() {
    
    let validation = ''
    const router = useRouter();
    const [user, setUser] = React.useState({
        username:"",
        password:"",
        confirmPassword:""
    })
    
    const [loading, setLoading] = React.useState(false)

    const onSignup = async () => {
        try {
            setLoading(true)
            const token:any =  process.env.TOKEN_SECRET_KEY;    //await axios.post("api/users/signup", user)
            console.log("Signup Details: ", token.data);
            toast.success("Signup Success")
            router.push("/login")
        } catch (error:any) {
            console.log("Signup failed", error.message)
            toast.error("Signup failed!")
        }finally {
            setLoading(false)
        }
    }
    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    useEffect(() => {
        if (user.password != user.confirmPassword || user.password == ""){
            setButtonDisabled(true);
            validation = ''
        } else {
            setButtonDisabled(false);
            validation = 'Password and confirmation is same'
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
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="home" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                {/* <img className="w-8 h-8 mr-2" alt="logo" src={String(logo)}/> */}
                Faketernos    
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create and account
                    </h1>
                    <form action="#" className="space-y-4 md:space-y-6">
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
                                onChange={(e) => setUser({...user, password: e.target.value})}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Username" 
                                required/>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                            <input 
                                id="confirmPassword"
                                type="password"
                                value={user.confirmPassword}
                                onChange={(e) => setUser({...user, confirmPassword: e.target.value})}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Username" 
                                required/>
                        </div>
                        <button 
                        type="submit"
                        onClick={onSignup}
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        style={buttonDisabled ? styles.disabledButton : styles.enabledButton}>
                            {loading ? "Processing..." : "Create an account"}
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <a href="login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}