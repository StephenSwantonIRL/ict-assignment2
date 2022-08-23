import React from "react";
import { action } from "@storybook/addon-actions";
import FantasyMovieForm from "../components/fantasyMovieForm";
import AuthContextProvider from "../contexts/authContext";

export default {
    title: "Fantasy Movies/FantasyMovieForm",
    component: FantasyMovieForm,
    decorators: [
        (Story) => <AuthContextProvider>{Story()}</AuthContextProvider>,
    ],
};

export const Basic = () => {
    return (
        <FantasyMovieForm/>
    );
};
Basic.storyName = "Default";
