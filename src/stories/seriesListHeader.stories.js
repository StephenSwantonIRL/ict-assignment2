import React from "react";
import SeriesHeader from "../components/headerMovieList";
import { MemoryRouter } from "react-router";
import SeriesContextProvider from "../contexts/seriesContext";

export default {
    title: "Series List Page/SeriesPageHeader",
    component: SeriesHeader,
    decorators: [
        (Story) => <SeriesContextProvider>{Story()}</SeriesContextProvider>,
    ],
};

export const Basic = () => <SeriesHeader title="Discover Series" />;

Basic.storyName = "Default";
