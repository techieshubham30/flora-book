import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../features/post/postSlice";
import { getUserFeed } from "../utils/getUserFeed";
import { sortPosts } from "../utils/sortPosts";
import { NewPost } from "./NewPost";
import { Post } from "./Post";

const Feed = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.allPosts);
  const {
    user: { following, username },
  } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const sortedPosts = getUserFeed(posts, following, username);
  const userFeed = sortPosts(sortedPosts);
  return (
    <div className=" text-white flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      <div className=" flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50  border-b border-gray-700">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <div className="w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
          <i className="fas fa-leaf h-5 text-white "></i>
        </div>
      </div>
      <NewPost />
      {userFeed.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export { Feed };
