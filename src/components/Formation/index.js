/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../../context/GlobalState";

import "./style.css";

function Formation(props) {
    const context = useContext(GlobalContext);

    const [formationNumber, setFormation] = useState(8);
    const [message, setMessage] = useState("");

    // called when we drag the card over the board
    const dragOver = e => {
        e.preventDefault();
    }

    // and this function called when we let go
    const drop = e => {
        e.preventDefault();

        const card_id = e.dataTransfer.getData('card_id');

        // const card = document.getElementById(card_id);

        var span = document.createElement("span");

        var textnode = document.createTextNode("LI");

        span.appendChild(textnode);

        e.target.replaceChild(span, e.target.childNodes[0])


    }

    useEffect(() => {
        context.fetchPlayers();
    });

    const handleSubmit = e => {
        e.preventDefault();
        let newTeam = {
            team_name: props.team.team_name,
            team_website: props.team.team_website,
            team_type: props.team.team_type,
            description: props.team.description,
            tags: props.team.tags
        }
        if(!newTeam.team_name && !newTeam.team_website && !newTeam.team_type ) {
            setMessage("Please fill all of the mandatory fields !!")
        }

        else {
            context.createTeam(newTeam);
            setMessage("The tseam has been created with success !!");
        }
    }


    return(
        <div className="configuration-section">
            <div className="selection-section">
                <h6>Formation</h6>
                <select className="custom-select"
                        id="inputGroupSelect01"
                         value={formationNumber}
                         onChange={(e)=>setFormation(e.target.value)}>

                    <option value="1">3 - 2 - 2 - 3</option>
                    {/* <option value="2">3 - 2 - 3 - 1</option>
                    <option value="3">3 - 4 - 3</option>
                    <option value="4">3 - 5 - 2</option>
                    <option value="5">4 - 2 - 3 - 1</option>
                    <option value="6">4 - 3 - 2</option>
                    <option value="7">4 - 4 - 2</option> */}
                    <option value="8">3 - 4 - 3</option>
                    {/* <option value="9">4 - 5 - 1</option>
                    <option value="10">5 - 4 -1</option> */}
                </select>
            </div>

            <div className={"formation-board formation-" + formationNumber}
                >

                <div className="one">
                    <div className="circle" onDragOver={dragOver} onDrop={drop}>
                        <span>+</span>
                    </div>
                </div>
                <div className="two">
                    <div className="circle" onDragOver={dragOver} onDrop={drop}>
                        <span>+</span>
                    </div>
                </div>
                <div className="three">
                    <div className="circle" onDragOver={dragOver} onDrop={drop}>
                        <span>+</span>
                    </div>
                </div>
                <div className="four">
                    <div className="circle" onDragOver={dragOver} onDrop={drop}>
                        <span>+</span>
                    </div>
                </div>
                <div className="five">
                    <div className="circle" onDragOver={dragOver} onDrop={drop}>
                        <span>+</span>
                    </div>
                </div>
                <div className="six">
                    <div className="circle" onDragOver={dragOver} onDrop={drop}>
                        <span>+</span>
                    </div>
                </div>
                <div className="seven">
                    <div className="circle" onDragOver={dragOver} onDrop={drop}>
                        <span>+</span>
                    </div>
                </div>
                <div className="eight">
                    <div className="circle" onDragOver={dragOver} onDrop={drop}>
                        <span>+</span>
                    </div>
                </div>
                <div className="nine">
                    <div className="circle" onDragOver={dragOver} onDrop={drop}>
                        <span>+</span>
                    </div>
                </div>
                <div className="ten">
                    <div className="circle" onDragOver={dragOver} onDrop={drop}>
                        <span>+</span>
                    </div>
                </div>

                <div className="goal-keeper">
                    <div className="circle" onDragOver={dragOver} onDrop={drop}>
                        <span>+</span>
                    </div>
                </div>
            </div>

            <button type="button" class="btn btn-purple" onClick={handleSubmit} >Save</button>

            <p>{message}</p>

        </div>
    )

}

export default Formation;
