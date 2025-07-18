// dichiaro la funzione per ciclare gli elementi generati dall'api
const refreshEmail = () => {
  for (i = 0; i < 10; i++) {
    axios.get(direct).then((mail) => {
      list.innerHTML += `<li class="list-group-item list-group-item-action">${mail.data.response}</li>`
    })
  }
}


// richiamo gli elementi dal DOM
const list = document.getElementById(`list`)
const button = document.getElementById(`refresh`)


// dichiaro le variabili
const direct = `https://flynn.boolean.careers/exercises/api/random/mail`


// aggiorno le mail alla pressione del bottone
button.addEventListener(`click`, () => {
  list.innerHTML = ''
  refreshEmail()
})


refreshEmail()

