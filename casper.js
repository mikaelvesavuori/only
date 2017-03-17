casper.
	start("http://localhost:3000/").
	then(function() {
		phantomcss.screenshot("html");
	});

casper.run();

/*
Example interactions:

this.mouse.move(".button");

this.fill("form#loginform", {
	"log": "admin",
	"pwd": "password"
}, true);

this.click("#wp-submit");

*/
