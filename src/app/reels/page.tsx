"use client";

import { profile } from "console";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { useEffect, useRef } from "react";

const videoData = [
  {
    id: 1,
    src: "/videos/sample1.mp4",
    username: "@john_doe",
    profileImage: "/avatars/john.jpg",
    caption: "Fizz 🌅",
  },
  {
    id: 2,
    src: "/videos/sample2.mp4",
    username: "@jane_smith",
    profileImage: "/avatars/jane.jpg",
    caption: "5 Simple Transitons 🛹",
  },
  {
    id: 3,
    src: "/videos/sample3.mp4",
    username: "@lisa_marie",
    profileImage: "/avatars/lisa.jpg",
    caption: "Beach Cliff Drone Footage 🌊",
  },
  {
    id: 4,
    src: "/videos/sample4.mp4",
    username: "@michael_k",
    profileImage: "/avatars/michael.jpg",
    caption: "Tropical Drone Footage 🌴",
  },
];

export default function ReelsPage() {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.9 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  const handleVideoClick = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  return (
    <div className="flex flex-col items-center space-y-8 py-4">
      {videoData.map((video, index) => (
        <div
          key={video.id}
          className="relative w-full max-w-[400px] aspect-[9/16] overflow-hidden rounded-md"
        >
          <video
            ref={(el) => {
              if (el) videoRefs.current[index] = el;
            }}
            src={video.src}
            className="w-full h-full object-cover rounded-md cursor-pointer"
            playsInline
            loop
            onClick={() => handleVideoClick(index)}
          />

          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
            <div className="flex items-center mb-3">
              <img
                src={video.profileImage}
                alt="User"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex items-center justify-between w-full">
                <span className="font-semibold text-sm">{video.username}</span>
                <button className="text-sm border border-white px-3 py-1 rounded-full">
                  Follow
                </button>
              </div>
            </div>

            <p className="text-sm mb-2">{video.caption}</p>
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
      ))}
    </div>
  );
}
