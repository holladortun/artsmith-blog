const Post = require("../models/posts");
const asyncHandler = require("express-async-handler");

//desc Get all posts
//@route GET /api/posts
//@access public

const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
};

//desc Get single post
//@route GET /api/posts/:id
//@access public

const getPost = (req, res) => {
  res
    .status(200)
    .json({ message: `post with ${req.params.id} returned successfully` });
};

//desc Get create post
//@route GET /api/posts/
//@access public

const createPost = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    const error = new Error("Title and Content is required.");
    error.status = 400;
    throw error;
  }

  const post = await Post.create({
    title: title,
    content: content,
  });
  res.status(201).json(post);
});

//desc Get update user
//@route GET /api/users/:id
//@access public

const updatePost = (req, res) => {
  res
    .status(200)
    .json({ message: `info for ${req.params.id} patched successfully` });
};

//desc Get delete user
//@route GET /api/users/:id
//@access public

const deletePost = (req, res) => {
  res
    .status(200)
    .json({ message: `user ${req.params.id} deleted successfully` });
};

module.exports = { getPosts, getPost, createPost, updatePost, deletePost };
