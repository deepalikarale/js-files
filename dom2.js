// var a = document.getElementById("myHeading");
// console.log(a);
// a.textContent;
// console.log(a);
 // a.textContent="DOM1";
// console.log(a);

//////////////////////////////  style the element(style is itself a object)
                            element.style.attribute               //////////////////////////////////////////
							
const myToggleButton =  document.getElementById('toggleButton');
const divList = document.getElementById	('list');
const myHeading = document.getElementById("red");
const input = document.querySelector("input");
const p = document.querySelector("p.description");
const button = document.querySelector("button");
const list = document.querySelector('ul');
myToggleButton.addEventListener('click',() =>{
	if (divList.style.display=='none'){
		divList.style.display=='block'
		myToggleButton.textContent="Hide Element"
	}else
	{
		divList.style.display=='none'
		myToggleButton.textContent="Show Element"
	}
})