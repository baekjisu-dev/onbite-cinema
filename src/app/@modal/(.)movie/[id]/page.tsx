import Modal from "@/components/modal";
import MoviePage from "@/app/movie/[id]/page";

export default function Page(params: any) {
  return (
    <Modal>
      <MoviePage {...params} />
    </Modal>
  );
}
