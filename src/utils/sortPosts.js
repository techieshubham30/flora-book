const sortPosts = (posts) => {
  return [...posts].sort(
    (a, b) => Date.parse(b.createAt) - Date.parse(a.createAt)
  );
};

export { sortPosts };
