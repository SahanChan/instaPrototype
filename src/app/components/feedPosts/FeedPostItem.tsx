type FeedPostProps = {
  username: string;
  profileImage: string;
  postImage: string;
  caption: string;
};

export default function FeedPostItem({
  username,
  profileImage,
  postImage,
  caption,
}: FeedPostProps) {
  return (
    <div className="">
      <div className="flex items-center p-3">
        <img
          src={profileImage}
          alt={username}
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <span className="font-semibold text-sm">{username}</span>
      </div>

      <img
        src={postImage}
        alt="Post"
        className="w-full object-cover rounded-md"
      />

      <div className="p-3">
        <p className="text-sm">
          <span className="font-semibold mr-2">{username}</span>
          {caption}
        </p>
      </div>
    </div>
  );
}
