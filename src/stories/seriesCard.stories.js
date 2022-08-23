import React from "react";
import SeriesCard from "../components/seriesCard";
import SampleSeries from "./TVsampleData";
import { MemoryRouter } from "react-router";
import SeriesContextProvider from "../contexts/seriesContext";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavourites";

export default {
    title: "Series Details Page/SeriesCard",
    component: SeriesCard,
    decorators: [
        (Story) => <SeriesContextProvider>{Story()}</SeriesContextProvider>,
    ],
};

export const Basic = () => {
    return (
        <SeriesCard
            series={SampleSeries}
            action={(series) => <AddToFavoritesIcon series={series} />}
            taging={(series) => null}
        />
    );
};
Basic.storyName = "Default";

export const Exceptional = () => {
    const sampleNoPoster = { ...SampleSeries, poster_path: undefined };
    return (
        <SeriesCard
            series={sampleNoPoster}
            action={(series) => <AddToFavoritesIcon series={series} />}
            taging={(series) => null}
        />
    );
};
Exceptional.storyName = "exception";
