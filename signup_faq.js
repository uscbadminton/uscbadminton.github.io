// collapsible signup FAQ
var acc = document.getElementsByClassName("accordion");
var i;

for (i=0; i < acc.length; i++) {
	// takes in a click action and defines a function
	acc[i].addEventListener("click", function() {
		// toggle between hiding and showing the active panel
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		}
		else {
			panel.style.display = "block";
		}
	});
}