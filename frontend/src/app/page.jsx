"use client";
import { useEffect, useState } from "react";
import { getBackendMessage } from "../lib/endpoints";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getBackendMessage()
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="font-sans grid bg-background grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="p-4">
        <h1 className="text-2xl font-bold text-sky-500">Portfolio</h1>
        <p className="mt-4 text-primary">{message || "Loading..."}</p>
      </main>
    </div>
  );
}
