const Post = [
  (id = ''),
  (title = ''),
  (content = ''),
  (likes = ''),
  (comments = ''),
];
const uuid = require('uuid');

module.exports.NewPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = {
      id: uuid.v4(),
      title: title,
      content: content,
      likes: 0,
      comments: [],
    };
    await Post.push(newPost);
    return res.status(201).json({
      message: 'Post Created Successfully',
      newPost,
    });
  } catch (error) {
    return res.status(500).json({
      error: `Internal Server Error : ${error.message}`,
    });
  }
};

module.exports.GetAllPosts = async (req, res) => {
  try {
    if (Post.length === 0) {
      return res.status(404).json({
        error: 'Posts Not Found',
      });
    }
    return res.status(200).json({
      message: 'Posts Fetched Successfully',
      Post: Post,
    });
  } catch (error) {
    return res.status(500).json({
      error: `Internal Server Error : ${error.message}`,
    });
  }
};

module.exports.GetSpecificPostById = async (req, res) => {
  const { postId } = req.params;

  try {
    const getPost = await Post.find((post) => post.id === postId);
    if (!getPost) {
      return res.status(404).json({
        error: 'Post Not Found With given Id',
      });
    }
    return res.status(200).json({
      message: 'Post Successfully Fetched using postId',
      getPost,
    });
  } catch (error) {
    return res.status(500).json({
      error: `Internal Server Error : ${error.message}`,
    });
  }
};

module.exports.UpdateSpecificPostById = async (req, res) => {
  const { postId } = req.params;
  const { title, content } = req.body;
  try {
    const findPost = await Post.find((post) => post.id === postId);
    if (!findPost) {
      return res.status(404).json({
        error: 'Post Not Found by given post id to Update',
      });
    }
    findPost.title = title;
    findPost.content = content;
    return res.status(201).json({
      success: 'Post Updated Successfully',
      UpdatedPost: findPost,
    });
  } catch (error) {
    return res.status(500).json({
      error: `Internal Server Error : ${error.message}`,
    });
  }
};

module.exports.DeleteSpecificPostById = async (req, res) => {
  const { postId } = req.params;
  try {
    const index = await Post.findIndex((post) => post.id === postId);

    if (index === -1) {
      return res.status(404).json({
        error: 'Post Not Found by given post id to Delete',
      });
    }
    Post.splice(index, 1);
    return res.status(204).json({
      success: 'Post Deleted Successfully',
    });
  } catch (error) {
    return res.status(500).json({
      error: `Internal Server Error : ${error.message}`,
    });
  }
};

module.exports.AddLikeSpecificPostById = async (req, res) => {
  const { postId } = req.params;
  try {
    const findPost = await Post.find((post) => post.id === postId);
    if (!findPost) {
      return res.status(404).json({
        error: 'Post Not Found by given post id to Like the Post',
      });
    }
    if (findPost.likes === 0) {
      findPost.likes++;
    } else {
      findPost.likes--;
    }
    return res.status(200).json({
      success: 'Like Working Successfull',
      findPost,
    });
  } catch (error) {
    return res.status(500).json({
      error: `Internal Server Error : ${error.message}`,
    });
  }
};

module.exports.AddCommentSpecificPostById = async (req, res) => {
  const { postId } = req.params;
  const { comment } = req.body;
  try {
    const findPost = await Post.find((post) => post.id === postId);
    if (!findPost) {
      return res.status(404).json({
        error: 'Post Not Found by given post id to Add Comment',
      });
    }
    findPost.comments.push(comment);
    return res.status(201).json({
      success: 'Comment Added Successfully',
      findPost,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Internal Server Error : ${error.message}`,
    });
  }
};
