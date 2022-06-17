const NewPost = () => {
  return (
    <div className="border-b border-gray-500 p-3 flex space-x-3 overflow-y-scroll scrollbar-hide">
      <img
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
        className="h-11 w-11 rounded-full cursor-pointer"
      />
      <div className="w-full divide-y divide-gray-700">
        <div>
          <textarea
            rows="2"
            placeholder="What's happening?"
            className="bg-transparent outline-none  text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
          />
        </div>
        <div className="flex items-center justify-between pt-2.5 ">
          <label className="text-lg cursor-pointer">
            <input type="file" className="hidden" />
            <i className="fas fa-file-image h-[22px] text-primary "></i>
          </label>
          <button
            type="submit"
            className="bg-primary text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export { NewPost };
