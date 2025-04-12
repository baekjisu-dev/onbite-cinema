// components
import MovieItem from "@/components/movie-item";

// styles
import style from "./page.module.css";

// data
import { MovieData } from "@/type";
import { delay } from "@/util/delay";
import { Suspense } from "react";
import MovieItemSkeleton from "@/components/skeleton/movie-item-skeleton";

async function MovieResult({ q }: { q: string }) {
  await delay(1500);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${q}`,
    { next: { revalidate: 60 * 60 * 24 } }
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다. 잠시 후 다시 시도해 주세요.</div>;
  }

  const movies: MovieData[] = await response.json();

  return (
    <div className={style.container}>
      {movies.length === 0 ? (
        <div>검색 결과가 없습니다.</div>
      ) : (
        movies.map((movie) => <MovieItem key={movie.id} {...movie} />)
      )}
    </div>
  );
}

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;

  return (
    <Suspense key={q} fallback={<MovieItemSkeleton count={3} />}>
      <MovieResult q={q} />
    </Suspense>
  );
}
