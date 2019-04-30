///////////////////////// for=block scope //////////////////////
////////// o/p:10   10   var takes global scope.
// var x=5;
// {
// var x=10;
// console.log(x);
// }
// console.log(x);

//////////////////////////    o/p:10    5
// let x=5;
// {
// let x=10;
// console.log(x);
// }
// console.log(x);
//

/////////////////////////
// var i=5;                                                              o/p:w 10
// for(var i=0; i<10; i++)
// {
//  console.log("w");
// }
// console.log(i);
//////////////////////
// let i=5;                                         o/p: w  5   let variable takes a local scope
// for(let i=0; i<10; i++)
// {
//  console.log("w");
// }
// console.log(i);
// //////////////////////////////////////////////////
// ///////////////////////  function()  =  local and global scope            ///////////////////////
///////////////////////////////o/p:10    10    bea var is global variable
// {
//   var y=10;
//   console.log(y);
// }
// console.log(y);
// ///////////////////////////////////   o/p: 10      undefined    bea let is local variable(let is a block scope)
// {
//   let y=10;
//   console.log(y);
// }
// console.log(y);

// ///////////////////////////
//                          o/p:not give o/p bea previously declared let and after that var
// let x=10;
// {
//   var x=20;
//   console.log(x);
// }
// console.log(x);

// ///////////////////////   o/p:  20     10
// var x=10;
// {
//   let x=20;
//   console.log(x);
// }
// console.log(x);
// /////////////////////////   o/p:20   20
// var x=10;
// {
//   var x=20;
//   console.log(x);
// }
// console.log(x);
///////////////////////////////  o/p:  20    10   45
// var x=45;
// {let x=10;
// {
//   let x=20;
//   console.log(x);
// }
// console.log(x);
// }
// console.log(x);
//
// ////////////////let and var in global scope are same////
// ///////////////////////////  we define let only once in a block scope but we can define var any no of times in block scope
//             let does not redefine variable value globally  when it is define as block scope.//
//
// ///////////  let is not consider as global scope in window.window is a global object.var is a global variable.
//
// let x = 20;                                                              //o/p:undefined
// var x = 10;                                                                        //o/p:10
// console.log(window.x);
// // ////////////////////////////////////////////
// // /////////////// we can declare var again in same block scope   o/p: 20
// {
//   var z=10;
//    var z=20;
//     console.log(z);
// }

// ////            now o/p not getting if write let...because we cant declare let in same block scope again
//
// {
//   let z=10;
//    let z=20;
//     console.log(z);
// }

/////////////////////////////    hoisting           /////////

// x=10;
// var x;
// console.log(x);
// /////////////////////////////////////////
//
// console.log(x);
// var x=10;
// ////////////////////////
// x=10;
// console.log(x);
// var x;
// //////////////////////////////
// console.log(x);
// x=10;
// var x;
///////////////////////////////
///////////////////////////      hoisting
/////////////////    function declaration can done with hoisting concept   ///////////////

//  birthyear = parseInt(prompt("enter your birth year"));
// console.log(window.calculateage(birthyear));
// var currentyear = 2019;
// retireage();
// function calculateage(birthyear){
//
//     var age = 2019 -(birthyear);
//
//      return age;
// }
//
// function retireage(){
//   var reage = 65 - calculateage(birthyear);
//   console.log(reage);
// }

///////////////////////  function expression cannot done with hoisting concept

// birthyear = parseInt(prompt("enter your birth year"));
// // console.log(calculateage(birthyear));
//
// var currentyear = 2019;
//
//   function calculateage(birthyear){
//    var age = 2019 -(birthyear);
//     return age;
// }
//
// var a = function (){
//  var reage = 65 - calculateage(birthyear);
//  console.log(reage);
//  return reage;
// }
// console.log(a());
///////////////////






////////////////
