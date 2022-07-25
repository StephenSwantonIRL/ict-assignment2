import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getSeries} from '../api/tmdb-api'


const SeriesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('series', getSeries)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const series = data.results;

  return (
    <>
      {JSON.stringify(series)}
    </>
  );
};

export default SeriesPage;