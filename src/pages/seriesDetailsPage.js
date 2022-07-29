import React from "react";
import { useParams } from "react-router-dom";
import SeriesDetails from "../components/seriesDetails";
import PageTemplate from "../components/templateSeriesPage";
import { getSeriesDetails } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const SeriesDetailsPage = () => {
  const { id } = useParams();
  const { data: series, error, isLoading, isError } = useQuery(
    ["series", { id: id }],
    getSeriesDetails
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {series ? (
        <>
          <PageTemplate series={series}>
            <SeriesDetails series={series} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default SeriesDetailsPage;