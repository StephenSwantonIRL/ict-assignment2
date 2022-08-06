import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import SimilarMovies from "../components/similarMovies"
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getSimilarMovies } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const MovieDetailsPage = () => {
  const { id } = useParams();
  const movieQuery = useQuery(
    ["movie", { id: id }],
    getMovie
  );
  const similarQuery= useQuery(
      ["similar", { id: id }],
      getSimilarMovies
  );

  if (movieQuery.isLoading || similarQuery.isLoading) {
    return <Spinner />;
  }

  if (movieQuery.isError ) {
    return <h1>{movieQuery.error.message}</h1>;
  }
  const similarMovies = (similarQuery.data) ? similarQuery.data['results'] : null;
  return (
    <>
      {movieQuery.data ? (
        <>
          <PageTemplate movie={movieQuery.data}>
            <MovieDetails movie={movieQuery.data} />
            <SimilarMovies movies={similarMovies} action={()=>{}} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;