let login=prompt("Who's there?","");

if(login=="Admin"){
    let ps=prompt("Password?","");
    if(ps=="TheMaster") alert("Welcome!");
    else if(ps=='' || ps==null) alert("Canceled");
    else alert("Wrong password");
}else if(login=='' || login==null) alert("Canceled");
else alert("I don't know you");