import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Radio from "@material-ui/core/Radio"
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: { height: 300 },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
        backgroundColor: "rgb(255, 255, 255)",
    },
    chipRoot: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: theme.spacing(1.5),
        margin: 0,
    },
    chipSet: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: theme.spacing(1.5),
        margin: 0,
    },
    chipLabel: {
        margin: theme.spacing(0.5),
    },
}));

export default function SortOptions(props) {
    const classes = useStyles();
    const [sortProperty, setSortProperty] = useState("title");
    const [sortType, setSortType] = useState("asc")

    const handleChange = (e) => {
        setSortProperty(e.target.value);
        props.sort(sortType, sortProperty);
    };


    return (
        <>
            <p>Sort...</p>
            <Chip label="ASC" className={classes.chipLabel} color="primary" onClick={()=> {
                setSortType("asc");
            }

            } />
            <Chip label="DESC" className={classes.chipLabel} color="primary" onClick={()=> {
                setSortType("desc");
            }
            } /><br/>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">by...</FormLabel>
                <RadioGroup
                    aria-labelledby="sort-property-selector"
                    defaultValue="title"
                    name="radio-buttons-group"
                    onChange={handleChange}
                >
                    <FormControlLabel value="title" control={<Radio />} label="Title" />
                    <FormControlLabel value="release_date" control={<Radio />} label="Release Date" />
                </RadioGroup>
                <Button
                    onClick={() => {
                        props.sort(sortType, sortProperty);
                    }}
                    color="primary"
                    variant="contained"
                >
                    SORT
                </Button>
            </FormControl>
        </>
    );
}
