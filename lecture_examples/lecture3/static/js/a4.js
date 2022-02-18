// function decloration
function greeting(){
    console.log('hello');
  }
  
  greeting();
  
  // function expression
  let greeting2 = function(){ //typeof(greeting2)=function
    console.log('hello2');
  };
  
  greeting2();
  
  function square1(v){
    return v * v;
  }
  
  let square = a => a * a; // arrow function 
  //variable_type f_name = (arguments) "will return" funcstion
  // console.log(typeof(square));
  console.log(square(3));
  
  let sum = (a, b) => a + b;
  console.log(sum(3, 4));
  
  
  let mult = (a, b) => { //when expression will take more than one line, we can write in curly brackets
    let c = a * b;
    return c;
  }
  
  let student = {
    id: '20BD123123',
    s_name: 'Stundet 1',
    show: function(){
      // console.log(this.id + " => " + this.s_name);
      console.log(`${this.id} => ${this.s_name}`);
    }
  }
  
  student.show();
  