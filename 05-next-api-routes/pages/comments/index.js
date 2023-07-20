import { useState } from "react";

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ text: comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setComments([...comments, data]);
    setComment("");
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });

    const data = await response.json();
    console.log(data);
    fetchComments();
  };

  const startEditComment = (commentId, initialText) => {
    setEditingCommentId(commentId);
    setEditedText(initialText);
  };

  const cancelEditComment = () => {
    setEditingCommentId(null);
    setEditedText("");
  };

  const saveEditedComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "PATCH",
      body: JSON.stringify({ text: editedText }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    setEditingCommentId(null);
    fetchComments();
  };

  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit comment</button>
      <button onClick={fetchComments}>Load comments</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            {editingCommentId === comment.id ? (
              <>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button onClick={() => saveEditedComment(comment.id)}>
                  Save
                </button>
                <button onClick={cancelEditComment}>Cancel</button>
              </>
            ) : (
              <>
                {comment.text}
                <button
                  onClick={() => startEditComment(comment.id, comment.text)}
                >
                  Edit
                </button>
                <button onClick={() => deleteComment(comment.id)}>
                  Delete
                </button>
              </>
            )}
          </div>
        );
      })}
    </>
  );
};

export default CommentsPage;
