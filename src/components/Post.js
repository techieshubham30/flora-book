import { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdThumbUp, MdBookmark, MdChat } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "./Modal";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import {
  deletePost,
  dislikePost,
  editPost,
  likePost,
} from "../features/post/postSlice";

const Post = ({ post }) => {
  const { _id, username, content, avatarURL, likes } = post;

  const { authToken, user } = useSelector((state) => state.auth);
  const [updatedPost, setUpdatedPost] = useState({
    avatarURL,
    username,
    comments: [],
    content: "",
  });

  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const likeHandler = (id, token) => {
    dispatch(likePost({ postId: id, token }));
  };

  const dislikeHandler = (id, token) => {
    dispatch(dislikePost({ postId: id, token }));
  };

  const deletePostHandler = (id, token) => {
    dispatch(deletePost({ postId: id, token }));
  };

  const editPostHandler = (id, postData, token) => {
    dispatch(editPost({ postId: id, postData, token }));
    setUpdatedPost({
      avatarURL,
      username,
      comments: [],
      content: "",
    });
  };
  const postLikers = likes.likedBy.map((user) => user.username);

  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-700 ">
      {modal && (
        <Modal setShowModal={setModal}>
          <div>
            <textarea
              onChange={(e) =>
                setUpdatedPost({ ...updatedPost, content: e.target.value })
              }
              value={updatedPost.content}
              name="status"
              className=" text-white rounded-lg bg-black p-2 border-none outline-none tracking-wider resize-none scrollbar-hide w-[100%]"
              placeholder="What's happening!"
            ></textarea>
           
          </div>
          <button
              onClick={() => {
                editPostHandler(_id, updatedPost, authToken);
              }}
              type="button"
              className="focus:outline-none text-white bg-[#1d9bf0] hover:bg-gray-700 focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-7 py-2.5 dark:focus:bg-gray-700 dark:focus:ring-gray-700"
            >
              Save
            </button>
        </Modal>
      )}

      <img src={avatarURL} alt="" className="h-11 w-11 rounded-full mr-4" />
      <div className="flex flex-col space-y-2 w-full">
        <div className="flex">
          <div className="text-[#6e767d]">
            <div className="inline-block group">
              <h4 className="font-bold text-[15px] sm:text-base text-[#d9d9d9] group-hover:underline inline-block">
                {username}
              </h4>
              <span className="text-sm sm:text-[15px] ml-1.5">@shubh870</span>
            </div>{" "}
            . <span className="hover:underline text-sm sm:text-[15px]"></span>
            <p className="text-[#d9d9d9] text-[15px] sm:text-base mt-0.5">
              {content}
            </p>
          </div>
          <div className="group flex-shrink-0 ml-auto ">
            <Menu
              menuButton={
                <MenuButton>
                  <HiOutlineDotsHorizontal className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
                </MenuButton>
              }
              transition
            >
              <MenuItem onClick={() => setModal(true)}>Edit</MenuItem>
              <MenuItem onClick={() => deletePostHandler(_id, authToken)}>
                Delete
              </MenuItem>
            </Menu>
            {/* <HiOutlineDotsHorizontal className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" /> */}
          </div>
        </div>
        <div className="text-[#6e767d] flex flex-row justify-between	w-10/12 mx-auto ">
          {postLikers.includes(user.username) ? (
            <div
              className="group"
              onClick={() => dislikeHandler(_id, authToken)}
            >
              <MdThumbUp className="h-5 text-[#1d9bf0]" />
              {likes.likeCount}
            </div>
          ) : (
            <div className="group" onClick={() => likeHandler(_id, authToken)}>
              <MdThumbUp className="h-5 group-hover:text-[#1d9bf0]" />
              {likes.likeCount}
            </div>
          )}

          <div className="group">
            <MdChat className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
          <div className="group">
            <MdBookmark className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Post };
