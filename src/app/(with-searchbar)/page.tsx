// components
import MovieItem from "@/components/movie-item";

// styles
import style from "./page.module.css";

// data
import movies from "@/mock/dummy.json";

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 가장 추천하는 영화 🍿</h3>
        <div className={style.reco_movie_area}>
          {movies.slice(0, 3).map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화 🎞️</h3>
        <div className={style.all_movie_area}>
          {movies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}
