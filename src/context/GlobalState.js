import React, { createContext, useReducer } from "react";
import axios from "axios";

import AppReducer from "./AppReducer";

const initialState = {
   players:[],
   teams: [
    {team_name: "Milan", description: "Milan Squad"},
    {team_name: "Real Madrid", description: "Real Madrid Squad"},
    {team_name: "Liverpool", description: "Liverpool Squad"},
    {team_name: "Barcelona", description: "Barcelona Squad"},
    {team_name: "Lazio", description: "Lazio Squad"},
    {team_name: "Bayern Munich", description: "Bayern Munich Squad"}
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const fetchPlayers = async () => {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v2/players/squad/85/2018-2019',
            headers: {
                "x-rapidapi-key": "c5a4421a3fmshc0d2ee99c120afep1b6c18jsn5ba48791786e",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            }
        };

        try {
            const response = await axios.request(options);
            const data = response.data.api.players;
            dispatch({ type: "SET_PLAYERS", payload: data});

        } catch(error) {
            console.log("error fetching players:", error)
        }
    }

    const fetchTeams = () => {

    }

    const createTeam = async team => {

        const newTeam = {
            team_name: team.team_name,
            team_website: team.team_website,
            team_type: team.team_type,
            description: team.description,
            tags: team.tags,
            formation: team.formation
        }
        dispatch({ type: "SET_TEAM", payload: newTeam});
    }



    return (
        <GlobalContext.Provider value={{
            players:state.players,
            teams: state.teams,
            fetchPlayers,
            fetchTeams,
            createTeam,

        }}>
            {children}
        </GlobalContext.Provider>
    )
}
