let Subname=document.getElementById("Subname");
let Marks=document.getElementById("Marks");
let add=document.getElementById("add");
let table1=document.getElementById("table1");
let table2=document.getElementById("table2");
let table3=document.getElementById("table3");
let table4=document.getElementById("table4");
let totalsub=document.getElementById("totalsub");
let Sname=document.getElementById("Sname");
let SId=document.getElementById("SId");
let caliculate=document.getElementById("calculate");
let reset=document.getElementById("reset");
add.onclick=function(){
    console.log("Student name:", Sname.value);
    if(Sname.value==""){
        Sname.style.borderColor="red";
        let para=document.createElement("p");
        Sname.appendChild(para);
        para.innerHTML="Please enter the Student name";
        para.style.color="red";
    }
    else if(Sname.value)
}
