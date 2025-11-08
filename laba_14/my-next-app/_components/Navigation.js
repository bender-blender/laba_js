import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <nav className="p-4 bg-primary-900 text-gray-100">
      <ul className="flex gap-6 justify-center">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/cabins">Cabins</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/account">Your Account</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
