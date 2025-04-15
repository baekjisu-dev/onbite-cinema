"use client";

import { useActionState, useEffect, useRef } from "react";
import { deleteReviewAction } from "@/actions/delete-review.action";

export default function ReviewDeleteButton({
  reviewId,
  movieId,
}: {
  reviewId: number;
  movieId: number;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    deleteReviewAction,
    null
  );

  useEffect(() => {
    if (state && !state.state) {
      alert(state.error);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction}>
      <input type="hidden" name="reviewId" value={reviewId} />
      <input type="hidden" name="movieId" value={movieId} />
      <div onClick={() => formRef.current?.requestSubmit()}>
        {isPending ? "..." : "🗑️ 리뷰 삭제하기"}
      </div>
    </form>
  );
}
