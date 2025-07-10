import React from "react";
import headerPick from "../assets/img/NG_Shine_900x400.png"
import "./Header.css"

function Header() {
    return (
        <header>
            <div class="header-over">
                <div class="conteiner-head">
                    <img class="img-header" src={headerPick} alt="NG SHINE" srcset=""/>
                        <p class="header-p">Limpieza vehicular, pasión por el detalle</p>
                </div>
            </div>
        </header>
    )
}

export default Header