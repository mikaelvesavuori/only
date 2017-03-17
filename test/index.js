"use strict";

import "babel-polyfill";
import App from "../index";
import { expect } from "chai";

describe("Application", () => {
	describe("WelcomeMessage", () => {
		it("should give the welcome message", () => {
			expect(new App().welcomeMessage()).to.equal("Welcome to ES6");
		})
	})
});
