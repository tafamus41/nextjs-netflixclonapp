import { getMovies } from "@/helpers/movieFunctions";
import React from "react";
import HeroSection from "./components/HeroSection";
import MovieSection from "./components/MovieSection";

export const metadata = {
  title: "Movies Page",
};
const Movies = async () => {
  const movies = await getMovies("now_playing");
  return (
    <div>
      <HeroSection
        title={movies[0]?.title}
        overview={movies[0]?.overview}
        id={movies[0]?.id}
      />
      <MovieSection title="NOW PLAYING" type="now_playing" />
      <MovieSection title="POPULAR" type="popular" />
      <MovieSection title="TOP RATED" type="top_rated" />
      <MovieSection title="UPCOMING" type="upcoming" />
    </div>
  );
};

export default Movies;
