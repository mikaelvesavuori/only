(function asyncFontLoading() {
	let html = document.documentElement;

	if (sessionStorage.fontsLoaded) {
		html.classList.add("fonts-loaded");
	}
	else {
		let script = document.createElement("script");
		script.src = "app/scripts/compiled/vendors.min.js"; //vendor/fontfaceobserver.js
		script.async = true;

		script.onload = function () {
			let fontname = new FontFaceObserver("", {
				weight: "regular"
			});

			Promise.all([
				fontname.load()
			])
			.then(function () {
				html.classList.add("fonts-loaded");
				sessionStorage.fontsLoaded = true;
			});
		};
		document.head.appendChild(script);
	}
})();
