//document.getElementById("count-el").innerText = 5

//let count = 455 + 5

//let myAge = 15

//console.log (count)
//console.log (myAge)

let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    console.log(count)
}

   