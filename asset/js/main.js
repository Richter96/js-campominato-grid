
/* Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; */

// creare un bottone per generare una griglia



// generare un loop di box


// dichiaro una costante x numero di box

// recuper elementi del dom nel quale inserire il loop
const Container_box_el = document.querySelector('.container_main')

const numberBox = 40


// makup del codice html
for (let i = 0; i < numberBox; i++) {
    console.log([i])
// creiamo un markup per i box
    const Box_Markup = `<div class="box"><span>${[i]}</span></div>`
    console.log(Box_Markup)
// scriviamo il markup nell'dom
    Container_box_el.insertAdjacentHTML('beforeend', Box_Markup)
}



