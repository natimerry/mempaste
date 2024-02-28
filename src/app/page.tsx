//mostly client part
'use client'
import Image from "next/image";
import {useRouter} from "next/navigation";

export default function Root() {
  const router = useRouter();

  return router.push("/login");
};