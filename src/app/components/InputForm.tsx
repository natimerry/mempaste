'use client'

type ChildComponentProps = {name?:string, type: string, label: string; value?: string; onchange_func?: any };
export default function TextInput({type, label, value, onchange_func, name }: ChildComponentProps) {

  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onchange_func}

        className="bg-gray-100 w-full text-black hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-pink-600 font-medium rounded-lg text-sm px-5 py-2.5 dark:hover:bg-zinc-800 dark:focus:ring-pink-500 dark:bg-zinc-900 border
        border-pink-600
        dark:border-pink-500
        dark:text-white
        "
        
        placeholder={label.split(' ').pop()}
        required />
    </div>

  );
}