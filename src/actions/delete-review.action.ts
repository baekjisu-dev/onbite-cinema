"use server";

import { revalidateTag } from "next/cache";

export async function deleteReviewAction(_: any, formData: FormData) {
  const reviewId = formData.get("reviewId");
  const movieId = formData.get("movieId");

  if (!reviewId || !movieId) {
    return {
      state: false,
      error: "삭제할 리뷰가 없습니다.",
    };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/${reviewId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      return {
        state: false,
        error: response.statusText,
      };
    }

    revalidateTag(`review-${movieId}`);

    return {
      state: true,
      error: "",
    };
  } catch (e) {
    console.error(e);
    return {
      state: false,
      error: `리뷰 삭제에 실패했습니다: ${e}`,
    };
  }
}
