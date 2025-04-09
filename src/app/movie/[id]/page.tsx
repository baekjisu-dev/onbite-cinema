// styles
import { notFound } from "next/navigation";
import style from "./page.module.css";
import { MovieData } from "@/type";

export async function generateStaticParams() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
    { cache: "force-cache" }
  );

  const movies: MovieData[] = await response.json();

  if (!response.ok) {
    return [];
  }

  return movies.map((movie) => ({
    id: movie.id.toString(),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${id}`,
    { cache: "force-cache" }
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    return <div>오류가 발생했습니다. 잠시 후 다시 시도해 주세요.</div>;
  }

  const movie: MovieData = await response.json();

  const {
    posterImgUrl,
    title,
    releaseDate,
    genres,
    subTitle,
    description,
    runtime,
    company,
  } = movie;

  return (
    <div className={style.container}>
      <div
        className={style.poster_container}
        style={{ backgroundImage: `url(${posterImgUrl})` }}
      >
        <img src={posterImgUrl} alt={title} />
      </div>
      <div className={style.movie_info_container}>
        <p className={style.movie_title}>{title}</p>
        <p className={style.sub_text}>
          {releaseDate} / {genres.join(", ")} / {runtime}분
        </p>
        <p className={style.sub_text}>{company}</p>
        <p className={style.sub_title}>{subTitle}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
