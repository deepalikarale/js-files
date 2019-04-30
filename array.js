// var a = [1,2,3,4,5,6,7];
// console.log(a);                                         //disply of array a;
// console.log(a[5]);
// console.log(a.length);
/////////////////////////////////////////////

// for(i=0; i<a.length; i++)                               //display of array using for loop
// {
// document.write(a[i]);
// document.write("<br>");
// }

////////////    push is method of array to add last element...it returns length of array

// a.push(8);                                       //add 8 to array
// console.log(a);                                        // display of array
// document.write(a.push(11));                             //when push written in document or console it returns length
// console.log(a);
// console.log(a.push("deepa"));                           //add string to array
// console.log(a);

// /////////////////  pop method removes last element of array.it returns last element
//
// var b = [20,"deepa","vaishali","amruta","pooja"];
// b.pop();                                                   //pooja deleted
// console.log(b);
// b.pop();                                                   //amruta deleted
// console.log(b.pop());                       //it returns vaishali & deleted vaishali also
// console.log(b);                                            // 20,deepa remains in array
//
// /////////////////   shift method of array removes first element of qrray and returns first element in an array
//
// b.shift();                                                  //20 removes from array
// console.log(b);                                               // deepa remains in array
// console.log(b.shift());                                       // deepa returns
// console.log(b);                                              //empty array
// console.log(b.shift());                                      //return undefined bea no element in an array

// /////////////// unshift method of array add first element in an array and retuns length if array
//
// var c = ["deepa","nutan","golu",40,88.9,"chetan","nitin"];
// c.unshift(30);                                               //add 30 to first element in an array
// console.log(c);                                              //display array
// console.log(c.unshift());                                   //it adds 90 to an array and gives length of array

///////////////  .join method takes in an arrary and returns strings

// var daysInWeek = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
// var daysString = daysInWeek.join("-");
// console.log(daysString);

///////////////////  .concat() method to add newlist to the arrary

// var currentStudents = ['deepali','pooja'];
// var newStudents = ['vaishali','amruta'];
// var allStudents = currentStudents.concat(newStudents);
// var addStudents = currentStudents.concat("newStudents");
// console.log(allStudents);
// console.log(addStudents);                                         //display all elements of array
// console.log(newStudents);
// console.log(currentStudents);

// //////////////////////////////////////////////////////////

// var playList = ['sanam re','dil chahta hai','tere naam','fakira'];
// var playList2 = ['sanam re','dil chahta hai','tere naam','fakira','duaa'];
//
// function printList(list){
//   var listHTML = "<ol style='color:rgb(218,199,255);font-size:20px;'>";
//   for(var i=0; i<list.length; i++)
//   {
//     listHTML += '<li>'+list[i]+ '</li>';
//   }
//    listHTML += "</ol>";
//    print(listHTML);
//  }
//
//  function print(html)
//  {
//    document.write(html);
//  }
//
//  printList(playList);
//  printList(playList2);

//////////////////////////////

// var a = [
//   ["What is your name","deepali"],
//   ["What is your city","pune"],
//   ["What is your cource name","ui"],
//   ["What is your fav color","purple"],
//   ["What is your hobbies","music"]
// ];
//
// var correctans=0;
// var answer;
//
// function questionAns()
// {
//   for(i=0;i<a.length;i++)
//   {
//     answer = prompt(a[i][0]);
//     if(answer.toLowerCase() === a[i][1])
//     {
//       correctans += 1;
//     }
//   }
// }
// questionAns();
// document.write("You have given " +correctans+ " correct answers.<br>");
// var wrongans = a.length-correctans;
// document.write("You have given " +wrongans+ " wrong answers.<br>");
//
// if(correctans ===5)
// {
//   document.write("You win Gold");
// }
// if(correctans >=3)
// {
//   document.write("You win Silver");
// }
// if(correctans <3)
// {
//   document.write("You win Bronze");
// }
// if(correctans <1)
// {
//   document.write("You have to give atleast one correct answer");
// }

/////////////////////    indexof method is used to find index of an element in an array/////////////////////////////////////

// var a = ["deepa","vaishali","pooja",3,6,7,"amruta"];
// var b = a.indexOf("8");                                                  // it returns -1 if there is no element
// // var b = a.indexOf(6);                                                     // 4
// console.log(b);

////////////////////////////////////////////////////////////////////

// var a = ["apple","orange","grapse","banana","mango"];
// var b = prompt("enter your favorate fruit");
