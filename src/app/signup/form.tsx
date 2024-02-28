'use client'

import Link from "next/link";
import TextInput from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";



interface IProps {
  signup_func: any;
}
export default function SignupForm({signup_func}: IProps) {
  return (
    
    <form onSubmit={signup_func} className="space-y-4 md:space-y-6">
        {/* USERNAME INPUT */}
        <TextInput name="username" type="text" label="Your Username">
        </TextInput>

        {/* EMAIL INPUT */}
        <TextInput name="email" type="email" label="Email">
        </TextInput>

        {/* Password input */}
        <TextInput name="password" type="password" label="Password">
        </TextInput>
        {/* Confirm password input */}
        <TextInput type="password" label="Confirm Password">
        </TextInput>

        <SubmitButton type='submit'>
            Create an account
        </SubmitButton>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account? <Link href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
        </p>
    </form>
  );
}