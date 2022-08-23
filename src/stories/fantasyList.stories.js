import React from "react";
import fantasyList from "../components/fantasyList";
import { action } from "@storybook/addon-actions";

import Grid from "@material-ui/core/Grid";


export default {
  title: "Fantasy Movies/FantasyList",
  component: FantasyList,

};

const fantasyMovie = {

}

export const Basic = () => {
  const movies = [
    { ...SampleMovie, id: 1 },
    { ...SampleMovie, id: 2 },
    { ...SampleMovie, id: 3 },
    { ...SampleMovie, id: 4 },
    { ...SampleMovie, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <MovieList
        movies={movies}
        action={(movie) => <AddToFavoritesIcon movie={movie} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
