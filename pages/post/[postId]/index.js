import { useRouter } from "next/router";

const PostDetail = () => {
  const router = useRouter();
  const postId = router.query.postId;
  return <div>Product Detail {postId}</div>;
};

export default PostDetail;
