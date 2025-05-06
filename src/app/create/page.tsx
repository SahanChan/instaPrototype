"use client";

import { useState } from "react";

export default function CreatePage() {
  const [image, setImage] = useState<string | null>(null);
  const [caption, setCaption] = useState("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (image && caption.trim()) {
      alert("Post created!");
      setImage(null);
      setCaption("");
    } else {
      alert("Please add an image and a caption.");
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Create New Post</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full border rounded-md p-2"
        />

        {image && (
          <div className="w-full h-64 overflow-hidden rounded-md border">
            <img
              src={image}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <textarea
          placeholder="Write a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full border rounded-md p-2 h-24 resize-none"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-full"
        >
          Post
        </button>
      </form>
    </div>
  );
}
