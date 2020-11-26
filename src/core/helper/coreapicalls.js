import { API } from "../../backend";

// get all Blogs
export const getBlogs = () => {
  return fetch(`${API}/blogs`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//get a Blog
export const getoneBlog = (blogId) => {
  return fetch(`${API}/blog/${blogId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// Blog Comments
export const getBlogComments = (blogId) => {
  return fetch(`${API}/blog/${blogId}/comments`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const postBlogComment = (blogId, post) => {
  return fetch(`${API}/blog/${blogId}/postComment`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//get all faculty
export const getFacultys = () => {
  return fetch(`${API}/facultys`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//get one Faculty
export const getoneFaculty = (facultyId) => {
  return fetch(`${API}/faculty/${facultyId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// get all video's

export const getFreecoursevidero = () => {
  return fetch(`${API}/freecoursevideos`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

///POST Local comment submit

export const postLocalComment = (submit) => {
  return fetch(`${API}/LocalCommentSubmit`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submit),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
