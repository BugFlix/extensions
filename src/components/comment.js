import React, { useState } from "react";
import "./comment.css";
import Chul from "../images/chul.png";
const Comment = () => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const [replies, setReplies] = useState([]);
  const handleToggleReplyForm = () => {
    setShowReplyForm(!showReplyForm);
  };
  const handleReplySubmit = () => {
    const newReply = {
      username: "tkrhdrhkdduf", // You may replace this with the actual logged-in user's username
      comment: replyContent,
    };
    // Add your logic here to handle the submission of the reply
    // For example, you can send the reply content to a server or update the state
    console.log(`Reply submitted: ${replyContent}`);
    // You may want to clear the reply content and hide the form after submission
    setReplies([...replies, newReply]);
    setReplyContent("");
    setShowReplyForm(false);
  };
  return (
    <div className="commentContainer">
      <div className="myPostComment">
        <circle className="userProfileCircle">
          <img src={Chul}></img>
        </circle>
        <h3>Ironhee</h3>
        <div className="Comment">글 매우 잘 읽었습니다.</div>
        <span className="reply" onClick={handleToggleReplyForm}>
          답글달기
        </span>
        {replies.map((reply, index) => (
          <div key={index} className="replyContainer">
            {/* <div className="userProfileCircle">
              <img src={reply.userProfile} alt="User Profile"></img>
            </div> */}
            <h3 className="replyUsername">{reply.username}</h3>
            <div className="replyComment">{reply.comment}</div>
          </div>
        ))}
        {showReplyForm && (
          <div className="replyForm">
            <textarea
              placeholder="답글을 작성하세요..."
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
            />
            <button onClick={handleReplySubmit}>작성하기</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Comment;
