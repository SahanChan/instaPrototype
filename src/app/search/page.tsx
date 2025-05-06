"use client";

import { useState } from "react";

const mockResults = [
  { id: 1, username: "john_doe", avatar: "/avatars/john.jpg" },
  { id: 2, username: "jane_smith", avatar: "/avatars/jane.jpg" },
  { id: 3, username: "travel.buddy", avatar: "/avatars/michael.jpg" },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filtered = mockResults.filter((u) =>
    u.username.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Search</h1>

      <input
        type="text"
        placeholder="Search users..."
        className="w-full border px-4 py-2 rounded-full mb-6 outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul className="space-y-4">
        {filtered.map((user) => (
          <li key={user.id} className="flex items-center space-x-3">
            <img
              src={user.avatar}
              alt={user.username}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-sm font-medium">{user.username}</span>
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="text-sm text-gray-500">No users found.</li>
        )}
      </ul>
    </div>
  );
}
