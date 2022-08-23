import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

addDecorator(story => <QueryClientProvider client={queryClient}> {story()} </QueryClientProvider>);
addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}