function randomInteger(min, max) {
    let x=min-0.5 + Math.random() * (max+1 - min);
    return Math.round(x);
  }
  
  alert( randomInteger(1, 5) );
  alert( randomInteger(1, 5) );
  alert( randomInteger(1, 5) );

//alternative solution
// function randomInteger(min, max) {
//     // here rand is from min to (max+1)
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//   }
  
//   alert( randomInteger(1, 3) );