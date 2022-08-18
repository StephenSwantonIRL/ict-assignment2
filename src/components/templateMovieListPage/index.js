import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterDrawer from "../filterDrawer"
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MovieList from "../movieList";
import _ from "lodash";

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

function MovieListPageTemplate({ movies, title, action }) {
  const classes = useStyles();
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [sortProperty, setSortProperty] = useState("title");
  const [sortType, setSortType] = useState("desc")

  let displayedMovies

  function displayMovies() {
    const genreId = Number(genreFilter);

    displayedMovies = movies
        .filter((m) => {
          return m.title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
        })
        .filter((m) => {
          return genreId > 0 ? m.genre_ids.includes(genreId) : true;
        });

    displayedMovies = _.orderBy(displayedMovies, [sortProperty], [sortType])
    return displayedMovies;
  }

  function applySort(type, property) {
    setSortType(type);
    setSortProperty(property);
  }


  const handleChange = (type, value) => {
    if (type === "title") setTitleFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <MovieList action={action} movies={displayMovies()} sort={applySort} />
      </Grid>
    </Grid>
      <FilterDrawer titleFilter={titleFilter} genreFilter={genreFilter} displayContent={displayMovies} handleChange={handleChange} sort={applySort} />
    </>    
  );
}
export default MovieListPageTemplate;