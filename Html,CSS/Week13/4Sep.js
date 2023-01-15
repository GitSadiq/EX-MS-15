// function calc(e){
//     document.getElementById('abc').value += e
// }

// function eq(){
//     var a = document.getElementById('abc')
//     a.value = eval(a.value) 
// }

// function clearall(){
//     document.getElementById('abc').value = ''
// }

// var interval;
// interval = setInterval(function(){
//     console.log('hello world')
// },1000)
// clearInterval(interval)


// setTimeout(function(){
//     console.log('ek bar chalo')
// },5000)

// var a = 0
// setInterval(function(){
//     a++
//     console.log(a)
// },1000)

// function timer(){
//     console.log('kuch bhi')
// }
// setInterval(timer,1000)


// var a = 0
// var interval;
// interval = setInterval(function () {
//     a++
//     console.log(a)
// }, 1000)

// setTimeout(function(){
//     clearInterval(interval)
// },10000)


var min = 0
var sec = 0
var msec = 0
var a = document.getElementById('minutes')
var b = document.getElementById('seconds')
var c = document.getElementById('milisec')
var interval;
function strt(){
    
  interval =  setInterval(function(){
        msec++
        c.innerHTML = msec
        if(msec >= 100){
            sec++
            b.innerHTML = sec
            msec = 0
        }
        else if(sec >=5){
            min++
            a.innerHTML = min
            sec = 0
        }
    },10)
    
    document.getElementById('pehchaan').disabled = true
}

function staap(){
    clearInterval(interval)
    document.getElementById('pehchaan').disabled = false

}


function clearall(){
    min = 0
    sec = 0
    msec = 0
    a.innerHTML = min
    b.innerHTML = sec
    c.innerHTML = msec
}


















