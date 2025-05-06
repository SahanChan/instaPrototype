import React from "react";

type StoryProps = {
  username: string;
  imageUrl: string;
};

export default function Story({ username, imageUrl }: StoryProps) {
  return (
    <div className="flex flex-col items-center text-xs">
      <div className="w-16 h-16 rounded-full border-2 border-pink-500 p-[2px]">
        <img
          src={imageUrl}
          alt={username}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <p className="mt-1 truncate w-16 text-center">{username}</p>
    </div>
  );
}
