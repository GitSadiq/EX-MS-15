// function foo(){
//     var para = "Muhammad Sadiq Khan"
//     document.getElementById('abc').innerHTML = para
// }

// function foo(){
//     var a = document.getElementById('abc')
//     a.className += " ccc"
// }

     function swapPic(a, newPic) {
     document.getElementById(a).src = newPic;
     }

// var a;
// function extra(){
//     a = " Lorem, ipsum dolor sit amet consectetur."
//     document.getElementById('extraPara').innerText = a
//     document.getElementById('extra').innerHTML = ""
//     document.getElementById('extra2').innerHTML = "Show less"

// }
// function extra2(){
//     a = "Lorem"
//     document.getElementById("extraPara").innerText = a
//     document.getElementById('extra').innerHTML = "Show more"
//     document.getElementById('extra2').innerHTML = ""
// }

function foo(){
    var a = document.getElementById("abc")
    var b = a.getElementsByTagName('p')
    // console.log(a)
    // a[0].style.color = "red"
    for(var i = 0; i<b.length; i++){
        b[i].style.color = 'red'
        b[i].style.backgroundColor = 'aqua'
    }

    var a = document.getElementById("abc")
    a.style.color = 'red'
}