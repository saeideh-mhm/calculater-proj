let inputt = document.querySelector("input")
console.log(inputt)

let buttonc = document.getElementById("bt-c")
buttonc.addEventListener("click", cfun)
function cfun() {
    inputt.value = ""

}

let buttonce = document.getElementById("bt-ce")
buttonce.addEventListener("click", cefun)
function cefun() {
    inputt.value = inputt.value.toString().slice( 0,-1)

}

let buttonper = document.getElementById("bt-per")
buttonper.addEventListener("click", perfun)
function perfun() {
    inputt.value += "%"

}

let buttonzero = document.getElementById("bt-0")
buttonzero.addEventListener("click", zerofun)
function zerofun() {
    inputt.value += "0"

}

let buttonone = document.getElementById("bt-1")
buttonone.addEventListener("click", onefun)
function onefun() {
    inputt.value += "1"

}
let buttontwo = document.getElementById("bt-2")
buttontwo.addEventListener("click", twofun)
function twofun() {
    inputt.value += "2"

}

let buttonthree = document.getElementById("bt-3")
buttonthree.addEventListener("click", threefun)
function threefun() {
    inputt.value += "3"

}

let buttonfour = document.getElementById("bt-4")
buttonfour.addEventListener("click", fourfun)
function fourfun() {
    inputt.value += "4"

}

let buttonfive = document.getElementById("bt-5")
buttonfive.addEventListener("click", fivefun)
function fivefun() {
    inputt.value += "5"

}

let buttonsix = document.getElementById("bt-6")
buttonsix.addEventListener("click", sixfun)
function sixfun() {
    inputt.value += "6"

}
let buttonSEVEN = document.getElementById("bt-7")
buttonSEVEN.addEventListener("click", SEVENFUN)
function SEVENFUN() {
    inputt.value += "7"
}
let buttoneight = document.getElementById("bt-8")
buttoneight.addEventListener("click", eightfun)
function eightfun() {
    inputt.value += "8"

}

let buttonnine = document.getElementById("bt-9")
buttonnine.addEventListener("click", ninefun)
function ninefun() {
    inputt.value += "9"

}

let buttondot = document.getElementById("btdot")
buttondot.addEventListener("click", dotfun)
function dotfun() {
    inputt.value += "."

}

let buttondivision = document.getElementById("bt-division")
buttondivision.addEventListener("click", divisionfun)
function divisionfun() {
    inputt.value += "/"

}


let buttonmultiply = document.getElementById("bt-mul")
buttonmultiply.addEventListener("click", multiplyfun)
function multiplyfun() {
    inputt.value += "*"
}

let buttonmines = document.getElementById("bt-mines")
buttonmines.addEventListener("click", minesfun)
function minesfun() {
    inputt.value += "-"

}

let buttonplus = document.getElementById("bt-plus")
buttonplus.addEventListener("click", plusfun)
function plusfun() {
    inputt.value += "+"

}

let buttonequal = document.getElementById("bt-equal")
buttonequal.addEventListener("click", equalfun)
function equalfun() {
    inputt.value = eval(inputt.value)

}
