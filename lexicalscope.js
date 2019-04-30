// var a=2;
//  function av(){
//   var b=1;
//   console.log(b);
//
//   bv();
//    function bv(){
//     var c;
//     c=4;
//     console.log(c);
//     cv();
//     function cv(){
//      var d=4;
//      console.log(d);
//      dv();
//       function dv(){
//        var e=5;
//        console.log(e);
//        console.log(a+b+c+d+e);
//         }
//      }
//    }
//  }
//  av();
///////////////////////////////// this gives global scope  window
// console.log(this);

//////////////////////////////////  function declaration also has global scope window
 // function abc(){
 //   console.log(this);
 // }
 // abc();
/////////////////////////////////////////////////////

// var john = {
//   name:"john",
//   age:28,
//
//   calculateage:function(){
//     console.log(this);
//     return 2019- this.age;
//   }
// }
// var e = john.calculateage();
// console.log(e);
/////////////////////////////

// var john = {
//   name:"john",
//   age:28,
//
//   calculateage:function(){                         // function expression gives object john
//     console.log('Hello');
//    sub();
//     //console.log(d);
//       function sub(){                              //moral is :function declaration bydefault scope is window
//         console.log(this);
//       }
//   }
// }
// var e = john.calculateage();
// console.log(e);

///////////////////////////////////////////////////
// var john = {
//   name:"john",
//   age:28,
//   calculateage:function(){
//     console.log(this.name);
//     console.log(this.age);
//   }
// }
// john.calculateage();
//
// var mark = {
//   name:"mark",
//   age:24,
//   calculateage:function(){
//     console.log(this.name);
//     console.log(this.age);
//   }
// }
// mark.calculateage();

//////////////////  this variable takes value after calling the function and function is called by object  /////////////////////////

var john = {
  name:"john",
  age:28,
  calculateage:function(){
       console.log(2019-this.age);
  }
}
 john.calculateage();

var mark = {
  name:"mark",
  age:24,
}
console.log(mark);                                   // show mark objest
mark.calculateage = john.calculateage;          //calculateage method of john is assigning to the mark
console.log(mark);               //show mark object with calculateage method
mark.calculateage();              // now call the function to calculate birth birthyear

/////////////////////////////////////////////////////////
