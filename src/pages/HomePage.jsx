import React from "react";
import "./HomePage.css"



import Header from "../components/header";
import ServiceCard from "../components/ServiceCard";

function HomePage() {
    return (<>

        <Header/>

        <main>
            <h2>¿Que servicios prestamos?</h2>
            <div class="main-conteiner" >
                <ServiceCard/>
            </div>
        </main>
    </>

    )
}

export default HomePage 