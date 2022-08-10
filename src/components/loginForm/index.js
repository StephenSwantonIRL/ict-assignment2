import React from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Header from "../headerMovieList";
import {useContext, useEffect} from "react";
import {AuthContext} from "../../contexts/authContext"
import {BackendAPI} from "../../api/backend-api";

const backend = new BackendAPI("https://movie-app-backend.glitch.me");

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    form: {
        width: "50%",
        "& > * ": {
            marginTop: theme.spacing(2),
        },
    },
    textField: {
        width: "40ch",
    },
    submit: {
        marginRight: theme.spacing(2),
    },
    snack: {
        width: "50%",
        "& > * ": {
            width: "100%",
        },
    },
}));

const LoginForm = (props) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const intent = props.intent;
    console.log(props);
    const {register, handleSubmit, formState: {errors}, getValues} = useForm();
    let {user, storeUser, getUser} = useContext(AuthContext);
    const onSubmit = async (data) => {
        const userCredentials = {
            email: data.email,
            password: data.password,
        }
        await backend.authenticate(userCredentials)
            .then((data) => {
                storeUser(data.data)
            })
            .then((data) => navigate("/"))
    }
    console.log(errors);

    return (

        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Header title={"SignUp"}/>
            </Grid>
            <Grid item container xs={12} spacing={5}>
                <Box component="div" className={classes.root}>
                    <Typography component="h2" variant="h3">
                        Log In
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Email Address </label><input type="text" name="email"
                                                            placeholder="Email" {...register("email", {})} /><br/>
                        <label>Password </label><input type="password" name="password"
                                                       placeholder="Password" {...register("password", {})} /><br/>
                        <Box className={classes.buttons}>
                            <Button className={classes.submit} type="submit"> Log In </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>


    );
}
export default LoginForm;