import React from "react";
import SeriesList from "../components/seriesList";
import SampleSeries from "./TVsampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavourites";
import Grid from "@material-ui/core/Grid";
import SeriesContextProvider from "../contexts/seriesContext";

export default {
    title: "Series List Page/SeriesList",
    component: SeriesList,
    decorators: [
        (Story) => <SeriesContextProvider>{Story()}</SeriesContextProvider>,
    ],
};

export const Basic = () => {
    const series = [
        { ...SampleSeries, id: 1 },
        { ...SampleSeries, id: 2 },
        { ...SampleSeries, id: 3 },
        { ...SampleSeries, id: 4 },
        { ...SampleSeries, id: 5 },
    ];
    return (
        <Grid container spacing={5}>
            <SeriesList
                series={series}
                action={(series) => <AddToFavoritesIcon series={series} />}
            />
        </Grid>
    );
};
Basic.storyName = "Default";
