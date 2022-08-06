import React, { useState } from "react";
import Header from "../headerMovieList";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import SeriesList from "../seriesList";
import ActorList from "../actorList";

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

function ActorListPageTemplate({ actors, title, action }) {
  const classes = useStyles();



  return (
    <>
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <ActorList action={action} actors={actors} />
      </Grid>
    </Grid>
    <Fab
        color="secondary"
        variant="extended"
        className={classes.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
      >
      </Drawer>
    </>    
  );
}
export default ActorListPageTemplate;