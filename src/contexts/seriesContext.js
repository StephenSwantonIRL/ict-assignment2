import React, { useState } from "react";

export const SeriesContext = React.createContext(null);

const SeriesContextProvider = (props) => {
    const [favourites, setFavourites] = useState([]);
    const [watchList, setWatchList] = useState([]);
    const [ myReviews, setMyReviews] = useState( {} ) 
  
  const addToFavourites = (series) => {
    if (!favourites.includes(series.id)) {
      let newFavourites = [...favourites, series.id];
      setFavourites(newFavourites);
    }
  };

  const addToWatchList = (series) => {
    if (!watchList.includes(series.id)) {
      let newWatchList = [...watchList, series.id];
      setWatchList(newWatchList);
    }
  };

  const removeFromFavourites = (series) => {
    setFavourites(favourites.filter((sId) => sId !== series.id));
  };

  const addReview = (series, review) => {
    setMyReviews( {...myReviews, [series.id]: review } )
  };

  return (
    <SeriesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        addToWatchList,
        watchList,
      }}
    >
      {props.children}
    </SeriesContext.Provider>
  );
};

export default SeriesContextProvider;