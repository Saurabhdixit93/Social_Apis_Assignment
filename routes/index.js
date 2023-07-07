const router = require('express').Router();

const {
  GetAllPosts,
  GetSpecificPostById,
  AddCommentSpecificPostById,
  AddLikeSpecificPostById,
  NewPost,
  DeleteSpecificPostById,
  UpdateSpecificPostById,
} = require('../controllers/PostController');

router.post('/add-post', NewPost);
router.get('/get-posts', GetAllPosts);
router.get('/get-post/:postId', GetSpecificPostById);
router.put('/update-post/:postId', UpdateSpecificPostById);
router.delete('/delete-post/:postId', DeleteSpecificPostById);
router.post('/posts/:postId/add-like', AddLikeSpecificPostById);
router.post('/posts/:postId/add-comment', AddCommentSpecificPostById);



module.exports = router;
