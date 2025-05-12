"use client";

import { useState } from "react";

export default function FollowersPrivacy() {
  const [followersVisibility, setFollowersVisibility] = useState("friends");

  const options = [
    { value: "only_me", label: "Only Me" },
    { value: "following", label: "Following" },
    { value: "followersFollowing", label: "Followers & Following" },
    { value: "public", label: "Public" },
  ];

  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-2">
        Followers & Following Visibility
      </h2>

      <div className="space-y-6 mt-4">
        <div>
          <label className="block  font-medium mb-1">
            Who can see my Followers & Following?
          </label>
          <select
            value={followersVisibility}
            onChange={(e) => setFollowersVisibility(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white text-black dark:bg-black dark:text-white"
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        The total number of followers/following will always be visible, but
        access to the actual list depends on your chosen visibility level.
      </p>
    </div>
  );
}
