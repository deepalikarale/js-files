// creating the new DOM element //
//const list = document.querySelector('ul');
const inputItem = document.querySelector('input.additem');
const additemButton = document.querySelector('button.additem');
const removeitemButton = document.querySelector('button.removeitem');

additemButton.addEventListener('click',() =>
{
	let ul = document.getElementsByTagName('ul')[0];
	let li = document.createElement('li');
	li.textContent = inputItem.value;
	ul.appendChild(li);
	inputItem.value = '';                                                           //auto clear the i/p
})

removeitemButton.addEventListener('click',() =>
{
	let ul = document.getElementsByTagName('ul')[0];
	let li = document.querySelector('li:last-child')
	ul.removeChild(li)
})
