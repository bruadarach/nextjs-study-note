import { comments } from "../../../data/comments";

export default function handler(req, res) {
  const { commentId } = req.query;

  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "DELETE") {
    // find the comment to delete
    const deleteComment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );

    // find the index of the comment to delete
    const index = comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );
    // remove the comment from array
    comments.splice(index, 1);

    // send back the deleted comment
    res.status(200).json(deleteComment);
  } else if (req.method === "PATCH") {
    const { text } = req.body;
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    comment.text = text;
    res.status(200).json(comment);
  }
}
