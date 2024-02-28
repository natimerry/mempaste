'use client'

interface IProps {
  children: React.ReactNode;
}
export default function Company({children}: IProps) {
  return (
    <p className="py-4 sm:py-10 items-center text-4xl md:text-5xl font-semibold bg-gradient-to-br from-white to-slate-500 animate-text inline-block text-transparent bg-clip-text">
        {children}
    </p>
  );
}