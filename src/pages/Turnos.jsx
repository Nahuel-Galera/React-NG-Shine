import React from "react";
import "./Turnos.css"

function Turnos() {
    return (

        <div className="div-conteiner-turnos" >
            <div class="div-conteiner" >
                <div class="input-conteiner">
                    <form>
                        <p class="p-title" >Nombre</p>
                        <input id="name" class="input-main" type="text" placeholder="Ej: Steve Jonson" />
                        <p class="p-title" >Vehiculo</p>
                        <input id="auto" class="input-main" type="text" placeholder="Ej: BMW E36" />
                        <p class="p-title" >Color</p>
                        <input id="name" class="input-main" type="text" placeholder="Ej: Rojo" />
                        <p class="p-title" >E-mail</p >
                        <input id="email" class="input-main" type="email" placeholder="ejemplo@gmail.com" />
                        <p class="p-title" >Telefono</p>
                        <input id="numero" class="input-main" type="number" placeholder="+54 2613845928" />
                        <p class="p-title" >Fecha</p>
                        <input class="input-main" type="date" />
                        <p class="p-title" >¿Que servicio prefieres?</p>
                        <select class="input-main" name="servicio" id="servicio" placeholder="Selecione una opción" >
                            <option value="">Lavado Clasico</option>
                            <option value="">Limpieza de interiores</option>
                            <option value="">Acondicionamiento de motor</option>
                            <option value="">Lavado completo</option>
                            <option value="">Abrillantado</option>
                            <option value="">Tratamiento Acrilico</option>
                        </select>
                        <div class="buttons" >
                            <button type="reset" class="button-reset" >Resetear</button>
                            <button class="button-enviar" >Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Turnos