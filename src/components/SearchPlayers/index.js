import {useState, useEffect} from "react";
import axios from "axios";

import "./style.css";

function SearchPlayers() {
    const [players, setPlayers] = useState();
    const [query, setQuery] = useState();

    useEffect(() => {
        fetchPlayers();
    },[]);

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
            setPlayers(response.data.api.players);

        } catch(error) {
            console.log("error fetching players:", error)
        }
    }

   const filterSearch = () => {
       let search = query !== "" && query ?.toLowerCase();
        return players?.filter((player)=> player.player_name.toLowerCase().startsWith(search))
   }

   const dragStart = e => {
       const target = e.target;
       e.dataTransfer.setData('card_id', target.id);

       setTimeout(()=> {
           target.style.cssText = "pointer-events: none;opacity: 0.4;";
       },0)
   }

   const dragOver = e => {
       e.stopPropagation();
   }

    return(
        <div className="search-section">
             <div className="form-group">
                <label htmlFor="player-name">Search Players</label>
                <input type="text" className="form-control" id="player-name" onChange={(e)=> setQuery(e.target.value)} placeholder="Enter name of a player ..." />
            </div>

            <div style={{overflowY:"scroll", height:443}}>
            {filterSearch()?.map(filtered=> (
                <div className="card"
                    key={filtered.player_id}
                    id={filtered.player_id}
                    draggable="true"
                    onDragStart={dragStart}
                    onDragOver={dragOver}>

                    <div className="card-row">
                        <p >Name: <span>{filtered.player_name}</span></p>
                        <p>Age: <span>{filtered.age}</span></p>
                    </div>
                    <p>Nationality:<span>{filtered.nationality}</span></p>
                </div>

            ))}
            </div>
        </div>
    )
}

export default SearchPlayers;