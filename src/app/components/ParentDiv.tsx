'use client'

interface IProps {
  children: React.ReactNode;
}
export default function RootContainer({children}: IProps) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-svh lg:py-0 overflow-hidden z-10 relative">
        {children}
    </div>

  );
}