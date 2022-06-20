var form = document.querySelector("form");
let display = document.getElementById("factdisplay");
let body = document.querySelector("body");
let main = document.querySelector("main");
let inputs = document.querySelectorAll("input");

window.onload = function () {
	form.btn1.onclick = function () {
		showFact1();
	}
	
	form.btn2.onclick = function () {
		showFact2();
	}
	
	form.btn3.onclick = function () {
		showFact3();
	}
	
	form.btn4.onclick = function () {
		showFact4();
	}
	
	form.btn5.onclick = function () {
		showFact5();
	}
}

function showFact1() {
	
	display.innerHTML = "The biggest reason for pouring salt on icy roads is that salt lowers the freezing point of water. Water normally freezes at 32 degrees Fahrenheit, but when you add salt, that threshold drops to 20 degrees (or even 2 degrees) Fahrenheit.";
	display.innerHTML += "<img src='images/fact1.jpg' alt='image of fact1'>"
	body.style.backgroundColor = "#0A2342";
	main.style.backgroundColor = "#2CA58D";
	main.style.color = "#2CA58D";
	for (let i = 0 ; i < inputs.length ; i++) {
		inputs[i].style.color = "#84BC9C";
		inputs[i].style.backgroundColor = "#F46197";
	}
	
}

function showFact2() {
	
	display.innerHTML = "The origin of the nickname Big Ben is the subject of some debate. The nickname was applied first to the Great Bell; it may have been named after Sir Benjamin Hall, who oversaw the installation of the Great Bell, or after boxing's English Heavyweight Champion Benjamin Caunt.";
	display.innerHTML += "<img src='images/fact2.jpg' alt='image of fact2'>"
	body.style.backgroundColor = "#A39171";
	main.style.backgroundColor = "#DCC9B6";
	main.style.color = "#ABC4AB";
	for (let i = 0 ; i < inputs.length ; i++) {
		inputs[i].style.color = "#727D71";
		inputs[i].style.backgroundColor = "#6D4C3D";
	}
	
}

function showFact3() {
	
	display.innerHTML = "Before the completion of the human genome project, many scientists were expecting to find 100,000 or more genes in our genome. This was based on the assumption that because we are one of the most complex creatures on Earth we should have lots of genes. However, it turned out we only have around 24,000 genes.";
	display.innerHTML += "<img src='images/fact3.jpg' alt='image of fact3'>"
	body.style.backgroundColor = "#3C91E6";
	main.style.backgroundColor = "#FA824C";
	main.style.color = "#A2D729";
	for (let i = 0 ; i < inputs.length ; i++) {
		inputs[i].style.color = "#FAFFFD";
		inputs[i].style.backgroundColor = "#342E37";
	}
	
}

function showFact4() {
	
	display.innerHTML = "Humans, chimpanzees, gorillas, orangutans and their extinct ancestors form a family of organisms known as the Hominidae. Researchers generally agree that among the living animals in this group, humans are most closely related to chimpanzees, judging from comparisons of anatomy and genetics.";
	display.innerHTML += "<img src='images/fact4.jpg' alt='image of fact4'>"
	body.style.backgroundColor = "#C04ABC";
	main.style.backgroundColor = "#419D78";
	main.style.color = "#E0A458";
	for (let i = 0 ; i < inputs.length ; i++) {
		inputs[i].style.color = "#2D3047";
		inputs[i].style.backgroundColor = "#FFDBB5";
	}
	
}

function showFact5() {
	
	display.innerHTML = "Most natural diamonds are formed at high temperature and pressure at depths of 140 to 190 kilometers (87 to 118 mi) in the Earth's mantle. Carbon-containing minerals provide the carbon source, and the growth occurs over periods from 1 billion to 3.3 billion years (25% to 75% of the age of the Earth).";
	display.innerHTML += "<img src='images/fact5.jpg' alt='image of fact5'>"
	body.style.backgroundColor = "#5ADBFF";
	main.style.backgroundColor = "#094074";
	main.style.color = "#FFDD4A";
	for (let i = 0 ; i < inputs.length ; i++) {
		inputs[i].style.color = "#FE9000";
		inputs[i].style.backgroundColor = "#3C6997";
	}
	
}