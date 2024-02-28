'use client'

interface IProps {
  children: React.ReactNode;
}
export default function Company({children}: IProps) {
  return (
    <p className="py-4 sm:py-10 items-center text-4xl md:text-6xl font-semibold bg-gradient-to-br from-pink-600 via-pink-700 to-rose-600 animate-text inline-block text-transparent bg-clip-text">
        {children}
    </p>
  );
}