const exploreItems = [
  { id: 1, type: "image", src: "/posts/1.jpg" },
  { id: 2, type: "video", src: "/videos/sample1.mp4" },
  { id: 3, type: "image", src: "/posts/2.jpg" },
  { id: 4, type: "image", src: "/posts/3.jpg" },
  { id: 5, type: "video", src: "/videos/sample2.mp4" },
  { id: 6, type: "image", src: "/posts/4.jpg" },
  { id: 7, type: "image", src: "/posts/5.jpg" },
  { id: 8, type: "video", src: "/videos/sample3.mp4" },
  { id: 9, type: "image", src: "/posts/5.jpg" },
  { id: 10, type: "image", src: "/posts/2.jpg" },

  { id: 11, type: "image", src: "/posts/1.jpg" },
  { id: 12, type: "image", src: "/posts/3.jpg" },

  { id: 13, type: "image", src: "/posts/4.jpg" },
];

export default function ExplorePage() {
  return (
    <div className="max-w-6xl mx-auto px-2 py-6">
      <h1 className="text-2xl font-semibold mb-4">Explore</h1>

      <div className="grid grid-cols-3 gap-1 auto-rows-[150px]">
        {exploreItems.map((item) => (
          <div
            key={item.id}
            className={`relative w-full overflow-hidden ${
              item.type === "video" ? "row-span-2" : "aspect-square"
            }`}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`explore-${item.id}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
