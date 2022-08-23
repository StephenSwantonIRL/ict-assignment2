import React from "react";
import FilterCard from "../components/filterCard";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

export default {
  title: "Home Page/FilterCard",
  component: FilterCard,
};

export const Basic = () => {
  return <FilterCard onUserInput={action("filter input")} />;
};
Basic.storyName = "Default";
