

# ICT Skills 2 Assignment.

Name: Stephen Swanton
## Overview.

This project builds on the features developed in assignment 1 to extend the range of endpoints consumed by the movie client app so that end users can access information regarding:

- Popular Actors, including movies in which they appear
- TV series
- Movies similar to individual movies

The filtering functionality was extended to include release date.
Sorting functionality was also introduced to allow *ascending* and *descending* sort by *Title* and by *Release Date*

All sections feature extensive hyperlinking to allow the user to effectively navigate throughout the site.

Routing features include  a mix of static and parameterized URLs and protected URLs
A hapi-mongodb backend was created to provide user authentication for protected routes [code available in the following repository https://github.com/StephenSwantonIRL/movie-back-end] 

A *My Fantasy movies* feature was also partially implemented to permit logged in users to add create movies in the movies backend that capture:

- Title
- Genre (using list provided by TMDB)
- Release Date
- Plot
- Cast (searching the TMDB database to retrieve results, and allow users select cast members from matching actors)

The app relies on the react-query library to cache results and reduce unnecessary server queries.

– Storybook support.

## Setup requirements.

You must have Node version 16.8 or above installed to install this application. You also need to sign up for an account and API key on TMDB  (Details available here https://developers.themoviedb.org/3/getting-started/authentication)

1. Clone the project repository to your local machine using the following command
   `git clone https://github.com/StephenSwantonIRL/PlaceMarkAPI.git`
2. Open a command prompt in the project folder.
3. Run the following command `npm install `
4. Create a `.env` file in the project root folder and populate the file with the following variables.
   -- REACT_APP_TMDB_KEY=**yourTMDBapiKey**
   -- FAST_REFRESH=false
5. Run `npm run build`  to create a build version for the production environment.
6. Your app is now ready to deploy on your hosting of choice. For further information on available options visit https://create-react-app.dev/docs/deployment/


## App Design.

### Routing/Navigation.

[List the set of routes your app supports - only mention new instances if you expanded the Movies Fan app. State the view linked with each route.]

e.g.
+ /movies/:id - detailed information on a specific movie.
+ /movies/upcoming - lists movies soon to be shown in cinemas.
+ etc.
+ etc.

### Views/Pages.

[ For each view in your app, show a screenshot and caption - only new/modified ones in the case of the Movies Fan app. If necessary, use multiple screenshots to cover a view's full capability.

e.g.
>Lists movies from the Discover endpoint. Filtering on title and genre attributes is supported.

![][d1]

![][d2]

>Shows detailed information on a specific movie

![][detail]


### Component catalogue.

[ Use the Storybook UI to highlight the new components for which you developed stories.]
e.g.

![][stories]

## Caching.

[ List the TMDB server state cached by the app. Include a screenshot(s) of the react-query dev tools to validate your list.]

e.g.
+ Discover movies (pagination support)
+ Movie details
+ etc
+ etc

![][caching]

## Authentication.

[Briefly state how you implemented authentication for the app, e.g. basic, Firebase, etc. Also, list the routes that are private/protected.]

e.g.
+ /reviews/:id
+ /movies/favourites

## Server-side persistence


[ Specify the persistence
platform your app uses (e.g. TMDB lists, Firestore) and itemize the data it persists.]

## Additional features (if relevant),

[Mention any additional user features of your app that may not be obvious from the previous sections, e.g. pagination, extended filtering/sorting, searching.]

