console.log(2 == '2');//true, because it compares the content but in the same data type
console.log(2 === '2');//false, because it compares the content and data type

let arr = [11, 22, 33, 44];
arr.push(55); //add element to end
arr.pop();//delete last element
console.log(arr.length);//out the length of array
console.log(arr.indexOf(33));//out the index of the element=33

arr.find(function(v){ //takes as argument a function
  if (v == 22)
    console.log('hi');
});

let b = arr.slice(2, 4); //slice(start_ind,end_ind,step) so it creates a new array from original[start_ind,end_ind). 
//doesn't change the original array
console.log(arr);//11,22,33,44
console.log(b);//33,44

arr.splice(2, 1);//splice(start_ind,el) deletes the elements starting at 'start_ind' 'el' times
// changes the original array 
console.log(arr);//11,22,44

let c = arr.map(function(v) { // implements the function to all element(s) and return the array
  return v + 5;
});
console.log(c);

let d = c.filter(function (v) { //filtering the element(s) by function an return the array
  return v > 20;
});
console.log(d);

let s = c.reduce(function(sum, v) { //reduce all the elements of array to one value
  return sum + v;
}, 0);
console.log(s);


for(let i = 0; i < arr.length; i++){//пробегаемся в форике по индексу
  console.log(arr[i]);
}
console.log(i); //recommended to use let, because it will deleted after block-action finished



for (let v of arr){ //element 'v' will run in array
  console.log(v);
}


arr.forEach(function (v) {//we can loop in array by function forEach. we can put as a argument the function that will out the element
  console.log(v);
});


let i = 0;
while(i < arr.length){//пробегаемся в форике с помощью уайл луп
  console.log(arr[i]);
  i++;
}