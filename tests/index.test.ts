import greet from "@/utils/greet.js";

describe("Test", () => {
	test("Greet", () => {
		const message = greet("World");
		expect(message).toBe("Hello World!");
	});
});
