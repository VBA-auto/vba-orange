"use client";

import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[80vh] text-center flex justify-center items-center">
      <p>You will be redirected to the home page in 2 seconds...</p>
    </div>
  );
}
