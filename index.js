//document.getElementById("count-el").innerText = 5

//let count = 455 + 5

//let myAge = 15

//console.log (count)
//console.log (myAge)

let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")




console.log(saveEl)

let count = 0

function increment() {
    count += 1
   countEl.innerText = count
}

function save() {

   let countStr = count + " - "

    saveEl.innerText += countStr

    console.log(count)
}

   