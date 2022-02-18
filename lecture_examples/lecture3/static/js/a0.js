// let a = document.getElementsByTagName('h1'); //get element by Tagname and return an array as a result
// let a = document.getElementsByClassName('box'); 
// let a = document.getElementById('btn');//get by Id and return only one object as result because id is unique
// let a = document.querySelector('html body .box')
let a = document.querySelector('.box'); //get element by class="box" and will take only first occurense
// console.log(a); //мы тут создали переменный "a", который хранит этот класс box(первое вхождение)
a.innerHTML = "hello message"; //и потом можем так в Джаваскрипте манипулировать этим классом, то есть а. можем писать контент для этого класса
a.style.color = 'blue'; // в коде это не изменится, но добавится в сайт
a.style.fontSize = '25px'; //можем вот так изменить например размер шрифта, но нужно писать вот так fontSize а не font-size
a.style.fontWeight = 'bold';


let btn = document.querySelector('#btn');
btn.style.background = "yellow";
btn.style.fontSize = "25px";
btn.style.border = "solid 5px green";
btn.style.borderRadius = "20px";
btn.style.padding = "10px 40px"; //top,bottom-10px; right,left-40px
console.log(btn.getAttribute('data-id')); //we can get value of attribute in tag 
btn.setAttribute('data-id', 111); //we can set the value of attribute in tag
console.log(btn.offsetTop);//выводит сколько пикселей offsetTop
console.log(btn.offsetLeft);//выводит сколько пикселей offsetLeft


let text = document.createElement('h3'); //create a new element "text" with tag 'h3'
text.innerHTML = "new created h3 from JS";//writed in text

let container = document.querySelector('.container'); //"container" is instance that hold class "container"
container.appendChild(text);//and in this class we append as a child instance/tag "text". So then we can see a "h3 tag" on web page 


// alert('Message'); //function that inform/show a message from developer to user.

// confirm("agree?") //function that show a question to user from a developer with some options
//let res = confirm("Agree?") //we can store in instance the answer of the user

// let n = prompt("Enter your name"); //function that show a message to user from developer with entering box. 
// and the info that enter the will save in this instance "n"
// console.log(n); //Aruzhan


// JavaScript and DOM events
// <button onclick="show"></button>
let i = 0;
function show(){ //when we click on button, this function will go
  console.log(i++);
}

// btn.onclick = show; //we can there configire button
// btn.addEventListener('click', show); //this function when event "click" happens will invoke function "show"
btn.addEventListener('click', function(){
  alert('Message');
});