// -[] Hoisting

console.log(a); //undefined. because JS will read all the variables and functions and implement the global variables
//after implementing 'a' as global and undefined
var a = 2; //there are JS will give value 2 to a
//  =========
// var a;
// console.log(a);
// a = 2;

console.log(sum(2, 4));//6. because function is implemented immediatly

function sum(a, b){
  return a + b;
}


let i = 0;
function show(){
  console.log(i++);
}

setTimeout(show, 4000); //setTimeout-will add delay 40000ms to function
setInterval(show, 1000);//setInterval-will display the function every 1000ms, то есть в интервале 1000мс

function f1(){
    setTimeout(function(){
      console.log('f1 function');
    }, 2000);
  }
  
  function f2(){
    console.log('f2 function');
  }
  f1();
  f2();
// result is-"f2 function" and "f1 function", because f1 function is implemented after delay 2s


function f1(callback){
    setTimeout(function(){
      console.log('f1 function');
      callback();
    }, 2000);
  }
  
  function f2(){
    console.log('f2 function');
  }
  
  f1(f2);
  // result is: "f1 function" and "f2 function", because at first with delay 2s implemented console.log('f1 function');, then callback()

  
  // let a = {
  //   id: '123',
  //   num: [1, 2, 'hello'],
  //   b: true
  // }
  
  // let s = JSON.stringify(a); //format json file to string
  // let b = JSON.parse(s);//format to json
  
  // console.log(typeof (s));
  // console.log(b);
  
  // a = undefined;
  
  // let p = a && a['id'];
  // console.log(p);

//   hostname= hostname || "localhost" -hostname will be equal to hostname if it exists, or it equal to "localhost"
// var prop= obj && obj.propname  ----prop будет равным obj.propname если obj defined 
