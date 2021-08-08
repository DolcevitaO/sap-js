// 1. Write a JavaScript function which accepts an argument and returns the type.

// SOLUTION

// let x = 7;
// let x = true;
// let x = "seven";
// let x = 78698696n;
// alert(typeof(x));


// 2. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// Hint : Remember that we used % to check if number can divide without a remainder. You will probably need to use a for..loop.
// let number

// SOLUTION -had too look up as didint know how to chek for prime. 
//However all solutions seem to have problems when number fifnishes with 1, such 11, 111, 221 etc.



// (p - 1) ! ≡  -1   mod p 
// OR  (p - 1) ! ≡  (p-1) mod p
// First few prime numbers are : 2 3 5 7 11 13 17 19 23 

 

// let n = prompt("enter number");
// n = Number(n);
//     // Check if number is less than equal to 1
// if (n <= 1){
//         alert("NOT");
//     }

//  // Check if number is 2
// else if (n == 2){
//         alert ("Prime");
//     }

//  // Check if n is a multiple of 2
// else if (n % 2 == 0){
//         alert("NOT");
//     }
// else {

//     // If none of above starting from 3
//     let i;
//     for (i = 3; i <= Math.sqrt(n); i =+ 2)
//     {
//         if (n % i == 0){
//             alert ("NOT");         
//         }
//         else {
//             alert ("Prime");}

    
//         //alert("1"); //testing why going into infinitive loop???
//     }
// }



// let n = prompt("enter number");
// if (n === 2) {
//     alert("Prime");
//   } else if (n > 1) {
//     for (var i = 2; i < n; i++) {

//       if (n % i !== 0) {
//         alert("Prime");
//       } else if (n === i * i) {
//         alert("Not");
//       } else {
//         alert("Not");
//       }
//     }
//   } else {
//     alert("Not");
  

// }


// let n = prompt("enter number");
// if (n===1)
// {
//     alert("Not");
// }
// else if(n === 2)
// {
//     alert("Prime");
// }else

// {
//   for(let x = 2; x < n; x++)
//   {
//     if(n % x === 0)
//     {        
//         alert("Not");
//     }
//   }
//   alert("Prime"); 
// }


// 3. Write a JavaScript function to convert an amount to small coins.
// Note: Coins are 1,2,5,10,20,50

// SOLUTION 


// let amount =prompt("Amount");

//     let fifty 
//     if (amount>=50){
//         fifty = amount/50}//how many 50ties
//     else fifty =0;
    
    
//     let after50 = amount % 50; 
//     let twenty 
//     if  (after50 >=20){//reminder after 50ties
//             twenty = after50 / 20 }//how many 20ties
//     else twenty = 0;

        
//     let after20 = after50  % 20; //reminder after 20ties
//     let ten
//     if (after20 >=10){
//         ten = (after20 / 10)}
//     else ten = 0;


//     let after10 = after20 % 10;
//     let five 
//     if (after10 >= 5){
//         five = after10 / 5}
//     else five = 0;

//     let after5 = after10 % 5;
//     let two 
//     if (after5 >=2){
//         two = after5 / 2
//     }
//     else two = 0;
    
//     let after2 = after5 % 2;

   

// alert("Amount "+ amount+ "  " + "contains following coins:" + "   "+
//       "fifty x " + Math.floor(fifty) + "   "  +
//       "twenty x " + Math.floor(twenty)+ "   "  +
//       "ten x " + Math.floor(ten) + "   " +     
//       "five x " + Math.floor(five) + "   " +     
//       "two x " + Math.floor(two )+ "   " +  
//       "one x " + Math.floor(after2) );





   


            

    


 // 4. Write a JavaScript program to get the integers in range (x, y)
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

// SOLUTION

// let x = prompt ("Enter first number")
// let y = prompt("Enter last number")
// if(x<=y){
// for (i=x; i <=y; i++){
//        alert(i);
//     }
// }else {
// for (i=x; i >=y; i--){
//     alert(i);
//  }}


    
    




// // // 5. Write a JavaScript program that accept three integers and display the larger

// SOLUTION

// let x = prompt("Integer 1");
// let y = prompt("Integer 2");
// let z = prompt("Integer 3");

// x = Number(x);
// y = Number(y);
// z = Number(z);

// let winner1
// let winner2
// if (x >= y ) {
//     winner1=x ;
       
//     }

// else winner1 = y;

// if (winner1 >= z){
//             winner2=winner1
//         }
//         else winner2 = z;


// alert(winner2);



// // 6. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
// // Sample numbers : 3, -7, 2
// // Output : The sign is -

// SOLUTION
// let x = prompt("Integer 1");
// let y = prompt("Integer 2");
// let z = prompt("Integer 3");
// let result = Number(x)+Number(y)+Number(z);
// //alert(result)
// let sign = (Math.sign(result));
//  if (sign == 1){
//     alert("The sign is +");
//  }else if (sign == -1){
//     alert("The sign is -");
//  }else
//     alert("The sum is 0");


