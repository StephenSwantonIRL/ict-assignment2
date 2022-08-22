import React, {useState} from "react";
import FantasyList from "../components/fantasyList";
import {BackendAPI} from "../api/backend-api";
import {useContext} from "react";
import {AuthContext} from "../contexts/authContext";
import {useEffect} from "react";

const backend = new BackendAPI("https://movie-app-backend.glitch.me")

const FantasyListPage = (props) => {
  const [fantasyMovies, setFantasyMovies] = useState([])
  const { user } = useContext(AuthContext);

  async function getFantasy(userId){
    console.log(userId);
    const value = await backend.getFantasyMovies(userId)
    setFantasyMovies(value);
  }

  useEffect(() => {
    return getFantasy(user._id)
  }, []);

  return (
      <FantasyList fantasyMovies={fantasyMovies} />
  );
};

export default FantasyListPage;