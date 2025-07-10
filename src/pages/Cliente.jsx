import React from "react";
import "./Cliente.css"
import img2 from "../assets/img/Clientes/img2.jpg"
import img3 from "../assets/img/Clientes/img3.jpg"
import img6 from "../assets/img/Clientes/img6.jpg"
import img7 from "../assets/img/Clientes/img7.jpg"
import img8 from "../assets/img/Clientes/img8.jpg"
import img9 from "../assets/img/Clientes/img9.jpg"
import img11 from "../assets/img/Clientes/img11.jpg"
import img12 from "../assets/img/Clientes/img12.jpg"
import img13 from "../assets/img/Clientes/img13.jpg"
import img14 from "../assets/img/Clientes/img14.jpeg"
import img15 from "../assets/img/Clientes/img15.jpeg"
import img17 from "../assets/img/Clientes/img17.jpeg"
import img18 from "../assets/img/Clientes/img18.jpeg"
import img19 from "../assets/img/Clientes/img19.jpg"
import img20 from "../assets/img/Clientes/img20.jpg"
import img21 from "../assets/img/Clientes/img21.jpg"
import img22 from "../assets/img/Clientes/img22.jpg"
import img23 from "../assets/img/Clientes/img23.jpg"

const imgList = [img2, img3, img15, img6, img7, img8, img19, img11, img12, img13, img14, img17, img18, img23, img9, img20, img21, img22]


function Cliente() {

    return (
        <div className="galery-container">
            <div className="galery-content">
                {imgList.map((imge, index) =>
                    <div className="galery-item" >
                        <img className="img-galery" key={index} src={imge} alt={`Galery ${index}`} />
                    </div>
                )}
            </div>
        </div>
    )

}

export default Cliente