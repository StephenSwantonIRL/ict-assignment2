import React from "react";
import SeriesHeader from "../components/headerSeries";
import SampleSeries from "./TVsampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

export default {
    title: "Series Details Page/SeriesHeader",
    component: SeriesHeader,
};

export const Basic = () => <SeriesHeader series={SampleSeries} />;

Basic.storyName = "Default";
