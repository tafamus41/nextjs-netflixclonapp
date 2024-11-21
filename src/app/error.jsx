"use client"; 
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mt-64 text-center">
      <h1 className="text-red-600 text-2xl">Something went wrong</h1>
    </div>
  );
}
