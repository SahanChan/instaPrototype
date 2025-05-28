"use client";

import React, { useState } from "react";
import LockToggle from "./LockToggle";
import ScreenshotWarning from "../components/screenshotPrevention/ScreenshotWarning";
const mockPosts = [
  "/posts/1.jpg",
  "/posts/2.jpg",
  "/posts/3.jpg",
  "/posts/4.jpg",
  "/posts/5.jpg",
];

interface LockToggleProps {
  isLocked: boolean;
  setIsLocked: (value: boolean) => void;
}

export default function ProfilePage() {
  const [isLocked, setIsLocked] = useState<boolean>(false);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <ScreenshotWarning />
      {/* Profile Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-6">
          {isLocked ? (
            <img
              src="/avatars/avatar.png"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
          ) : (
            <img
              src="/avatars/sahan.jpg"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
          )}

          <div>
            <h2 className="text-xl font-semibold">sahan_c</h2>
            {isLocked ? (
              <div></div>
            ) : (
              <div className="flex space-x-4 text-sm text-gray-600 mt-2">
                <span>
                  <strong>24</strong> posts
                </span>
                <span>
                  <strong>1.2k</strong> followers
                </span>
                <span>
                  <strong>530</strong> following
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Lock/Unlock Button */}
        <LockToggle isLocked={isLocked} setIsLocked={setIsLocked} />
      </div>

      {/* Bio or Locked Message */}
      {isLocked ? (
        <div className="text-center py-16 text-gray-500 bg-gray-100 rounded-md mb-6">
          🔒 This profile is locked.
        </div>
      ) : (
        <>
          {/* Bio */}
          <div className="mb-6">
            <p className="text-sm">Just another Next developer. 🚀</p>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-3 gap-1">
            {mockPosts.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Post ${i}`}
                className="w-full aspect-square object-cover"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
