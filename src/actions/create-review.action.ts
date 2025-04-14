"use server";

export async function createReviewAction(formData: FormData) {
  try {
    const movieId = formData.get("movieId");
    const content = formData.get("content");
    const author = formData.get("author");

    if (!movieId || !content || !author) {
      return;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: "POST",
        body: JSON.stringify({
          movieId,
          content,
          author,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create review");
    }
  } catch (e) {
    console.error(e);
    return;
  }
}
