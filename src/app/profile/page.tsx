const mockPosts = [
  "/posts/1.jpg",
  "/posts/2.jpg",
  "/posts/3.jpg",
  "/posts/4.jpg",
  "/posts/5.jpg",
];

export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="flex items-center space-x-6 mb-6">
        <img
          src="/avatars/sahan.jpg"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">sahan_c</h2>
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
        </div>
      </div>

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
    </div>
  );
}
