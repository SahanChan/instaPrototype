const notifications = [
  {
    id: 1,
    user: "maruf",
    avatar: "/avatars/maruf.jpg",
    text: "liked your photo.",
    time: "2h",
    postThumb: "/posts/1.jpg",
  },
  {
    id: 2,
    user: "john",
    avatar: "/avatars/john.jpg",
    text: "commented: 'Nice shot!'",
    time: "5h",
    postThumb: "/posts/2.jpg",
  },
  {
    id: 3,
    user: "mia",
    avatar: "/avatars/mia.jpg",
    text: "started following you.",
    time: "1d",
    postThumb: null,
  },
  {
    id: 4,
    user: "lisa",
    avatar: "/avatars/lisa.jpg",
    text: "mentioned you in a comment.",
    time: "3d",
    postThumb: "/posts/3.jpg",
  },
];

export default function NotificationsPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6">Notifications</h1>
      <ul className="space-y-4">
        {notifications.map((n) => (
          <li key={n.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={n.avatar}
                alt={n.user}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-sm">
                <span className="font-medium">{n.user}</span>{" "}
                <span>{n.text}</span>
                <div className="text-xs text-gray-500">{n.time} ago</div>
              </div>
            </div>
            {n.postThumb && (
              <img
                src={n.postThumb}
                alt="thumb"
                className="w-12 h-12 object-cover rounded-md"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
