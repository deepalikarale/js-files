/////////////////////////////////  Making changes to HTML 
                    ////////////   change text with text content and inner html ///////////////////////////////
		/////////////  element.textContent   and    element.innerHTML    /////////////////////////////

// const myHeading = document.getElementById("red");
// console.log(myHeading.textContent);		
 // myHeading.textContent = "new text inserted to heading by .textContent";

////////////////////////////////////////// 
// const input = document.querySelector("input.description");
// const p = document.querySelector("p.description");
// const button = document.querySelector("button");

 // button.addEventListener('click',() => {
	 // p.textContent = input.value+":"
 // })
////////////////////////////////////////////////////////// 
 // const myHeading = document.getElementById("red");                                                               ///ask
 // const input = document.querySelector("input");
// const p = document.querySelector("p.description");
// const button = document.querySelector("button");
// button.addEventListener('click',() => {
	 // p.innerHTML = input.value+":"
 // })
 
 // console.log(document.querySelector('ul').innerHTML)                             //innerHTML gives all ul elements
 
 /////////////////////////////////////////////////////////////////////////
// const myHeading = document.getElementById("red");
// const input = document.querySelector("input");
// const p = document.querySelector("p.description");
// const button = document.querySelector("button");
// const list = document.querySelector('ul');
// button.addEventListener('click',() => {
	 // list.innerHTML = "<li>New list implemented</li>"
	 
 // })
 // console.log(document.querySelector('ul').innerHTML);
 
 //////////////////////////////////////////////////////////////////////////////
                               tagName.attributeName------>gives you the value
							   tagName.attribute='newvalue'-------->gives you new value    ////////////////////////
							   
const myHeading = document.getElementById("red");
const input = document.querySelector("input");
const p = document.querySelector("p.description");
const button = document.querySelector("button");
const list = document.querySelector('ul');
button.addEventListener('click',() => {
	 list.innerHTML = "<li>New list implemented</li>"
	 
 })
 p.title="new description added";							   
 
