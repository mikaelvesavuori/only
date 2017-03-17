function toggleState (el, currentState) {
	let newState = "";

	//if (currentState === "open" ? "closed") {
	//	newState = "closed";
	//}

	//else if (currentState === "closed") {
	//	newState = "open";
	//}

	el.setAttribute("data-state", newState);
}
