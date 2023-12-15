import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-slate-300">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1>
          <Link to={"/"}>
            <span className="text-slate-500">CHP_COURT</span>
            <span className="text-slate-700">RAMMINTAR</span>
          </Link>
        </h1>
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="text-slat-700 hover:underline">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="text-slat-700 hover:underline">About</li>
          </Link>
          <Link to={"/member"}>
            <li className="text-slat-700 hover:underline">Member</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
