import { API } from "../../backend";

//category calls
export const createCategory = (userId, token, category) => {
  return fetch(`${API}/category/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//get all categories
export const getCategories = () => {
  return fetch(`${API}/categories`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// Create Blogs
export const createaBlog = (userId, token, blog) => {
  return fetch(`${API}/blog/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: blog,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

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

// delete a Blog

export const DeleteBlogs = (blogId, userId, token) => {
  return fetch(`${API}/blog/${blogId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
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

// Update a Blog

export const UpdateOneBlogs = (blogId, userId, token, blog) => {
  return fetch(`${API}/blog/${blogId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: blog,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

////////   Faculty ///////////

//category calls
// export const createCategory = (userId, token, category) => {
//   return fetch(`${API}/category/create/${userId}`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(category),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };

// //get all categories
// export const getCategories = () => {
//   return fetch(`${API}/categories`, {
//     method: "GET",
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };

// Create Facultys
export const createaFaculty = (userId, token, faculty) => {
  return fetch(`${API}/faculty/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: faculty,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// get all facultys
export const getFacultys = () => {
  return fetch(`${API}/facultys`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// delete a faculty

export const DeleteFacultys = (facultyId, userId, token) => {
  return fetch(`${API}/faculty/${facultyId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//get a faculty
export const getoneFaculty = (facultyId) => {
  return fetch(`${API}/faculty/${facultyId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// Update a faculty

export const UpdateOneFacultys = (facultyId, userId, token, faculty) => {
  return fetch(`${API}/faculty/${facultyId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: faculty,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

///////////////////////// Free Course Video /////////////////////////////////////

// Create Free Course Video
export const createaFreecoursevideo = (userId, token, freecourse) => {
  return fetch(`${API}/freecoursevideo/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: freecourse,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// get all Free Course Video
export const getFreecoursevideos = () => {
  return fetch(`${API}/freecoursevideos`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// delete a Free Course Video

export const DeleteFreecoursevideos = (freecourseId, userId, token) => {
  return fetch(`${API}/delete/${freecourseId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//get a Free Course Video
export const getoneFreecoursevideo = (freecourseId) => {
  return fetch(`${API}/freecoursevideo/${freecourseId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// Update a Free Course Video

export const UpdateOneFreecoursevideos = (
  freecourseId,
  userId,
  token,
  freecourse
) => {
  return fetch(`${API}/update/${freecourseId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: freecourse,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const user = () => {
  return fetch(`${API}/users`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getfeedback = (token) => {
  return fetch(`${API}//getfeedback`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getLocalcommentsubmit = (token) => {
  return fetch(`${API}/GetLocalCommentSubmit`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
