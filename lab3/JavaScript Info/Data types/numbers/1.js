function readNumber(){
    input="abc";
    while(!isFinite(input)){
        input = prompt("Enter the number",0);
        if(input==="" || input===null){
            alert(null);
        }else if(isFinite(input)){
            alert(parseInt(input));
            return;
        }
    }
    
}
readNumber();

// function readNumber() {
//     let num;
  
//     do {
//       num = prompt("Enter a number please?", 0);
//     } while ( !isFinite(num) );
  
//     if (num === null || num === '') return null;
  
//     return +num;
//   }
  
//   alert(`Read: ${readNumber()}`);