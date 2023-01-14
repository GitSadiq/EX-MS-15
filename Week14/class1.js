// var a = document.getElementById('abc').innerHTML = 'Hasan'
// console.log(a)
// var a = document.getElementById('outer').parentNode
// var a = document.getElementById('outer').parentElement
// console.log(a)
// console.log(document.childNodes[1].childNodes[0].childNodes[3].innerText)

// var a = document.getElementById('abc')
// console.log(a.hasAttribute('class'))

// var a = document.getElementById('abc')
// console.log(a.getAttribute('class'))
// var c = "sadiq"

// var a = document.getElementById('abc')
// a.setAttribute("style", "color: red;")
// document.write(a)

// var a = document.createElement('h1')
// console.log(a)

// var b = document.createTextNode('Sadiq')
// console.log(b)
// a.appendChild(b)
// console.log(a)

//condition No #1.
let x = 2;
{
  x = 3;
  console.log(x);
}
console.log(x);
//Anwser 3,3

//condition No #2.
let y = 2;
{
  console.log(y);
  y = 3;
}
console.log(y);
//Anwser 2,3

// //condition No #3.
// let z = 2;
// {
//   console.log(z);
//   let z = 3;
// }
// console.log(z);
//Anwser Error becuase in Block scope you acces z before initialization.

//condition No #4.
let a = 2;
{
  let a = 3;
  console.log(a);
}
console.log(a);
//Anwser 3,2

//first Way
FunName = () => {
  return "HelloWorld";
};

//second Way
funName = () => "Hello World";

//third way With Parameter and with parentheses
abc = (pra) => "hello" + pra;
console.log(abc(" sadiq"));

var ab = "saadiq";
let obj = {
  ab,
};
console.log(obj.ab);

//Destructuring Array
let arr = ["Sadiq", 25, ["HTML", "CSS", "Javasript"]];
let [firstname, age, [lang1, , lang2]] = arr;
console.log(firstname, age, lang1, lang2);

//Destructuring Array
let newobj = {
  Naam: "Sadiq",
  age: 25,
  obj1: {
    lan1: "HTML",
    lan2: "CSS",
    lan3: "javascript",
  },
};
let {
  Naam: N,
  age: A,
  obj1: { lan1: L1, lan3: L3 },
} = newobj;
console.log(N, A, L1, L3);

//spread Operator in combination with destruturing
const arr1 = [10, 2, 23, 54, 56, 35, 34, 23];
const [one, two, ...newarr] = arr1;
console.log(newarr);

//Spread operator to copy obj
let obj2 = {
  firstname: "sadiq",
};
let obj3 = {
  lastname: "khan",
};
let addobj = { ...obj2, ...obj3 };
console.log(addobj);

var getul = document.getElementById("abc");

function abc() {
  var aa = document.getElementById("inp");

  var li = document.createElement("li");
  var bb = document.createTextNode(aa.value);
  li.appendChild(bb);
  getul.appendChild(li);
  // console.log(getul)
  aa.value = "";
  var del = document.createElement("button");
  var delBut = document.createTextNode("delete");
  del.appendChild(delBut);
  li.appendChild(del);
  del.setAttribute("onClick", "remove(this)");

  var edit = document.createElement("button");
  var edtBut = document.createTextNode("Edit");
  edit.appendChild(edtBut);
  li.appendChild(edit);
  edit.setAttribute("onClick", "edit(this)");
}

function remove(e) {
  e.parentNode.remove();
  // var b =    e.parentNode
  // console.log(b)
}

function del() {
  getul.innerHTML = "";
}

function edit(bb) {
  var a = prompt("Enter Updated Value", bb.parentNode.firstChild.nodeValue);
  bb.parentNode.firstChild.nodeValue = a;
  console.log(bb.parentNode.firstChild.nodeValue);
}
