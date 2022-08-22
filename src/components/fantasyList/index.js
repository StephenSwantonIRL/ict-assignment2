import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box"
import {makeStyles} from "@material-ui/core/styles";
import {useEffect} from "react";


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "30px",
    },

}));


export default function FantasyList({fantasyMovies}) {
    const classes = useStyles();


    return (

        <Grid container className={classes.root}>
            <Grid item container xs={12}>
                <Box component="div" className={classes.root}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            { fantasyMovies.map((m) => (<ListItem key={m._id}>
                <ListItemAvatar>
                    <Avatar>
                        <TheaterComedyIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={m.title} secondary={"Release Date:" + m.releaseDate}  />
            </ListItem>))}
        </List></Box></Grid></Grid>
    );
}