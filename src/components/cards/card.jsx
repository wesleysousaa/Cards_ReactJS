import React from "react"
import './card.css'

export default props =>
    <div className="card" id="card">
        <div className="cont" id="cont" style={{backgroundColor: props.cor}}><h1>{props.conteudo}</h1></div>
        <h2>{props.titulo}</h2>
    </div>