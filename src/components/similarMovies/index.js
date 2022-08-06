import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MovieList from "../movieList";

const useStyles = makeStyles((theme) =>  ({
    root: {
        backgroundColor: "#bfbfbf",
        paddingTop: theme.spacing(7),
    },
    fab: {
        marginTop: theme.spacing(8),
        position: "fixed",
        top: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

function SimilarMovies({ movies, title, action }) {
    const classes = useStyles();
    const [titleFilter, setTitleFilter] = useState("");
    return (
        <>
            <Grid container className={classes.root}>

                <Grid item container spacing={5}>
                    <MovieList action={action} movies={movies} />
                </Grid>
            </Grid>
        </>
    );
}
export default SimilarMovies;