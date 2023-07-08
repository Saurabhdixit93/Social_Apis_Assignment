# Social Media API

This is a simple CRUD API for posting social media posts, as well as adding likes and comments to a post.

## Setup

1. Clone the repository:

   
bash
   `git clone https://github.com/Saurabhdixit93/Social_Apis_Assignment`
  


2. Install the dependencies:

   
bash
   npm install
  


3. Start the server:

   
bash
   npm start 
  


   The server will start running at `http://localhost:5000`.

## API Endpoints

### Get all posts

- Endpoint: GET  `http://localhost:5000/get-posts`

Retrieves all the posts.

### Create a post

- Endpoint: POST `http://localhost:5000/add-post`

Creates a new post.

Request body:


json
{
  "title": "Post Title",
  "content": "Post Content"
}


### Get a specific post

- Endpoint: GET `http://localhost:5000/get-post/:postId`

Retrieves a specific post by ID.

### Update a specific post

- Endpoint: PUT` http://localhost:5000/update-post/:postId`

Updates a specific post by ID.

Request body:


json
{
  "title": "Updated Title",
  "content": "Updated Content"
}


### Delete a specific post

- Endpoint: DELETE `http://localhost:5000/delete-post/:postId`

Deletes a specific post by ID.

### Like a post

- Endpoint: POST `http://localhost:5000/posts/:postId/add-like`

Adds or removes a like to a specific post by ID. Clicking the like button multiple times will toggle the like count.

### Comment on a post

- Endpoint: POST `http://localhost:5000/posts/:postId/add-comment`

Adds a comment to a specific post by ID.

Request body:


json
{
  "comment": "Comment Text"
}


## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
.
