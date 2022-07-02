import React from "react"
import Card from "./cards/card"
import Add from "./cards/card_add"
import Deletor from "./cards/card_deletor"
import '../index.css'

export default () =>{
    function getCards(){
        const cards = JSON.parse(localStorage.getItem('cards')) || []
        console.log(cards)
        return cards.map(card => {
            return <Card key={card.id} conteudo={
                card.desc.length > 100 ? card.desc.substring(0,100) + "..." : card.desc
            } titulo={
                card.titulo.length > 10 ? card.titulo.substring(0,7) + "..." : card.titulo
            } cor={card.cor}/>
        })
    }
    return (
    <>
        {getCards()}
        <Add></Add>
        <Deletor></Deletor>
    </>
    )
}
