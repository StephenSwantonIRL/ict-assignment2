import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext"
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuButton from "../menuButton";
import {useEffect} from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  appbar: {
    // background: 'none',
  },
  inactiveLink: {
    color: 'white',
    padding : theme.spacing(1),
    fontSize: '1.5rem'
  },
  activeLink: {
    color: 'black',
    padding : theme.spacing(1),
    fontSize: '1.5rem',
    background: "#bfbfbf"
  }
}));

const SiteHeader = () => {
  const classes = useStyles();
  const context =  useContext(AuthContext)
  let user
  if(!context?.user){
    user = { firstName: "" }
  } else {
    user = context.user;
  }
  const siteMenu = [
    { toplevel: "TV",  links: [{url: "/tv", label:"Explore TV"}]},
    { toplevel: "Movies",  links: [
        { url: "/movies", label:"Out Now"},
        { url: "/movies/upcoming", label: "Upcoming" },
        { url: "/movies/mustwatch", label: "Must Watch"},
      ]},
    { toplevel: "Actors",  links: [{url: "/actors", label:"Popular"}]},
    { toplevel: "My Lists",  links: [
        { url: "/lists", label:"List 1"},
        { url: "/movies/favourites", label: "Favourites",  },
      ]}
      ]

  return ( 
    <>
      <AppBar className={classes.appbar}
      position="fixed" elevation={0} color='primary'> 
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            TMDB Client {user.firstName}
          </Typography>
          <Typography variant="h6" className={classes.title}>
            All you ever wanted to know about Movies, TV and the people who make them!
          </Typography>
              {siteMenu.map((option) => (
                  <MenuButton key={option.toplevel} toplevel={option.toplevel} links={option.links}/>
              ))}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default SiteHeader;