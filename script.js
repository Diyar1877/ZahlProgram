const MinusBtn = document.getElementById("MinusBtn");
const PlusBtn = document.getElementById("PlusBtn");
const ZuruckBtn = document.getElementById("ZuruckBtn");
const ZahlLabel = document.getElementById("ZahlLabel");
let zahl = 0;

PlusBtn.onclick = function(){
    zahl++;
    ZahlLabel.textContent = zahl;
}

MinusBtn.onclick = function(){
    zahl--;
    ZahlLabel.textContent = zahl;
}

ZuruckBtn.onclick = function(){
    zahl = 0;
    ZahlLabel.textContent = zahl;
}