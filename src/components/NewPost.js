import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../features/post/postSlice";
const NewPost = () => {
  const { authToken, user } = useSelector((state) => state.auth);
  const { avatarURL, firstName, lastName, username } = user;
  console.log(user)
  const [userPost, setUserPost] = useState({
    avatarURL,
    firstName,
    lastName,
    username,
    comments: [],
    content: "",
  });

  function postHandler(postData, authToken) {
    if (postData.content !== "" && postData.content.replace(/\s/g, "")) {
      dispatch(createPost({ postData, authToken }));
      
    }
    setUserPost({
      avatarURL,
      firstName,
      lastName,
      username,
      comments: [],
      content: "",
    });
  }
  const dispatch = useDispatch();
  return (
    <div className="border-b border-gray-500 p-3 flex space-x-3 overflow-y-scroll scrollbar-hide">
      <img
        src={avatarURL}
        className="h-11 w-11 rounded-full cursor-pointer"
      />
      <div className="w-full divide-y divide-gray-700">
        <div>
          <textarea
            onChange={(e) =>
              setUserPost({ ...userPost, content: e.target.value })
            }
            value={userPost.content}
            name="status"
            rows="2"
            placeholder="What's happening?"
            className="bg-transparent outline-none  text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
          />
        </div>
        <div className="flex items-center justify-between pt-2.5 ">
          <label className="text-lg cursor-pointer">
            <input type="file" className="hidden" />
            <i className="fas fa-file-image h-[22px] text-[#1a8cd8] "></i>
          </label>
          <button
            type="submit"
            className="bg-[#1d9bf0] text-white rounded-full px-6 py-1 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default"
            onClick={() => postHandler(userPost, authToken)}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export { NewPost };
