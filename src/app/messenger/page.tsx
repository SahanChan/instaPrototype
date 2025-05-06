"use client";

import { useState } from "react";

const mockUsers = [
  { id: 1, name: "Amita", avatar: "/avatars/amita.jpg" },
  { id: 2, name: "Thirilok", avatar: "/avatars/thirilok.jpg" },
  { id: 3, name: "Maruf", avatar: "/avatars/maruf.jpg" },
  { id: 4, name: "Lisa", avatar: "/avatars/lisa.jpg" },
];

const mockMessages: Record<string, { from: string; text: string }[]> = {
  1: [
    { from: "me", text: "Hey Amita!" },
    { from: "Amita", text: "Hi! How are you?" },
  ],
  2: [{ from: "Thirilok", text: "Hey Sahan! Ready for the game?" }],
  3: [{ from: "me", text: "Hey Maruf, long time!" }],
  4: [{ from: "Lisa", text: "Whatsup Sahan" }],
};

export default function MessagesPage() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [input, setInput] = useState("");

  const selectedMessages = selectedUserId
    ? mockMessages[selectedUserId] || []
    : [];

  return (
    <div className="flex h-screen">
      {/* Sidebar - user list */}
      <div className="w-[240px] border-r overflow-y-auto rounded-md">
        <h2 className="text-lg font-semibold px-4 py-3">Messenger</h2>
        {mockUsers.map((user) => (
          <div
            key={user.id}
            onClick={() => setSelectedUserId(user.id)}
            className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-900 ${
              selectedUserId === user.id ? "bg-gray-800" : ""
            }`}
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <span>{user.name}</span>
          </div>
        ))}
      </div>

      {/* Chat window */}
      <div className="flex flex-col flex-1">
        {selectedUserId ? (
          <>
            {/* Header */}
            <div className="border-b px-4 py-3 font-semibold">
              Chat with {mockUsers.find((u) => u.id === selectedUserId)?.name}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 bg-gray-800">
              {selectedMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[70%] px-3 py-2 rounded-lg ${
                    msg.from === "me"
                      ? "bg-pink-500 text-white self-end ml-auto"
                      : "bg-gray-600 text-gray-900"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <form
              className="border-t p-3 flex"
              onSubmit={(e) => {
                e.preventDefault();
                if (input.trim()) {
                  // Simulated send
                  mockMessages[selectedUserId].push({
                    from: "me",
                    text: input,
                  });
                  setInput("");
                }
              }}
            >
              <input
                className="flex-1 border rounded-full px-4 py-2 mr-2 outline-none"
                placeholder="Message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-full px-4 py-2"
              >
                Send
              </button>
            </form>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a conversation to start messaging
          </div>
        )}
      </div>
    </div>
  );
}
