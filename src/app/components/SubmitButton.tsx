'use client'

type ChildComponentProps = { type: string, disabled?: boolean, style?: any, on_click?: any, children?: React.ReactNode };
export default function SubmitButton({ disabled, style, on_click, children, type }: ChildComponentProps) {

    return (
        <div>
            <button
                disabled={disabled}
                type={type as "button" | "submit" | "reset"}
                onClick={on_click}
                className="w-full  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-pink-400 text-black
                disabled:bg-gray-300
                disabled:hover:bg-gray-300
                disabled:hover:text-black
                disabled:text-black 
                dark:text-white
                transition-all duration-[250ms] ease-out    
                
                hover:bg-pink-800
                hover:text-white
                
                dark:bg-pink-900
                dark:hover:text-black
                dark:hover:bg-pink-600
                "


                style={style}>
                {children}
            </button>
        </div>

    );
}