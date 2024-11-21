import {
  getMovieDetail,
  getMovies,
  getVideoKey,
} from "@/helpers/movieFunctions";
import { BackspaceIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
// import { useParams } from "next/navigation";
import VideoSection from "../components/VideoSection";

const MovieDetail = async ({ params }) => {
  const { movieId } = params;

  //* client componentlerde params yakalama
  // const { movieId } = useParams()
  const movieDetail = await getMovieDetail(movieId);
  const { title } = movieDetail;
  const videoKey = await getVideoKey(movieId);

  return (
    <div className="md:container px-10 mx-auto py-5">
      <h1 className="text-center text-white text-3xl">{title}</h1>
      {videoKey && <VideoSection videoKey={videoKey} />}
      <div className="flex items-center mt-3 md:mt-4 gap-3">
        <Link
          href={"/movies"}
          className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition mt-2"
        >
          <BackspaceIcon className="w-4 md:w-7 text-black mr-1" />
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default MovieDetail;

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const movies = await getMovies("now_playing");

  return movies.map((movie) => ({
    movieId: movie.id.toString(),
  }));
}
