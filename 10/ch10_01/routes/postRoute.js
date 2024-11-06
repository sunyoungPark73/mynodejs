const express = require("express");
const postController = require("../controllers/postControllers");
const router = express.Router();
router.get("/", postController.findAll);
router.get("/:id", postController.findPostById);
router.post("/", postController.createPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);
module.exports = router;