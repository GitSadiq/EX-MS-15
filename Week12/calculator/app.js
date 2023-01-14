var res = document.getElementById("res");
function main(dat){
    if (dat == "erase"){
        res.innerText = ""
    }
    else if (dat == "enter"){
        res.innerText = eval(res.innerText);
    }
    else{
        res.innerText += dat
        // res.innerText = res.innerHTML +  dat
    }
} 

