import App from './components/app'
import Form from './components/forms/addCard'

import React from 'react'
import ReactDOM from "react-dom"

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

const add = document.getElementById('add')
const deletor = document.getElementById("del")

add.addEventListener('click', function(e){
    ReactDOM.render(
        <Form></Form>,
        document.getElementById('root')
    )
    document.getElementById('formt').addEventListener('submit', () =>{
        gerar()
    })
    
})

deletor.addEventListener("click", function(e){
    localStorage.clear()
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    )
})

function gerar(){
    let cards = JSON.parse(localStorage.getItem('cards')) || []
    const titulo = document.getElementById('titulo')
    const desc = document.getElementById('desc')
    const cor = document.getElementById('cor')

    if(ver(titulo.value) || ver(desc.value)){
        alert("Campos vazios")
    }else{
        let card_u = new Object()

        card_u.id = Math.floor(Date.now() * Math.random()).toString(36)
        card_u.titulo = titulo.value
        card_u.desc = desc.value
        card_u.cor = cor.value
        cards.push(card_u)

        localStorage.setItem('cards', JSON.stringify(cards));
    }
}

function ver(str){
    var j = Number(0)
    while(j < String(str).length){
        if(String(str).charAt(j) !== " "){
            return false
        }
        j+=1
    }
    return true
}
