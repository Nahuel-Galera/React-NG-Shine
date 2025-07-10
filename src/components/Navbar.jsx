import React from "react";
import "./Navbar.css"
import navPick from "../assets/img/NG_Shine_56x56.png"
import { useNavigate,Link } from "react-router-dom"



function Navbar() {

    const navigate = useNavigate();


    return(    <nav class="nav">
        <img class="icon-img" onClick={()=>navigate("/")} src={navPick}alt="" srcset=""/>
        <ul>
            <a class="nav__items" onClick={()=>navigate("/")} >Home</a>
            <a class="nav__items" onClick={()=>navigate("/cliente")} >Clientes</a>
            <a class="nav__items" onClick={()=>navigate("/turnos")} >Turnos</a>
        </ul>
    </nav>)
}

export default Navbar;