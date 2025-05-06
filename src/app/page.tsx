import FeedPostsList from "./components/feedPosts/FeedPostsList";
import StoriesList from "./components/stories/StoryList";

export default function HomePage() {
  return (
    <div className="max-w-xl mx-auto py-6 space-y-8">
      <StoriesList />
      <FeedPostsList />
    </div>
  );
}
