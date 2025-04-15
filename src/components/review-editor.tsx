"use client";

import { createReviewAction } from "@/actions/create-review.action";
import style from "./review-editor.module.css";
import { useActionState, useEffect } from "react";
import { LoadingSpinner } from "./loading-spinner";

export default function ReviewEditor({ movieId }: { movieId: string }) {
  const [state, formAction, isPending] = useActionState(
    createReviewAction,
    null
  );

  useEffect(() => {
    if (state && !state.state) {
      alert(state.error);
    }
  }, [state]);

  return (
    <section>
      <form className={style.form_container} action={formAction}>
        <input readOnly type="hidden" name="movieId" value={movieId} />
        <textarea
          disabled={isPending}
          name="content"
          placeholder="리뷰를 작성해 주세요."
        />
        <div className={style.form_footer}>
          <input
            disabled={isPending}
            name="author"
            type="text"
            placeholder="작성자"
          />
          <button disabled={isPending} type="submit">
            {isPending ? <LoadingSpinner /> : "작성하기"}
          </button>
        </div>
      </form>
    </section>
  );
}
