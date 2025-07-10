import React from "react";
import { services } from "../hooks/useServicios";
import "./ServiceCard.css";
import { useNavigate } from "react-router-dom";


function ServiceCard() {

    const navigate = useNavigate();

    return (
    <>
            {services.map((service) => (
                <div  key={service.id} onClick={()=>navigate(`/${service.id}`)} class="card" >
                    <img class="img-card" src={service.image} alt={service.name} />
                    <h3 class="title-card">{service.name}</h3>
                    <p class="p-card">{service.description}</p>
                    <p class="price" >{service.price}</p>
                    <button class="button-info">Info</button>
                </div>
            ))
        }
    </>
    )
}


export default ServiceCard;