const getUserFeed = (posts, following, user) => {
  const followingUsername = following.map((user) => user.username);
  return posts.filter(
    (post) =>
      followingUsername.includes(post.username) || post.username === user
  );
};

export { getUserFeed };
