// collapsible signup FAQ
var acc = document.getElementsByClassName("accordion");
var i;

for (i=0; i < acc.length; i++) {
	// takes in a click action and defines a function
	acc[i].addEventListener("click", function() {

		this.classList.toggle("active");

		// toggle between hiding and showing the active panel
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		}
		else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
		/* 
		This commented code will made the panel dropdown WITHOUT a transition
		
		if (panel.style.display === "block") {
			panel.style.display = "none";
		}
		else {
			panel.style.display = "block";
		} */
	});
}