'use client'

interface IProps {
  children: React.ReactNode;
}
export default function Box({children}: IProps) {
  return (
    <div className="w-full p-6 space-y-4 md:space-y-6 sm:p-8 dark:bg-zinc-950 bg-slate-100 rounded-md border-2 border-gray-700 dark:border-pink-500 ">
        {children}
    </div>
  );
}