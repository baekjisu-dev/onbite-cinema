import { ReviewData } from "@/type";
import style from "./review-item.module.css";
import ReviewDeleteButton from "./review-delete-button";

export default function ReviewItem({
  id,
  content,
  author,
  createdAt,
  movieId,
}: ReviewData) {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <p className={style.author}>{author}</p>
        <p className={style.created_at}>
          {new Date(createdAt).toLocaleDateString()}일 작성됨
        </p>
      </div>
      <p className={style.content}>{content}</p>
      <ReviewDeleteButton reviewId={id} movieId={movieId} />
    </div>
  );
}
