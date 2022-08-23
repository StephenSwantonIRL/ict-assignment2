import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MovieList from "../movieList";
import Typography from "@material-ui/core/Typography";

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

function ActorCredits({ movies, title, action }) {
    const classes = useStyles();
    const [titleFilter, setTitleFilter] = useState("");
    console.log(movies);
    return (
        <>
            <Grid container className={classes.root}>
                <Grid item container spacing={5}>
                    <Typography variant={"h5"} style={{position: "relative", left: 20, top: -15}}>Actor Credits</Typography>
                </Grid>
                <Grid item container spacing={5}>
                    <MovieList action={action} movies={movies} />
                </Grid>
            </Grid>
        </>
    );
}
export default ActorCredits;