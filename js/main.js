/*
java script user input
syntax prompt();
convert into string to number 
syntax is parseInt(".....")
*/


/*
const names=Number(prompt("enter your number"))
console.log(names);
const sname =Number( prompt("enter your number 2")) 
console.log("the converted num is =>"+ sname)
const num=names+sname;
console.log(num)
alert("your calculated was get sucessfully")

*/

/*
let mark=parseInt(prompt("enter your marks"));
let mark2=parseInt(prompt("enter your marks"));
if (mark>=35 && mark2>=35 ) {
   console.log("pass")
}else{
    console.log("fail")
}

// let result =mark >=30? 'pass':"fail";
*/
/*
var totalmark ,fullmark=450; 500
if(totalmark==fullmark || totalmark>=fullmark) {
    console.log(true)
}else{
    console.log(false)
}
*/




// maths functions

// u=Math.random(9)
// console.log(u)


// javascript functions
function dearth(dname){
    console.log(`hai ${dname} Is the CEO of Dk indestrea`)   
}
dearth("Dhinesh_kumar")

// return function
function DhineshMark(m1,m2,m3) {
    var avgM =150
    m1 = Number(prompt("Enter your tamil mark:"))
    m2 = Number(prompt("Enter your Computer Science mark:"))
    m1 = Number(prompt("Enter your Maths mark:"))
    var tot=m1+m2+m3
    
    if(tot>=avgM){
        console.log("You pass the exam")
    }else{
        console.log("sorry You fail the exam .........")
    }
    
    return tot
}
console.log(DhineshMark())
