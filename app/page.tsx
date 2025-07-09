'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the News Home page
    router.push("/news");
  })

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
    </main>
    
  );
}
