import React from "react";

import AuthContextProvider from "../contexts/authContext";
import { action } from "@storybook/addon-actions";
import LoginForm from "../components/loginForm";

export default {
    title: "Authentication/LoginForm",
    component: LoginForm,
    decorators: [
        (Story) => <AuthContextProvider>{Story()}</AuthContextProvider>,
    ],
};

export const Basic = () => {
    return (
        <LoginForm/>
    );
};
Basic.storyName = "Default";