import React from "react";
import PlaylistIcon from "@material-ui/icons/PlaylistAdd";
import { Link } from "react-router-dom";

const AddToPlaylistIcon = ({ movie }) => {
  return (
    <Link to={'#'} >
      <PlaylistIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default AddToPlaylistIcon;