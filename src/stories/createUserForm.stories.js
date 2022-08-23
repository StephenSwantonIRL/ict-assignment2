import React from "react";
import AuthContextProvider from "../contexts/authContext";
import { action } from "@storybook/addon-actions";
import CreateUserForm from "../components/createUserForm";

export default {
    title: "Authentication/CreateUser",
    component: CreateUserForm,
    decorators: [
        (Story) => <AuthContextProvider>{Story()}</AuthContextProvider>,
    ],
};

export const Basic = () => {
    return (
        <CreateUserForm/>
    );
};
Basic.storyName = "Default";