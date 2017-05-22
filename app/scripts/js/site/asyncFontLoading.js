/*
(function asyncFontLoading() {
	let html = document.documentElement;

	if (sessionStorage.fontsLoaded) {
		html.classList.add("fonts-loaded");
	}
	else {
		let script = document.createElement("script");
		script.src = "scripts/compiled/vendors.min.js"; //vendor/fontfaceobserver.js
		script.async = true;

		script.onload = function() {
			let fontname = new FontFaceObserver("InputMono", {
				weight: "regular"
			});

			Promise.all([
				fontname.load()
			])
			.then(function() {
				html.classList.add("fonts-loaded");
				sessionStorage.fontsLoaded = true;
			})
			.catch(function(e) {
				console.log(e);
			});
		};
		document.head.appendChild(script);
	}
})();
*/
