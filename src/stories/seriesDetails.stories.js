import React from "react";
import SeriesDetails from "../components/seriesDetails";
import SampleSeries from "./TVsampleData";
import { MemoryRouter } from "react-router";
import SeriesContextProvider from "../contexts/seriesContext";

export default {
    title: "Series Details Page/SeriesDetails",
    component: SeriesDetails,
    decorators: [
        (Story) => <SeriesContextProvider>{Story()}</SeriesContextProvider>,
    ],
};

export const Basic = () => <SeriesDetails series={SampleSeries} />;

Basic.storyName = "Default";

