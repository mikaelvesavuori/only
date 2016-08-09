var font = new FontFaceObserver('Inconsolata', {
	weight: 300
});

font.load().then(function () {
		console.log('Font is available');
	},
	function () {
		console.log('Font is not available');
});