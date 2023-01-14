// var interval;

// interval = setInterval(function(){
//     console.log('Hello world')
// },1000)

// function timer(){
//     console.log('kuch bhi')
// }

// setInterval(timer, 1000)

// clearInterval(interval)


setTimeout(function(){
    console.log("ek  bar ")
},5000)


// var a = 0;
// setInterval(function(){
//     a++
//     console.log(a)
// },1000)


// var a =0;
// var b = setInterval(function(){
//     a++
//     console.log(a)
// }, 1000)


// setTimeout(function(){
//     clearInterval(b)
// },10000)


var d;
var a;
var b;
var c;

function start(){
    var min = 0
    var sec = 0
    var msec = 0
    a = document.getElementById('mins')
    b = document.getElementById('secs')
    c = document.getElementById('msecs')

    
 d = setInterval(function(){
        msec++
        c.innerHTML = msec
        if (msec >= 100){
            sec++
            b.innerHTML = sec
            msec = 0;
        }
        else if (sec >=60){
            min++
            a.innerHTML = min
            sec  = 0;
        }
    },10)

    document.getElementById("abc").style.display ="none"
}


function stop(){

    clearInterval(d)
    document.getElementById("abc").style.display ="inline"

}

function clearall(){
    clearInterval(d)
    min = 0
    sec = 0
    msec = 0
    a.innerHTML = min
    b.innerHTML = sec
    c.innerHTML = msec
}


var ab = new Date()
ab.setHours(24)
// if ( ab >12){
//     ab = ab -12
// }

console.log(ab)