////using parent node to traverse up the dom  ///
///////////   prog 1=DOM traverse
// const divList = document.getElementById('list')
// divList.addEventListener('click',(event)=>{
// if(event.target.tagName == "LI")
// {
// let li = event.target;
// let ul = li.parentNode;
// ul.removeChild(li)
// }
// })

/////////////////  prog 2= deleting the elements with the help of button  ////////////////////////////

// const divList = document.getElementById('list')
// const ulList = document.getElementById('ullist')
// ulList.addEventListener('click',(event) =>{
// if(event.target.tagName == "BUTTON")
// {
// let li = event.target.parentNode;
// let ul = li.parentNode;
// ul.removeChild(li);
// }
// })

//////previous siblings gives you the previous document node which is not all the time html...it can be a blank space also....but previousElementSibling gives always previous element ///////////////////

// const divList = document.getElementById('list')
// const ulList = document.getElementById('ullist')
// console.log(ulList.previousSibling.previousSibling)
// console.log(ulList.previousElementSibling.previousElementSibling);

//  insertBefore() method applies to the parent node and it takes 2 parameters

///////////////////  prog 3 = remove button in java script   ////////////////////////////
let lista = document.querySelector('ul')
let list1 = lista.children;
const divList = document.getElementById('list')
let ulList = document.getElementById('ullist')
ullist.addEventListener('click',(event) =>{
  if(event.target.tagName == "BUTTON"){
    if(event.target.className == "remove"){
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
  }

////////////////////////////////    Moving up button in java script    /////////////////////////////////////////

if(event.target.className == "up")
{
  let li = event.target.parentNode;
  let prevli = li.previousElementSibling
  let ul = li.parentNode
  // if(prevli){                                               if we remove this if condition,and we press up button of 1st element it goes to last element of li

    ul.insertBefore(li,prevli);
  // }
}
});

///////////////////////////         moving down button in java script       ///////////////////////////

ullist.addEventListener('click',(event)=>{
  if(event.target.tagName == "BUTTON"){
    if(event.target.className == "down"){
      let li = event.target.parentNode;
      let nextli = li.nextElementSibling;
      let ul = li.parentNode;
      if(nextli){
      ul.insertBefore(nextli,li);
    }
    }
  }
})

//////////////////////////////////////   add new li i.e create li  ////////////////////////
const inputItem = document.querySelector('input.additem');
const additemButton = document.querySelector('button.additem');
const removeitemButton = document.querySelector('button.removeitem');

additemButton.addEventListener('click',() =>
{
	let ul = document.getElementsByTagName('ul')[0];
	let li = document.createElement('li');
	li.textContent = inputItem.value;
  addbuttonofListeners(li);
	ul.appendChild(li);
	inputItem.value = '';                                                           //auto clear the i/p
})

///////////////////////

function addbuttonofListeners(li){

    let up = document.createElement('button');
    up.className = 'up';
    up.textContent = 'Up';
    console.log(up);
    li.appendChild(up);

    let down = document.createElement('button');
    down.className = 'down';
    down.textContent = 'Down';
    li.appendChild(down);

    let remove = document.createElement('button');
    remove.className = 'remove';
    remove.textContent = 'Remove';
    li.appendChild(remove);

}



for(let i=0; i<list1.length; i++)
{
  addbuttonofListeners(list1[i]);
}
