import React, { useEffect, useState } from "react";
import { getBlogComments } from "../helper/coreapicalls";
import user_img from "../../image/user.png";
import { useParams } from "react-router-dom";
import "../../styles.css";

const Comment = () => {
  const blogId = useParams();
  const id = blogId._Id;
  // console.log(id);

  const [showComment, setShowComment] = useState([]);
  const [error, seterror] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = () => {
    getBlogComments(id).then((data) => {
      if (data.error) {
        seterror(data.error);
      } else {
        setShowComment(data.comment);
        // console.log(data.comment);
      }
    });
    setLoading(true);
  };

  return (
    <div>
      <h1 className="text-center blog_heading py-3">All Comments</h1>
      <div className="Comment_systum container">
        {showComment.map((comment, index) => {
          return (
            <div className="card mt-2" key={index}>
              <div className="card-header user_email">
                <img
                  src={user_img}
                  alt="User"
                  className="img-fluid Fullblog_comment_img"
                />
                {comment.user}
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>{comment.content}</p>
                  <footer className="blockquote-footer text-right">
                    Time
                    <cite title="Source Title ml-2 text-right">
                      {comment.createdAt}
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
