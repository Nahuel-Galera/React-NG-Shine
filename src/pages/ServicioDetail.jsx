import React from "react";
import { useParams } from "react-router-dom";
import { services } from "../hooks/useServicios";
import './ServicioDetail.css'

function ServiceDetail() {

    const { id } = useParams();

    const servicio = services.find((s) => s.id === id)

    if (!servicio) {
        return (
            <p>Servicio no encontrado</p>
        )
    }

    return (
        <>
            <div className="service-detail-main">
                <div className="service-detail-container">
                    <img className="detail-img" src={servicio.image} alt={servicio.name} />
                    <div className="detail-element" >
                        <h2 className="detail-tilte">{servicio.name}</h2>
                        <p className="description" >{servicio.longDescription}</p>
                        <p className="detail-price" >{servicio.price} $</p>
                        <button className="button-turno" >Reserva tu turno !</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceDetail