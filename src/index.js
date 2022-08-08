import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import AuthContextProvider from "./contexts/authContext";
import MoviesContextProvider from "./contexts/moviesContext";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import UpcomingMoviesPage from './pages/upcomingMoviesPage'
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; 
import MovieReviewPage from "./pages/movieReviewPage";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import MustWatchMoviesPage from "./pages/mustWatchListPage";
import SiteHeader from './components/siteHeader';
import SeriesPage from "./pages/seriesPage";
import SeriesDetailsPage from "./pages/seriesDetailsPage";
import ActorPage from "./pages/actorPage";
import ActorDetailsPage from "./pages/actorDetailsPage";
import SeriesContextProvider from "./contexts/seriesContext";
import CreateUserForm from "./components/createUserForm";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthContextProvider>
      <SiteHeader />
        <MoviesContextProvider>
          <SeriesContextProvider>
            <Routes>
              <Route path="/signup" element={<CreateUserForm/>} />
              <Route path="/tv" element={<SeriesPage/>} />
              <Route path="/tv/:id" element={<SeriesDetailsPage/>} />
              <Route path="/actors" element={<ActorPage/>} />
              <Route path="/actors/:id" element={<ActorDetailsPage/>} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage/>} />
              <Route path="/movies/mustwatch" element={<MustWatchMoviesPage/>} />
              <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
              <Route path="/reviews/:id" element={<MovieReviewPage/>} />
              <Route path="/movies/favourites" element={<FavouriteMoviesPage/>}
              />
              <Route path="/movies/:id" element={<MoviePage/>} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </SeriesContextProvider>
        </MoviesContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));