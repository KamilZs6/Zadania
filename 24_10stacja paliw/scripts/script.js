var inRodzaj = document.getElementById('rodzaj')
var inIle = document.getElementById('ile')
var out = document.getElementById('out')
function licz(){
    var rodzaj = inRodzaj.value
    var ilosc = inIle.value
    var wynik = 0
    if (rodzaj == 1){
        wynik = ilosc * 4
    } else if (rodzaj == 2){
        wynik = ilosc * 3.5
    }
    out.innerHTML = `kosz paliwa: ${wynik} zł`
}