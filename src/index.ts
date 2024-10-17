import * as core from "@actions/core";
import greet from "@/utils/greet.js";

try {
	const name = core.getInput("who-to-greet");
	const message = greet(name);
	core.setOutput("message", message);
} catch (error) {
	if (error instanceof Error) core.setFailed(error.message);
}
