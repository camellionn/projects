// Put your checkEmotion and speak functions here! ✨
// See ./original.js for their older JavaScript code.

/*
function checkEmotion(knownEmotions, emotion, callback) {
	// Simulate database processing time by waiting a second...
	setTimeout(() => {
		callback(knownEmotions.has(emotion));
	}, 1000);
}
*/

async function checkEmotion(knownEmotions, emotion) {
	// Simulate database processing time by waiting a second...
	await new Promise((resolve) => {
		setTimeout(resolve, 1000);
	});

	return knownEmotions.has(emotion);
}

/*
function speak(knownEmotions, newEmotion, phrase, callback) {
	checkEmotion(knownEmotions, newEmotion, (hasEmotion) => {
		if (hasEmotion) {
			callback(`"${phrase}" (${newEmotion})`);
		} else {
			callback(
				undefined,
				new Error(`Does not compute. I do not understand ${newEmotion}.`)
			);
		}
	});
} 
*/

async function speak(knownEmotions, newEmotion, phrase) {
	if (!(await checkEmotion(knownEmotions, newEmotion))) {
		throw new Error(`Does not compute. I do not understand ${newEmotion}.`);
	}

	return `"${phrase}" (${newEmotion})`;
}

module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;
