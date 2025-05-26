"use client";
import React from "react";
import { FaLock, FaLockOpen } from "react-icons/fa";

interface LockToggleProps {
  isLocked: boolean;
  setIsLocked: (value: boolean) => void;
}

export default function LockToggle({ isLocked, setIsLocked }: LockToggleProps) {
  return (
    <button
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-md text-blue-600 border-blue-600 hover:bg-blue-100 transition"
      onClick={() => setIsLocked(!isLocked)}
    >
      {isLocked ? <FaLock /> : <FaLockOpen />}
      {isLocked ? "Unlock Profile" : "Lock Profile"}
    </button>
  );
}
