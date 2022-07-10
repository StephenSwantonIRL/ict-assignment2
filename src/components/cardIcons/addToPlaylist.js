import React , { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistIcon from "@material-ui/icons/PlaylistAdd";

const AddToPlaylistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchList = (e) => {
    e.preventDefault();
    context.addToWatchList(movie);
  };


  return (
    <IconButton aria-label="add to watch list" onClick={handleAddToWatchList}>
      <PlaylistIcon color="primary" fontSize="large" />
    </IconButton>

  );
};

export default AddToPlaylistIcon;