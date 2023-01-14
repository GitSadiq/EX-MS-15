// localStorage.setItem('name', 'sadiq')
// localStorage.clear()

// sessionStorage.setItem("name", "sadiq")
var allUsers = []
var users = localStorage.getItem('users')
if( users !== null){
    allUsers = JSON.parse(users)
}
function signup(){
    var name = document.getElementById("sname")
    var email = document.getElementById("semail")
    var pass = document.getElementById("spass")
    var user = {
        name: name.value,
        email: email.value,
        pass: pass.value
    }
    allUsers.push(user)
    // localStorage.setItem('users', obj)
    // localStorage.setItem('users', JSON.stringify(obj))
    localStorage.setItem('users', JSON.stringify(allUsers))
}

// document.write("<br>"+ r[2].pass)
// document.write(r)

function login(){
    var email = document.getElementById("lemail")
    var password = document.getElementById("lpass")
    // var filterUser = allUsers.filter(data=> data.email === email.value && data.pass === password.value);    
    // if(filterUser.length){
    //     alert("user login succesful")
    // }else{
    //     alert("email/password incorrect")
    // }


    var filterUser = allUsers.filter(function(data){
       return data.email === email.value && data.pass === password.value
    })
    if(filterUser.length){
        alert("user login succesful")
    }else{
        alert("email/password incorrect")
    }


    // var e = localStorage.getItem("email")
    // var f = localStorage.getItem("pass")
    // if ( e == c  && d == f){
    //     alert("login")
    //     localStorage.setItem('code', 'secret')
    //     location.href = 'index.html'
    // }
    // else {
    //     alert("Incorrect user name or password")
    // }

}

function logout(){
    localStorage.setItem('code', 'logout')
}
function log(){
    location.href = 'login.html'
}
function sign(){
    location.href = 'signup.html'
}


