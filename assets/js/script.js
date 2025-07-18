// richiamo gli elementi dal DOM
const list = document.getElementById(`list`)


// dichiaro le variabili
const direct = `https://flynn.boolean.careers/exercises/api/random/mail`


// creo un ciclo for con al suo interno l'api
for (i = 0; i < 10; i++) {
  axios.get(direct).then((mail) => {
    list.innerHTML += `<li class="list-group-item list-group-item-action">${mail.data.response}</li>`
  })
}