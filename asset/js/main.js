
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





// recuper elementi del dom nel quale inserire il loop
const Container_box_el = document.querySelector('.container_main')


//-------------------- creare un bottone per generare una griglia

//prendiamo il form del doom
const formEl = document.querySelector('form')

// assegnamo al bottone una funzone
formEl.addEventListener('submit', function(e) {
    e.preventDefault()

// prendiamo il valore scelto dal select
const typeDifficultvalue = e.target.change_difficolt.value
console.log (typeDifficultvalue)
} )




// -------------------------generare un loop per la creazione di box
// dichiaro una costante x numero di box
const numberBox = 100
// makup del codice html
for (let i = 1; i <= numberBox; i++) {
    console.log([i])
// creiamo un markup per i box
    const Box_Markup = `<div class="box box_facile justify-content-center d-flex  align-items-center"><span>${[i]}</span></div>`
    console.log(Box_Markup)
// scriviamo il markup nell'dom
    Container_box_el.insertAdjacentHTML('beforeend', Box_Markup)
// selezioniamo il singolo box
}

// andiaom a selezionare le cielle da colorare

// constante per selezionare tutti i box
const allBox = document.querySelectorAll('.box')
console.log(allBox)

for (let k = 0; k < allBox.length; k++) {
    const this_box = allBox[k]
    this_box.addEventListener('click', function() {
        this_box.classList.toggle('bg-lightblue')
    })
}




