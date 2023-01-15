// localStorage.setItem('name', 'sadiq')
// localStorage.clear()

// sessionStorage.setItem("name", "sadiq")
function foo(){
    var a = document.getElementById("sname").value
    var b = document.getElementById("semail").value
    var c = document.getElementById("spass").value
    localStorage.setItem('name', a)
    localStorage.setItem('email', b)
    localStorage.setItem('pass', c)
    location.href = 'login.html'
}

function foo1(){
    var c = document.getElementById("lemail").value
    var d = document.getElementById("lpass").value
    var e = localStorage.getItem("email")
    var f = localStorage.getItem("pass")
    if ( e == c  && d == f){
        alert("login")
        localStorage.setItem('code', 'secret')
        location.href = 'class2.html'
    }
    else {
        alert("Incorrect user name or password")
    }
}

function logout(){
    localStorage.setItem('code', 'logout')
}
