const list = document.querySelector("ul");
const button = document.getElementById("button")

button.addEventListener('click', () => {
	if (list.style.display == "none"){
		list.style.display = "block";
		button.textContent = "Hide List";
	}else{
		list.style.display = "none";
		button.textContent= "Show List";
	}
})


