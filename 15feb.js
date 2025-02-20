

// let a = parseInt(prompt("enter a number"))

// if (a > 0){
//     document.write("positive number")
// }
// else if(a< 0){
//     document.write("negative number")
// }
// else{
//     document.write( " nutral number ")
// }


//ladder 1 question

//let num = parseInt(prompt("Enter maths marks"))
//let num1 = parseInt(prompt("Enter english marks"))
//let num2 = parseInt(prompt("Enter  hindi marks"))

//marks = (num+num1+num2)

//document.write("Total marks : ") 
//document.write(marks)

//grade = (marks/300*100)

//if(grade>=90 ){
  //  document.write('A')
//}
//else if (grade>=75 && grade<90){
  //  document.write('B')
//}
//else if(grade>=60 && grade<75){
  //  document.write('c')
//}
//else {
  //  document.write("fail")
//}



//NESTED IF ELSE

let age = parseInt(prompt("Enter age "))

if ( age >=18){
    let num = parseInt(prompt("Enter 1 for indian"))

    if( num==1){
        document.write("INDIAN")
    }
    else{
        document.write("NOT INDIAN")
}
}
else { 
    document.write("You are child ")
}
