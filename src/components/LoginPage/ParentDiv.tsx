'use client'

interface IProps {
  children: React.ReactNode;
}
export default function RootContainer({children}: IProps) {
  return (
    <div className="flex flex-col items-center justify-center m-auto h-svh lg:py-0 overflow-hidden z-10 absolute">
        {children}
    </div>

  );
}