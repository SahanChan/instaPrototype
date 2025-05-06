import FeedPostItem from "./FeedPostItem";

const mockPosts = [
  {
    id: 1,
    username: "john_doe",
    profileImage: "/avatars/john.jpg",
    postImage: "/posts/1.jpg",
    caption: "Enjoying the view!",
  },
  {
    id: 2,
    username: "jane_smith",
    profileImage: "/avatars/jane.jpg",
    postImage: "/posts/2.jpg",
    caption: "Great day at the beach ☀️",
  },
  {
    id: 3,
    username: "alex_woods",
    profileImage: "/avatars/alex.jpg",
    postImage: "/posts/3.jpg",
    caption: "Hiking adventures 🏞️",
  },
  {
    id: 4,
    username: "lisa_marie",
    profileImage: "/avatars/lisa.jpg",
    postImage: "/posts/4.jpg",
    caption: "Coffee first, then the world ☕🌍",
  },
  {
    id: 5,
    username: "michael_k",
    profileImage: "/avatars/michael.jpg",
    postImage: "/posts/5.jpg",
    caption: "City lights and chill vibes ✨",
  },
];

export default function FeedPostsList() {
  return (
    <div className="space-y-6">
      {mockPosts.map((post) => (
        <FeedPostItem
          key={post.id}
          username={post.username}
          profileImage={post.profileImage}
          postImage={post.postImage}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
