import React from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "../components/templateActorPage";
import {getCredits, getPerson} from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import ActorDetails from "../components/actorDetails";
import ActorCredits from "../components/actorCredits";

const ActorDetailsPage = () => {
    const { id } = useParams();
    const actorQuery = useQuery(
        ["actor", { id: id }],
        getPerson
    );
    const creditQuery = useQuery(
        ["credits", { id: id }],
        getCredits
    );

    if (actorQuery.isLoading) {
        return <Spinner />;
    }

    if (actorQuery.isError) {
        return <h1>{actorQuery.error.message}</h1>;
    }
    const credits = (creditQuery.data) ? creditQuery.data['cast'] : null;
    return (
        <>
            {actorQuery.data ? (
                <>
                    <PageTemplate actor={actorQuery.data}>
                        <ActorDetails actor={actorQuery.data} />
                        <ActorCredits movies={credits} action={()=>{}} />
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting for actor details</p>
            )}
        </>
    );
};

export default ActorDetailsPage;