import Story from "./Story";

const mockStories = [
  { id: 1, username: "john_doe", imageUrl: "/avatars/john.jpg" },
  { id: 2, username: "jane_smith", imageUrl: "/avatars/jane.jpg" },
  { id: 3, username: "alex_k", imageUrl: "/avatars/alex.jpg" },
  { id: 4, username: "mia_l", imageUrl: "/avatars/mia.jpg" },
  { id: 5, username: "amita_m", imageUrl: "/avatars/amita.jpg" },

  { id: 6, username: "maruf_k", imageUrl: "/avatars/maruf.jpg" },
  { id: 7, username: "thirilok_t", imageUrl: "/avatars/thirilok.jpg" },
];

export default function StoryList() {
  return (
    <div className="flex space-x-4 overflow-x-auto px-2">
      {mockStories.map((story) => (
        <Story
          key={story.id}
          username={story.username}
          imageUrl={story.imageUrl}
        />
      ))}
    </div>
  );
}
