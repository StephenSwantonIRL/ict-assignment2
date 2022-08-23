import React from "react";
import SiteHeader from "../components/siteHeader";
import { MemoryRouter } from "react-router";

export default {
  title: "App Header",
  component: SiteHeader,
};

export const Basic = () => <SiteHeader />;

Basic.storyName = "Default";
