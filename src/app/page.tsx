//mostly client part
'use client'
import {useRouter} from "next/navigation";
export default function Root() {
  const router = useRouter();
  return router.push("/login");
};