let overallinput=document.getElementById("page2");
let Subname=document.getElementById("Subname");
let Marks=document.getElementById("Marks");
let add=document.getElementById("add");
let update=document.getElementById("update");
let table1=document.getElementById("table1");
let table2=document.getElementById("table2");
let table3=document.getElementById("table3");
let table4=document.getElementById("table4");
let totalsub=document.getElementById("totalsub");
let input=document.getElementById("input");
let input1=document.getElementById("input1");
let input2=document.getElementById("input2");
let input3=document.getElementById("input3");
let input4=document.getElementById("input4");
let Sname=document.getElementById("Sname");
let SId=document.getElementById("SId");
let Satt=document.getElementById("Sattendence");
let calculate=document.getElementById("calculate");
let message=document.getElementById("message");
let counter=0;
var allmarks=[];

let reset=document.getElementById("reset");
var para=document.createElement("p");
input.appendChild(para);
Sname.oninput=function(){
    
    if (!/^[A-Za-z]+$/.test(Sname.value)){
          window.alert("Please enter only alphabet!");
    }
    else{
        
        Sname.style.borderColor="black";
        para.style.visibility="hidden";
    }
}
var para1=document.createElement("p");
input1.appendChild(para1);
SId.oninput=function(){
    if(!/^[A-Za-z0-9]+$/.test(SId.value)){
        window.alert("Please enter only alphabet and numbers!");
    }
    else{
       SId.style.borderColor="black";
       para1.style.visibility="hidden";
    }
}


Satt.oninput=function(){
    if(Satt.value<0 || Satt.value>100){
        window.alert("Please enter value between 0-100");
    }
    else{
    Satt.style.borderColor="black";
    }
}
var para3=document.createElement("p");
input3.appendChild(para3);
Subname.oninput=function(){
    if(!/^[A-Za-z]+$/.test(Subname.value))
    {
        window.alert("Please enter only alphabet");
    }
    else{
      Subname.style.borderColor="black";
      para3.style.visibility="hidden";
    }
}
var para4=document.createElement("p");
input4.appendChild(para4);
Marks.oninput=function(){
    if(Marks.value<0 || Marks.value>100){
        window.alert("Please enter value between 0-100")
    }
    else{
        Marks.style.borderColor="black";
        para4.style.visibility="hidden";
    }
}
add.onclick=function(){
    
  if(Sname.value=="" && SId.value=="" &&
  Satt.value=="" && Subname.value=="" && Marks.value==""){
      Sname.style.borderColor="red";
      SId.style.borderColor="red";
      Satt.style.borderColor="red";
      Subname.style.borderColor="red";
      Marks.style.borderColor="red";
      window.alert("Please enter the credentials!");
  }
    
  else if(Sname.value==""){
        Sname.style.borderColor="red";
        
        para.innerHTML="Please enter the Student name";
        para.style.color="red";
        para.style.visibility="visible";
        
    }
    else if(SId.value==""){
        SId.style.borderColor="red";
        para1.innerHTML="Please enter the Student ID.";
        para1.style.color="red";
        para1.style.visibility="visible";
    }
    else if(Satt.value==""){
        Satt.style.borderColor="red";
        
    }
    else if(Subname.value==""){
        Subname.style.borderColor="red";
        para3.innerHTML="Please enter the Subject name.";
        para3.style.color="red";
        para3.style.visibility="visible";
    }
    else if(Marks.value==""){
        Marks.style.borderColor="red";
        para4.innerHTML="Please enter the Subject marks.";
        para4.style.color="red";
        para4.style.visibility="visible";
    }
    
   
    
        
        if(counter<10){
           
           let row=document.createElement("tr");
           let class0=document.createElement ("td");
           
           let class1=document.createElement ("td");
           let class2=document.createElement ("td");
           let class3=document.createElement ("td");
           let Edit=document.createElement("button");
           let Delete=document.createElement("button");
           table1.appendChild(row);
           row.appendChild(class0);
           row.appendChild(class1);
           row.appendChild(class2);
           row.appendChild(class3);
           class3.appendChild(Edit);
           class3.appendChild(Delete);
           
           counter++;
           class0.innerHTML=counter;
           class1.innerHTML=Subname.value;
           class2.innerHTML=Marks.value;
           
          

    
           Edit.innerHTML=" ✏️Edit";
           Delete.innerHTML="🗑Delete";
           totalsub.innerHTML=counter;
           allmarks.push(Number(Marks.value));
           Subname.value="";
           Marks.value="";
           let index=allmarks.length-1;
           Edit.onclick=function(){
               
               Subname.value=class1.innerHTML;
               Marks.value=class2.innerHTML;
               update.onclick=function(){
                   class1.innerHTML=Subname.value;
                   class2.innerHTML=Marks.value;
                     
                     allmarks[index]=Number(Marks.value);
                     calculate.click();
                    Subname.value="";
                    Marks.value="";
                   
                   
               }
             
               
              
               }
               
           
            Delete.onclick=function(){
                let nextrow=row.nextElementSibling;
                let index=row.rowIndex-1;
                allmarks.splice(index,1);
                   row.remove();
                   counter--;
                   
                   totalsub.innerHTML=counter;
                   
                   
                   while(nextrow!=null){
                       nextrow.children[0].innerHTML=Number(nextrow.children[0].innerHTML)-1;
                       nextrow=nextrow.nextElementSibling;
                     
                   }
                   calculate.click();
                       }
                       
               
               
            
        }
            
    
}
let totalsubject=document.getElementById("ts");
let totalmarks=document.getElementById("tm");
let averagemarks=document.getElementById("Avg");
let grade=document.getElementById("grad");
let attendence=document.getElementById("att");
let status=document.getElementById("status");
let topsub=document.getElementById("topsub");
let passsub=document.getElementById("passsub");
let failsub=document.getElementById("failsub");
calculate.onclick=function(){
    let highest=0;
    var topsubject="";
    let countvalue1=0;
    let countvalue2=0;
    
    totalsubject.innerHTML=counter;
    var sum=0;
    
    for(let i=0;i<allmarks.length;i++){
        
         sum=sum+allmarks[i];
         
         
             
         
    
    if(allmarks[i]>40){
        countvalue1++;
    }
    else{
        countvalue2++;
    }
    if(allmarks[i]>highest){
             highest=allmarks[i];
             
             let currentrow=table1.rows[i+1];
             if(currentrow){
                 topsubject=currentrow.children[1].innerHTML+allmarks[i];
             }
        }
    }
    totalmarks.innerHTML=sum;
        
    let average=(Math.floor(sum/allmarks.length));
    averagemarks.innerHTML=average;
    if(average>=90 && average<=100){
        grade.innerHTML="A+";
    }
    else if(average>=80 && average<=89){
        grade.innerHTML="A";
    }
    else if(average>=70 && average<=79){
        grade.innerHTML="B+";
        
    }
    else if(average>=60 && average<=69){
        grade.innerHTML="B";
    }
    else if(average>=50 && average<=59){
        grade.innerHTML="C";
    }
    else if(average>=40 && average<=49){
        grade.innerHTML="D";
    }
    else if(average<40){
        grade.innerHTML="F";
    }
    let attendencevalue;
    attendencevalue=Number(Satt.value);
    attendence.innerHTML=attendencevalue+"%";
    if(Satt.value<75){
        status.innerHTML="NotElegible";
    }
    else{
        status.innerHTML="Elegible";
    }
    
    topsub.innerHTML=topsubject;
    
    passsub.innerHTML=countvalue1;
    failsub.innerHTML=countvalue2;
    
    
}
let darkmode=document.getElementById("Darkmode");
let bodycolor=document.getElementById("bodycolor");
let circle=document.getElementById("Circle");
let dark=false;

darkmode.onclick=function(){
   if(dark===false){
    darkmode.style.backgroundColor="blue";
    bodycolor.style.backgroundColor="black";
    circle.style.color="white";
    circle.style.position="relative";
    circle.style.left="10px";
    dark=true;}
    
   else {
     
        darkmode.style.backgroundColor="gray";
        bodycolor.style.backgroundColor="white";
        circle.style.color="white";
        circle.style.position="relative";
        circle.style.left="-9px";
        dark=false;
  }
}
let form=document.getElementById("form");
reset.onclick=function(){
    form.reset();
    while(table1.rows.length>1){
        table1.deleteRow(1);
    }
    totalsubject.innerHTML="";
    totalmarks.innerHTML="";
    grade.innerHTML="";
    averagemarks.innerHTML="";
    attendence.innerHTML="";
    status.innerHTML="";
    topsub.innerHTML="";
    passsub.innerHTML="";
    failsub.innerHTML="";
    
    totalsub.innerHTML="";
    
       counter=0;
      allmarks=[];
       highest=0;
       topsubject="";
       countvalue1=0;
       countvalue2=0;
}
