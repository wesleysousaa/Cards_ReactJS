import React from "react"
import './card.css'

export default () =>
    <div className="container">
        <form id="formt">
            <input type="text" placeholder="Titulo" id="titulo"/>
            <input type="text" placeholder="Descrição" id="desc"/> 
            <input type="color" id="cor"/>
            <input type="submit" className="enviar" />
        </form>
    </div>
