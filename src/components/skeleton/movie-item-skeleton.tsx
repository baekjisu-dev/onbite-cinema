import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import style from "./movie-item-skeleton.module.css";

export default function MovieItemSkeleton({ count }: { count: number }) {
  return (
    <div
      className={style.container}
      style={{ gridTemplateColumns: `repeat(${count}, 1fr)` }}
    >
      {new Array(count).fill(0).map((_, index) => (
        <div key={index}>
          <Skeleton
            height="100%"
            highlightColor="#444444"
            baseColor="#222222"
          />
        </div>
      ))}
    </div>
  );
}
