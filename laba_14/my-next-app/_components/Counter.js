"use client";
import { useState } from "react";

function Counter({ initial = 0 }) {
  const [count, setCount] = useState(initial);
  return (
    <button
      className="bg-accent-500 hover:bg-accent-600 px-4 py-2 rounded text-primary-900"
      onClick={() => setCount(count + 1)}
    >
      {count}
    </button>
  );
}

export default Counter;
