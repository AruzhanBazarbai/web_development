let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
function sum(obj){
    let sum=0;
    for(key in obj){
        sum+=obj[key];
    }
    return sum;
}
alert(sum(salaries));