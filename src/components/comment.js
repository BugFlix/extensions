// Comment.js

import React, { useState } from "react";
import "./comment.css";
import Chul from "../images/chul.png";

const Comment = () => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [replyText, setReplyText] = useState("");
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyIndex, setReplyIndex] = useState(null);

  const handleCommentSubmit = () => {
    if (commentText.trim() !== "") {
      setComments([...comments, { text: commentText, replies: [] }]);
      setCommentText("");
    }
  };

  const handleReplySubmit = (commentIndex) => {
    if (replyText.trim() !== "") {
      const updatedComments = [...comments];
      updatedComments[commentIndex].replies.push({ text: replyText });
      setComments(updatedComments);
      setReplyText("");
      setShowReplyInput(false);
      setReplyIndex(null);
    }
  };

  return (
    <div className="comment-container">
      <div className="comment-content">
        {/* Comment Input */}
        <div className="comment-input">
          <input
            type="text"
            placeholder="댓글을 남겨주세요..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button onClick={handleCommentSubmit}>댓글달기</button>
        </div>

        {/* Comments */}
        {comments.map((comment, commentIndex) => (
          <div key={commentIndex} className="comment">
            {comment.text}

            {/* Show Reply Input */}
            {showReplyInput && replyIndex === commentIndex && (
              <div className="reply-input">
                <input
                  type="text"
                  placeholder="답글을 남겨주세요..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
                <button onClick={() => handleReplySubmit(commentIndex)}>
                  답글달기
                </button>
              </div>
            )}

            {/* Existing Replies */}
            {comment.replies.map((reply, replyIndex) => (
              <div key={replyIndex} className="reply">
                {reply.text}
              </div>
            ))}

            {/* "답글 달기" Button */}
            <button
              className="replyBtn"
              onClick={() => {
                setShowReplyInput(!showReplyInput);
                setReplyIndex(commentIndex);
              }}
            >
              답글달기
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
