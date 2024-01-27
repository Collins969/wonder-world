//for welcoming guest
//created by ASIIMWE COLLINS 
let welcome = prompt("Please enter your name","Collins");
if (welcome != null){
    document.getElementById("heading").innerHTML= welcome+"'s"+" NOTEBOOK" ;

}

let el = document.getElementById("entry");
let btn = document.getElementById("addtext");
let item = document.getElementById("parent");

function add(){
let paragraph = document.createElement("p");
item.appendChild(paragraph);
paragraph.innerHTML = el.value;
	}
 btn.onclick = add;//for adding text 

 let btd = document.getElementById("removetext");
 function remove(){
 	let paragraph = document.createElement("p");
 	item.removeChild(item.lastChild);
 }
btd.onclick = remove;//for removing text

let btnColor1 = document.getElementById("light");
let btnColor2 = document.getElementById("dark");
 function lightMode(){
 	let one = document.querySelector("link");
 	one.href ="lightheme.css";//light mode function
		 }
 btnColor1.onclick = lightMode;
 function darkMode(){
  	let one = document.querySelector("link");
 	one.href ="darktheme.css";
    	}
 btnColor2.onclick = darkMode;//dark mode function

