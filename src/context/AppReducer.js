import { players } from "./players";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
        case "SET_PLAYERS":
            return {
                ...state,
                players:  players || action.payload
            };
        case "SET_TEAM":
            return {
                ...state,
                teams: state.teams.push(action.payload)
            };
        default:
            return state;
    }
}
