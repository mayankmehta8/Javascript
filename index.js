let count=0
let counter= document.getElementById('count-el')
let sav= document.getElementById('saver')
function increment() {
    counter.textContent= ++count
}

function save() {
    console.log(count)
    sav.textContent += count+" - "
    counter.textContent=0
    count=0
}
