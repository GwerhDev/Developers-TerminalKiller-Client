"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUserToken } from "@/helpers/LocalStorage.functions";

export const LoggedRedirection = () => {
  const router = useRouter();

  useEffect(() => {
    const token: string | null = getUserToken();
    !token && router.push('/auth/login');
  }, [router]);

  return <></>;
};
