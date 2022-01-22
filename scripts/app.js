const stein = document.querySelectorAll(".container-img")[0]
const papier = document.querySelectorAll(".container-img")[1]
const schere = document.querySelectorAll(".container-img")[2]
var computersrc = document.querySelector(".computer-zeichen-img")
var zahl1 = document.querySelector(".zahl-score1")
var zahl2 = document.querySelector(".zahl-score2")

zahl1.innerHTML = 0
zahl2.innerHTML = 0

stein.addEventListener("click",()=>{
    var zeichen = stein
    var player = "stein"
    console.log(player)
    var random = Math.random();
    computer = zeichencomputer(random)
    var ergebnis = auswertung(player, computer)
    changefarbe(zeichen, ergebnis)
})
papier.addEventListener("click",()=>{
    var zeichen = papier
    var player = "papier"
    console.log(player)
    var random = Math.random();  
    computer = zeichencomputer(random)
    var ergebnis = auswertung(player, computer)
    changefarbe(zeichen, ergebnis)
})
schere.addEventListener("click",()=>{
    var zeichen = schere
    var player = "schere"
    console.log(player)
    var random = Math.random();
    computer = zeichencomputer(random)
    var ergebnis = auswertung(player, computer)
    changefarbe(zeichen, ergebnis)
})

function zeichencomputer(random) {
   if (random < 0.33) {
      computersrc.src = "img/hand-rock-regular.svg"
      var computer = "stein"
      console.log("stein")
      return computer
   } else if (random > 0.66){
    computersrc.src = "img/hand-paper-regular.svg"
    var computer = "papier"
    console.log("papier")
    return computer
   }else{
    computersrc.src = "img/hand-scissors-regular.svg"
    var computer = "schere" 
    console.log("schere")
    return computer 
    
   }
}

function auswertung(player, computer) {
    if (player == computer) {
        console.log("Unentschieden!")
        var ergebnis = "unentschieden"
        return ergebnis
    }else if((player == "stein" && computer == "papier") || (player == "papier" && computer == "schere") || (player == "schere" && computer == "stein")){
        console.log("Verloren!")
        var ergebnis = "verloren"
        zahl2.innerHTML++
        return ergebnis
    }else{
        console.log("Gewonnen!")
        var ergebnis = "gewonnen"
        zahl1.innerHTML++
        return ergebnis
    }
    
}

function changefarbe(zeichen, ergebnis) {
    var zeit = 400
    var zeit2 = zeit +300
    if (ergebnis == "unentschieden") {
        zeichen.classList.add("unentschieden")
        
        setTimeout(()=> {
            zeichen.classList.add("transparent")
        }, zeit)
        setTimeout(()=> {
            zeichen.classList.remove("unentschieden") 
            zeichen.classList.remove("transparent")
        }, zeit2)
    }else if (ergebnis == "verloren"){
        zeichen.classList.add("verloren")
        
        setTimeout(()=> {
            zeichen.classList.add("transparent")
        }, zeit)
        setTimeout(()=> {
            zeichen.classList.remove("verloren") 
            zeichen.classList.remove("transparent")
        }, zeit2)
    }else{
        zeichen.classList.add("gewonnen")
        
        setTimeout(()=> {
            zeichen.classList.add("transparent")
        }, zeit)
        setTimeout(()=> {
            zeichen.classList.remove("gewonnen") 
            zeichen.classList.remove("transparent")
        }, zeit2)
        
    }
}