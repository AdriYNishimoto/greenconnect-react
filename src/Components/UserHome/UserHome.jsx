import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


import './UserHome.css'

const UserHome = () => {
    return (
        <div class="user dark">
            <FontAwesomeIcon icon={faUser} className="user-icon"/>
            <div class="info ">
                    <div class="info1">
                        <label>Usuario</label>
                        <label class="nivel">NIVEL 10</label>
                    </div>
                    <div class="info2">
                        <label>Experiência Sustentavel</label>
                        <label class="points">21100/44100</label>
                        <progress value="70" max="100"></progress> 
                    </div>
                </div>
        </div>
    );
}

export default UserHome;