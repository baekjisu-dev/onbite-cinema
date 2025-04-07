// components
import MovieItem from "@/components/movie-item";

// styles
import style from "./page.module.css";

// data
import movies from "@/mock/dummy.json";

export default async function page() {
  return (
    <div className={style.container}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}
