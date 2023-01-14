var divbody = document.getElementById('divbody')
function additems(){
    var inp = document.getElementById('list')
    var inpvalue = document.createTextNode(inp.value)
    var chec = inp.value
    console.log(chec)
    if( chec === ''){
        alert("Empty value can't be listed")
    }
    else{
    var pardiv = document.createElement("div")
    pardiv.setAttribute('class', 'items')

    var chdiv = document.createElement('div')
    chdiv.setAttribute('id', 'add')
    
    var pra = document.createElement('p')

    var but1 = document.createElement('button')
    but1.setAttribute('class', 'butt')
    but1.setAttribute('onClick', 'edit(this)')

    var icon1 = document.createElement('i')
    icon1.setAttribute('class', 'fa-solid fa-pen-to-square')

    
    var but2 = document.createElement('button')
    but2.setAttribute('class', 'butt')
    but2.setAttribute('onClick', 'del(this)')

    var icon2 = document.createElement('i')
    icon2.setAttribute('class', 'fa-solid fa-delete-left')
    
    but1.appendChild(icon1)
    
    but2.appendChild(icon2)

    pra.appendChild(inpvalue)
    chdiv.appendChild(pra)

    pardiv.appendChild(chdiv)
    pardiv.appendChild(but1)
    pardiv.appendChild(but2)
    divbody.appendChild(pardiv)
    // console.log(but1)
    // console.log(but2)
    inp.value = ''
    }
    
}

function edit(edt){
    // edt = document.getElementById('add')
    var a = prompt("Enter Updated Value", edt.parentNode.firstChild.firstChild.innerText)
    edt.parentNode.firstChild.firstChild.innerText = a 
}

function del(rem){
    // rem = document.getElementById('add')
    rem.parentNode.remove()
}

function delet(){
    if ( divbody.innerText === ''){
        alert("Make your list first")
    }
    else{
        divbody.innerHTML = ' '
    }
}