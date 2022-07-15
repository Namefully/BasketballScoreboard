let homeEl = document.getElementById("homenum")
let guestEl = document.getElementById("guest")
let count = 0
let count2 = 0
function add1a(){
 count += 1
 homeEl.textContent = count
}
function add2a(){
 count += 2
 homeEl.textContent = count
}
function add3a(){
 count += 3
 homeEl.textContent = count
}
function add1b(){
 count2 += 1
 guestEl.textContent = count2
}
function add2b(){
 count2 += 2
 guestEl.textContent = count2
}
function add3b(){
 count2 += 3
 guestEl.textContent = count2
}
function reset(){
    count = 0
    count2 = 0
    homeEl.textContent = 0
    guestEl.textContent = 0
}
