import React, {useState, useContext } from 'react';
import {useForm} from 'react-hook-form';
import {makeStyles} from "@material-ui/core/styles";
import {useQuery} from "react-query";
import {getGenres} from "../../api/tmdb-api";
import Spinner from "../spinner";
import {BackendAPI} from "../../api/backend-api";
import {useNavigate} from "react-router-dom";
import ContentList from "../contentList";
import {searchPerson} from "../../api/tmdb-api";
import Grid from "@material-ui/core/Grid";
import Header from "../headerMovieList";
import Box from "@material-ui/core/Box"
import FantasyActorCard from "../fantasyActorCard"
import Button from "@material-ui/core/Button";
import _ from "lodash";
import {AuthContext} from "../../contexts/authContext";

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
    let { user, getUser } = useContext(AuthContext);
    console.log(user);
    const {data, error, isLoading, isError} = useQuery("genres", getGenres);

    const [cast, setCast] = useState([]);
    const [displayedActors, setDisplayedActors] = useState([]);
    const onSubmit = async (data) => {
        data.cast = [];
        cast.forEach((a) => data.cast.push({id: a.id, name: a.name, role: a.role || null}));
        data.createdBy = user._id;
        console.log(data);
        await backend.createMovie(data)
            .then((x) => {
                (x._id) ? navigate('/') : console.log("error");

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

    function addToCast(actor) {

        if (!cast.find((a) => a.id === actor.id)) {
            console.log("this ran")
            let newCast = [...cast, actor];
            setCast(newCast);
        }
        setDisplayedActors([]);
    }

    function deleteFromCast(actorId) {
        const clonedCast = _.cloneDeep(cast);
        const index = clonedCast.findIndex((a) => a.id === actorId);
        clonedCast.splice(index, 1);
        setCast(clonedCast);
    }

    return (
        <>
            <Grid container className={classes.root} style={{paddingTop: 50}}>
                <Grid item xs={12}>
                    <Header title={"Create a Fantasy Movie"}/>
                </Grid>
                <Grid item container xs={12} spacing={5}>
                    <Box style={{margin: "auto", paddingTop: 20}}  component="div" className={classes.root}>
                        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" class="input is-primary" placeholder="Title" {...register("title", {required: true})} /> <br/>
                            <select class="input is-primary" {...register("genre", {required: true})} placeholder="genre">
                                <option>genre</option>
                                {genres.map(genre => (
                                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                                ))}
                            </select>
                            <textarea placeholder="plot" class="input is-primary" {...register("plot", {})} /><br/>
                            <input class="input is-primary" type="datetime" placeholder="Release Date" {...register("releaseDate", {
                                required: true,
                                maxLength: 80
                            })} />
                            <input class="input is-primary" type="search" placeholder="Cast" onChange={(e) => search(e.target.value)}/>
                            <input class="button is-primary"  type="submit"/>
                        </form>
                    </Box>
                </Grid>
                <div style={{ paddingTop: 20}} >Current Cast</div>
                <div>{cast.map(actor => (<p key={actor.id}>{actor.name} <Button key={actor.id}
                                                                                onClick={() => deleteFromCast(actor.id)}> Remove</Button>
                </p>))}</div>
                <ContentList content={displayedActors} action={addToCast}
                             cardType={(id, m, action) => (<FantasyActorCard key={id} actor={m} action={action}/>)}/>
            </Grid>
        </>
    );
}

export default FantasyMovieForm;