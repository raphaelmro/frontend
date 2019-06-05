const url = "http://localhost:3001";

let token = localStorage.token;
if (!token) {
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);
}

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: token
};

export const fetchCategories = () =>
  fetch(`${url}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

export const fetchPosts = () =>
  fetch(`${url}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

export const fetchCategoryPosts = category =>
  fetch(`${url}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

export const addPost = post => {
  const postData = {
    ...post,
    timestamp: Date.now()
  };

  return fetch(`${url}/posts`, {
    method: "POST",
    headers,
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(data => data);
};

export const fetchAPost = id =>
  fetch(`${url}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(post => post);

export const deletePost = postId =>
  fetch(`${url}/posts/${postId}`, {
    method: "DELETE",
    headers
  });

export const updatePost = post => {
  const postData = {
    ...post,
    timestamp: Date.now()
  };
  return fetch(`${url}/posts/${post.id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(data => data);
};

export const fetchComments = postId =>
  fetch(`${url}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data);

export const addComment = comment => {
  const commentData = {
    ...comment,
    timestamp: Date.now()
  };
  return fetch(`${url}/comments`, {
    method: "POST",
    headers,
    body: JSON.stringify(commentData)
  })
    .then(res => res.json())
    .then(comment => comment);
};

export const fetchAComment = commentId =>
  fetch(`${url}/comments/${commentId}`, { headers })
    .then(res => res.json())
    .then(comment => comment);

export const updateComment = comment => {
  const commentData = {
    ...comment,
    timestamp: Date.now()
  };
  return fetch(`${url}/comments/${comment.id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(commentData)
  })
    .then(res => res.json())
    .then(data => data);
};

export const deleteComment = commentId =>
  fetch(`${url}/comments/${commentId}`, {
    method: "DELETE",
    headers
  });

export const vote = (id, option, type) => {
  const postData = { id, option };
  return fetch(`${url}/${type}/${id}`, {
    method: "POST",
    body: JSON.stringify(postData),
    headers
  })
    .then(res => res.json())
    .then(data => data);
};
