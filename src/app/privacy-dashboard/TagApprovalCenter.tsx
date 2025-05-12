"use client";

import { useState } from "react";

const mockTagRequests = [
  {
    id: 1,
    username: "amita",
    photo: "/avatars/amita.jpg",
  },
  {
    id: 2,
    username: "thirilok",
    photo: "/avatars/thirilok.jpg",
  },
];

export default function TagApprovalCenter() {
  const [tagRequests, setTagRequests] = useState(mockTagRequests);
  const [autoApproveFriends, setAutoApproveFriends] = useState(false);
  const [holdUnknowns, setHoldUnknowns] = useState(true);

  const handleAction = (id: number, action: "approve" | "reject") => {
    setTagRequests((prev) => prev.filter((req) => req.id !== id));
    // need to add backend logic here
  };

  return (
    <div className=" ">
      <h2 className="text-xl font-semibold mb-2">Tag Approval Center</h2>

      <div className="flex flex-col gap-2 mb-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={autoApproveFriends}
            onChange={() => setAutoApproveFriends(!autoApproveFriends)}
          />
          Auto-approve tags from friends
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={holdUnknowns}
            onChange={() => setHoldUnknowns(!holdUnknowns)}
          />
          Hold tags from unknown users
        </label>
      </div>

      {tagRequests.length === 0 ? (
        <p className="text-sm text-gray-500">No pending tag requests.</p>
      ) : (
        <div className="space-y-4">
          {tagRequests.map((req) => (
            <div
              key={req.id}
              className="flex items-center justify-between border border-gray-200 rounded p-2"
            >
              <div className="flex items-center gap-3">
                <img
                  src={req.photo}
                  alt="Tag preview"
                  className="w-12 h-12 object-cover rounded"
                />
                <span className="font-medium text-sm">@{req.username}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleAction(req.id, "approve")}
                  className="bg-green-500 text-white px-3 py-1 rounded text-sm"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleAction(req.id, "reject")}
                  className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
