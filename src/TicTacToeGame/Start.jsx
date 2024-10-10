import React from "react";
import { NavLink } from "react-router-dom";

const Start = () => {
    return (
        <div>
            <h1 style={{textShadow: '0 0 px #ffff00, 0 0 3px #ffff00'}} className="text-3xl font-bold text-yellow-400 text-center">
                Tic-Tac-Toe
            </h1>
            <NavLink to="/game"><button class='glowing-btn'><span class='glowing-txt'>S<span class='faulty-letter'>T</span>ART</span></button></NavLink>
        </div>
    )
}

export default Start;