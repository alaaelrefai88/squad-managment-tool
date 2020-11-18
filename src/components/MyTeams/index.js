import {useEffect, useState, useContext} from "react";
import {Link} from "react-router-dom";

import { GlobalContext } from "../../context/GlobalState";
import Header from "../header";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrashAlt, faShareAlt, faPen } from '@fortawesome/free-solid-svg-icons'

import './style.css'

function MyTeams () {
    const context = useContext(GlobalContext);

    const [teams, setTeams] = useState();

    useEffect(()=>{
        setTeams(context.teams)
    },[]);

    return(
        <>
        <Header />
        <div className="card card-wrap">

            <div className="card-header">
                <h4 className='title'>My teams</h4>
                <Link to="/createTeam" className="btn btn-outline-info" >+</Link>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {teams?.map(team => (
                         <tr>
                            <th scope="row">{team.team_name}</th>
                            <td>{team.description}</td>
                            <td>
                                {/* <FontAwesomeIcon icon={faTrashAlt} className="icon" />
                                <FontAwesomeIcon icon={faShareAlt} className="icon"/>
                                <FontAwesomeIcon icon={faPen} className="icon"/> */}
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
        </>
    )

}
export default MyTeams;