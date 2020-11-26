const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const {
  getBlogById,
  createBlog,
  getBlog,
  photo,
  deleteBlog,
  updateBlog,
  getAllBlogs,
  getAllComments,
  postComment,
} = require("../controllers/blog");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");
const { route } = require("./product");

// all of params
router.param("userId", getUserById);
router.param("blogId", getBlogById);

// All Actual Route
router.post(
  "/blog/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createBlog
);

// read routes
router.get("/blog/:blogId", getBlog);
router.get("/blog/photo/:blogId", photo);

//delete Blog
router.delete(
  "/blog/:blogId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteBlog
);

// Update Blog

router.put(
  "/blog/:blogId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateBlog
);

// listing all Blogs
router.get("/blogs", getAllBlogs);

//All comments
router.get("/blog/:blogId/comments", getAllComments);
/// Post Comments
router.post(
  "/blog/:blogId/postComment",
  [
    check("user").isEmail().withMessage("Please Login First"),
    check("content").isLength({ min: 1 }).withMessage("Please Write Comment"),
  ],
  postComment
);
module.exports = router;
