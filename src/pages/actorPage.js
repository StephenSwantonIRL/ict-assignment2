import React from "react";
import PageTemplate from "../components/actorListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getPopularPeople } from '../api/tmdb-api'


const ActorPage = (props) => {
    const {  data, error, isLoading, isError }  = useQuery('actors', getPopularPeople)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const actors = data.results;

    return (
        <>
            <PageTemplate
                title="Popular Actors"
                actors={actors}
                action={(actor) => {

                }}
            />
        </>
    );
};

export default ActorPage;