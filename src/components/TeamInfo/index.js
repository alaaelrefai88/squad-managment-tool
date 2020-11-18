import React, {useState,useEffect, useContext } from 'react';

import { GlobalContext } from "../../context/GlobalState";

import Formation from "../Formation";
import SearchPlayers from "../SearchPlayers";

import "./style.css"

function TeamInfo() {
    const context = useContext(GlobalContext);

    const [team_name, setTeamName] = useState("");
    const [team_website, setTeamWebsite] = useState("");
    const [description, setDescription] = useState("");
    const [team_type, setTeamType] = useState("");
    const [tags, setTags] = useState("");



    return(
        <div className="container">
            <h6>TEAM INFORMATION</h6>
            <div className="flex-form">
                <div className="flex-2">
                    <div className="form-group">
                        <label htmlFor="team-name">Team name</label>
                        <input className="form-control" type="text" id="team-name"
                                placeholder="insert team name"
                                value={team_name}
                                onChange={e => setTeamName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" id="description" rows="3"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                <div className="flex-2">
                    <div className="form-group">
                        <label htmlFor="team-website">Team website</label>
                        <input className="form-control" type="text"
                        id="team-website" placeholder="http://myteam.com"
                        value={team_website}
                        onChange={e => setTeamWebsite(e.target.value)} />
                    </div>

                    <label>Team type</label>
                    <div className="radios-btns">
                        <div className="form-check">
                            <input className="form-check-input" type="radio"
                            id="fantasy" name="team-type" checked
                            value={team_type}
                            onChange={e => setTeamType(e.target.value)} />
                            <label className="form-check-label" htmlFor="fantasy">
                                Fantasy
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio"
                            name="team-type" id="real"
                            value={team_type}
                            onChange={e => setTeamType(e.target.value)}  />
                            <label className="form-check-label" htmlFor="real">
                                Real
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="tags">Tags</label>
                        <textarea className="form-control" id="tags" rows="3"
                        value={tags}
                        onChange={e => setTags(e.target.value)} ></textarea>
                    </div>
                </div>
            </div>

            <h6>CONFIGURE SQUAD</h6>
            <div className="wrapper">
                <Formation team={{team_name, team_website, team_type, description, tags }} />
                <SearchPlayers />
            </div>
        </div>

    )
}

export default TeamInfo;