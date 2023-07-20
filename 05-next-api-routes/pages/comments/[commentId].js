import { comments } from "../../data/comments";

const Comment = ({ comment }) => {
  return (
    <div>
      {comment.id} {comment.text}
    </div>
  );
};

export default Comment;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { commentId: "1" },
      },
      {
        params: { commentId: "2" },
      },
      {
        params: { commentId: "3" },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { commentId } = params;

  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  console.log(comment);

  /* Don't do this !!! 
    - NOT call your own API within getStaticPaths or getStaticProps
    - Can call external APIs

    const res = await fetch(`https:localhost:3000/api/comments/${commentId}`);
    const data = await res.json();
  */

  return {
    props: {
      comment,
    },
  };
}
