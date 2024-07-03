// Put your announceMachines function here! ✨
// See ./original.js for its older JavaScript code.

/*

In `index.js`, export an `announceMachines` function that:

- Uses `let` and `const` instead of `var` for variables
- Uses `...` spread for arguments instead of `arguments`
- Uses a `for`-`of` loop instead of a loop
- Uses <code>\`</code> template string literal concatenation instead of `+`

*/

function announceMachines(announce, ...machines) {
	let labelsCount = 0;

	for (const machine of machines) {
		let label;

		if (machine.label) {
			label = machine.label;
			labelsCount += 1;
		} else {
			label = `Make: ${machine.make}; Model: ${machine.model}`;
		}

		announce(label);
	}

	return labelsCount;
}

module.exports.announceMachines = announceMachines;
