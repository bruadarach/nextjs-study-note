import { useRouter } from "next/router";

const Review = () => {
  const router = useRouter();
  const { postId, reviewId } = router.query;

  return (
    <div>
      {reviewId} for product {postId}
    </div>
  );
};

export default Review;
