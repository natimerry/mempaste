'use client'

interface IProps {
  children: React.ReactNode;
}
export default function SignupFlexContainer({children}: IProps) {

    return (
        <div className="w-full bg-gray-100 shadow dark:border md:mt-0 sm:max-w-md xl:p-0 rounded-lg  dark:ring-gray-700">
                {children}
        </div>
    );
}