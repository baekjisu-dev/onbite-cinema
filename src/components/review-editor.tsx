import { createReviewAction } from "@/actions/create-review.action";
import style from "./review-editor.module.css";

export default function ReviewEditor({ movieId }: { movieId: string }) {
  return (
    <section>
      <form className={style.form_container} action={createReviewAction}>
        <input readOnly type="hidden" name="movieId" value={movieId} />
        <textarea name="content" placeholder="리뷰를 작성해 주세요." />
        <div className={style.form_footer}>
          <input name="author" type="text" placeholder="작성자" />
          <button type="submit">작성하기</button>
        </div>
      </form>
    </section>
  );
}
