let inp = document.getElementById('inp')
let htag = document.getElementsByTagName('h2')

let changeFn = function(){
    // alert()
// alert( inp.value.toUpperCase())
    htag[0].innerHTML = inp.value.toUpperCase()
}
inp.addEventListener('keyup',changeFn)
