// common
import Link from "next/link";

// styles
import style from "./movie-item.module.css";

// data
import { MovieData } from "@/type";

export default function MovieItem({
  id,
  title,
  releaseDate,
  company,
  genres,
  subTitle,
  description,
  runtime,
  posterImgUrl,
}: MovieData) {
  return (
    <Link className={style.container} href={`/movie/${id}`}>
      <img src={posterImgUrl} alt={title} />
    </Link>
  );
}
