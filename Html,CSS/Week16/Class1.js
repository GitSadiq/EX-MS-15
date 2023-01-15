// var obj = {
//     name1 : 'Saad',
//     age : 23,
//     roll : 'hja',
//     arr : ['Hamza',69,'Female'],
//     calc : function(){
//         alert('hello world')
//     },
//     obj1 : {
//         name2 : 'Ali',
//         age : 54,
//         aisa : 'he'
//     } 
// }

// for(var key in obj.obj1){
//     document.write(key+" : "+ obj.obj1[key],"<br>")
// }

// for(var key in obj){
//     if(typeof obj[key] == 'function'){
//         document.write(obj[key]())
//     }
// }

// obj.calc()
// document.write(obj.arr)


// for(var key in obj){
//     document.write(key+" : "+obj[key],"<br>")
// }


// localStorage.setItem('name','Saad')
// localStorage.clear()

// sessionStorage.setItem('name','Ali')

var arr = []

function foo(){
    // var a = document.getElementById('semail').value
    // var b = document.getElementById('spass').value
    // var c = document.getElementById('sname').value
    // localStorage.setItem('email',a)
    // localStorage.setItem('pass',b)
    // localStorage.setItem('name',c)
    // location.href = 'login.html'

    var a = document.getElementById('semail')
    var b = document.getElementById('spass')
    var c = document.getElementById('sname')
    var obj = {
        email : a.value,
        pass : b.value,
        name : c.value
    }
    arr.push(obj)
    localStorage.setItem('users',JSON.stringify(arr))

}

var h = localStorage.getItem('users')
var r = JSON.parse(h)
document.write(r[1].email)


function foo1(){
    var a = document.getElementById('lemail').value
    var b = document.getElementById('lpass').value
    var getemail = localStorage.getItem('email')
    var getpass = localStorage.getItem('pass')
    if(a == getemail && b == getpass){
        alert('user login succesfully')
        // document.write(window.location.href)
        localStorage.setItem('code','secret')
        location.href="./index.html"
    }
    else{
        alert('not found')
        location.href = 'signup.html'
    }
}


function logout(){
    location.href = 'login.html'
    // localStorage.clear()
}

// function sessioncheck(){
//     var getemail = localStorage.getItem('email')
//     var getpass = localStorage.getItem('pass')
//     if(getemail == null || getpass == null){
//     location.href = 'login.html'

//     }
// }




// function logout(){
//     localStorage.setItem('code','logout')
// }


var arr2 = [10,20,32,234,123,32,45,,324,34,34,433,443]
var secarr2 = arr2.filter(function(value){
    return value > 300
})
document.write(secarr2)


allUsers.filter(data=> data.email === email.value && data.password === password.value);



// ye wala code lelena !!
var user = allUsers.filter(function(value){
    value.email ===email && value.password === password.value
})