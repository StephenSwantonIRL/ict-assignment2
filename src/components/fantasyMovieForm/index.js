import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {makeStyles} from "@material-ui/core/styles";
import {useQuery} from "react-query";
import {getGenres} from "../../api/tmdb-api";
import Spinner from "../spinner";
import {BackendAPI} from "../../api/backend-api";
import {useNavigate} from "react-router-dom";
import ActorList from "../actorList";
import {searchPerson} from "../../api/tmdb-api";
import _ from "lodash";


const backend = new BackendAPI("https://movie-app-backend.glitch.me")

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    form: {
        width: "50%",
        "& > * ": {
            marginTop: theme.spacing(2),
        },
    },
    textField: {
        width: "40ch",
    },
    submit: {
        marginRight: theme.spacing(2),
    },
    snack: {
        width: "50%",
        "& > * ": {
            width: "100%",
        },
    },
}));

const FantasyMovieForm = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {data, error, isLoading, isError} = useQuery("genres", getGenres);
    const [cast, setCast] = useState([]);
    const [displayedActors, setDisplayedActors] = useState([]);
    const onSubmit = async (data) => {
        data.cast = cast;
        await backend.createMovie(data).then((x) => {
            navigate("/");
        })
    }
    if (isLoading) {
        return <Spinner/>;
    }

    console.log(errors);
    const genres = data.genres;

    async function search(query) {
        const results = await searchPerson(query)
        const sort = _.orderBy(results.results, ['popularity'], "desc");
        setDisplayedActors(sort);
    }


    return (
        <>
            <div>

            </div>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Title" {...register("Title", {required: true})} /> <br/>
                <select {...register("Genre", {required: true})}>

                    {genres.map(genre => (
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                    ))}
                </select>
                <textarea {...register("Plot", {})} /><br/>
                <input type="datetime" placeholder="Release Date" {...register("Release Date", {
                    required: true,
                    maxLength: 80
                })} />
                <input type="search" placeholder="Cast" onChange={(e) => search(e.target.value)}/>
                <ActorList actors={displayedActors} action={() => {
                }}/>
                <input type="submit"/>
            </form>
        </>
    );
}

export default FantasyMovieForm;