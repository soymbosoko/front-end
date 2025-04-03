import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("");

  return (
    <div className={`flex flex-col space-y-4 w-full h-screen bg-${color}-800`}>
      <p>Өнгө солих</p>
      <button 
        className="border bg-red-800 py-4 px-4"
        onClick={() => setColor("red")}
      >
        Улаан
      </button>
      <button 
        className="border bg-blue-800 py-4 px-4"
        onClick={() => setColor("blue")}
      >
        Цэнхэр
      </button>
      <button 
        className="border bg-green-800 py-4 px-4"
        onClick={() => setColor("green")}
      >
        Ногоон
      </button>
      <button 
        className="border bg-gray-400 py-4 px-4"
        onClick={() => setColor("")}
      >
        Clear
      </button>
    </div>
  );
}