console.log('Hello from JS file');

console.log(typeof (2));
console.log(typeof (2.4));
console.log(typeof ('hello'));
console.log(typeof ({ 'id': 2 }));
console.log(typeof (null));
console.log(typeof (undefined));
console.log(typeof (Symbol('a')));
console.log(typeof (function(){}));
console.log('\n');

var a; //creation variable without anything(global), accessable to parent block. 
//so it's impossible to create 'let' in parent block with the same name 
a = true;
console.log(a);

let b = 3;//similar to 'var', but is local. and it's deletes when block is finished, 
//so it's impossible to create 'let' in another block with the same name
b = 'hello b';
console.log(b);

const c = 4; //it's constant, so it's impossible to change the value after creating
console.log(c);