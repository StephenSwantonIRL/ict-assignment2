import React from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "../components/templateActorPage";
import { getPerson } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import ActorDetails from "../components/actorDetails";

const ActorDetailsPage = () => {
    const { id } = useParams();
    const { data: actor, error, isLoading, isError } = useQuery(
        ["actor", { id: id }],
        getPerson
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    return (
        <>
            {actor ? (
                <>
                    <PageTemplate actor={actor}>
                        <ActorDetails actor={actor} />
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting for actor details</p>
            )}
        </>
    );
};

export default ActorDetailsPage;