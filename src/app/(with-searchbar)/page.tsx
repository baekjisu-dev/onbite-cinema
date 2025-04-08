// components
import MovieItem from "@/components/movie-item";

// styles
import style from "./page.module.css";

// data
import { MovieData } from "@/type";

async function AllMovies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다. 잠시 후 다시 시도해 주세요.</div>;
  }

  const allMovies: MovieData[] = await response.json();

  return allMovies.map((movie) => <MovieItem key={movie.id} {...movie} />);
}

async function RecoMovies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다. 잠시 후 다시 시도해 주세요.</div>;
  }

  const recoMoives: MovieData[] = await response.json();

  return recoMoives.map((movie) => <MovieItem key={movie.id} {...movie} />);
}

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 가장 추천하는 영화 🍿</h3>
        <div className={style.reco_movie_area}>
          <RecoMovies />
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화 🎞️</h3>
        <div className={style.all_movie_area}>
          <AllMovies />
        </div>
      </section>
    </div>
  );
}
