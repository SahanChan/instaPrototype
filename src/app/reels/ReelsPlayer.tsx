"use client";

import { Heart, MessageCircle, Share2 } from "lucide-react";

export default function ReelsPlayer() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-md">
      {/* Video */}
      <video
        src="/videos/sample.mp4"
        className="w-full h-full object-cover rounded-lg"
        autoPlay
        loop
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
        <div className="flex items-center mb-3">
          <img
            src="/avatars/alex.jpg"
            alt="User"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div className="flex items-center justify-between w-full">
            <span className="font-semibold text-sm">@alex</span>
            <button className="text-sm border border-white px-3 py-1 rounded-full">
              Follow
            </button>
          </div>
        </div>

        <p className="text-sm mb-2">
          They said it couldn’t be done, I did it anyway. Bee the change 🐝
        </p>
      </div>

      <div className="absolute bottom-40 right-4 space-y-6 text-white">
        <button className="flex flex-col items-center">
          <Heart className="w-6 h-6" />
          <span className="text-xs mt-1">291K</span>
        </button>
        <button className="flex flex-col items-center">
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs mt-1">1,725</span>
        </button>
        <button className="flex flex-col items-center">
          <Share2 className="w-6 h-6" />
          <span className="text-xs mt-1">Share</span>
        </button>
      </div>
    </div>
  );
}
