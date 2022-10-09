// let inp = document.getElementById('inp')
// let htag = document.getElementsByTagName('h2')

// let changeFn = function(){
//     // alert()
//     htag[0].innerHTML = inp.value.toUpperCase()
// }
// inp.addEventListener('keyup',changeFn)
let see_btn = document.getElementById('see_btn')
let input_f = document.getElementById('msg_btn')
let msg_box = document.getElementById('msg_box')
let clic_share = document.getElementById('click_share')

function getCurrentTime(date) {
    let d_dt = new Date(date)
    let c_dt = new Date()
    let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    let hours =  60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    let mins =   60 * 1000; // hours*[minutes*seconds*milliseconds
    let diffDays = Math.floor(Math.abs((d_dt.getTime() - c_dt.getTime()) / (oneDay)));
    let diffHour = Math.floor(Math.abs((d_dt.getTime() - c_dt.getTime()) / (hours)))-(diffDays*24);
    let diffMin = Math.floor(Math.abs((d_dt.getTime() - c_dt.getTime()) / (mins)))-(diffDays*24*60)-(diffHour*60);
    let diffSec = Math.floor(Math.abs((d_dt.getTime() - c_dt.getTime()) / (1000)))-(diffDays*24*60*60)-(diffHour*60*60)-(diffMin*60);
    return `${diffDays}  Din  ${diffHour}  ghante ${diffMin} minutee  ${diffSec} sec`
}
var timer = null
let msgFunction = function(){
    let name = input_f.value
   if(timer){
    clearInterval(timer)
   }
   timer = setInterval(function(){
        msg_box.innerHTML = `Hi ${name} appko diwali ki  ${getCurrentTime("10/24/2022")} phele bdhai`

    },1)
}
see_btn.addEventListener('click',msgFunction)
clic_share.addEventListener('click',function(){
    let link  = `http://127.0.0.1:5500/index.html?c=${input_f.value}`

    window.location.href = `whatsapp://send?text=${link}`
})

var url_string = window.location.href
var url = new URL(url_string);
var name = url.searchParams.get("c");
if( name!='null'){

    if(timer){
        clearInterval(timer)
       }
       timer = setInterval(function(){
            msg_box.innerHTML = `Hi ${name} appko diwali ki  ${getCurrentTime("10/24/2022")} phele bdhai`
    
        },1)
}
