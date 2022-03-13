function sumInput(){
    let arr=[];
    while(true){
        let input=prompt("Enter a number",0);
        if(input==="" || input===null || !isFinite(input)) break;
        arr.push(+input);
    }
    let sum=0;
    for(let item of arr){
        sum+=item;
    }
    return sum;
}
alert(sumInput());