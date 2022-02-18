var s_name = { // Global variable
    name: "Student1",
    age: 20,
    gpa: 3.8
  };
  
  
  function hi(){ // new block(/scope)
    if (s_name['gpa'] >= 3.5) { // new block
      let a = s_name['age'];
      console.log('hello ' + s_name['name']); //let 'a' is deletes after finishing the block
    } else { // new block
      console.log('Student gpa less than 3.5');
    }
  
    let a = true;
    console.log(a);//true
  }
  
  hi();