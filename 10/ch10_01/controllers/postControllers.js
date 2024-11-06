const postService = require("../services/postService");

const createPost = async (req, res) => {
  try {
    const post = await postService.createPost(req.body);
    res.status(200).json({ message: "ok", data: post });
  } catch (e) {
    res.status(500).json({ message: "error", data: e.message });
  }
};

const findAll = async (req, res) => {
  try {
    const posts = await postService.findAll();
    res.status(200).json({ message: "ok", data: posts });
  } catch (e) {
    res.status(500).json({ message: "error", data: e.message });
  }
};

const findPostById = async (req, res) => {
  try {
    const post = await postService.findPostById(req.params.id);
    res.status(200).json({ message: "ok", data: post });
  } catch (e) {
    res.status(500).json({ message: "error", data: e.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await postService.updatePost(req.params.id, req.body);
    res.status(200).json({ message: "ok", data: post });
  } catch (e) {
    res.status(500).json({ message: "error", data: e.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await postService.deletePost(req.params.id);
    res.status(200).json({ message: "ok", data: post });
  } catch (e) {
    res.status(500).json({ message: "error", data: e.message });
  }
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  findAll,
  findPostById,
};