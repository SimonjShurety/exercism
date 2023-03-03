// https://exercism.org/tracks/javascript/exercises/poetry-club-door-policy

// Get the first letter of a sentence

function frontDoorResponse(line) {
	return line[0];
}

console.log(frontDoorResponse('SUMMER'));

// Capitalise a word

export function frontDoorPassword(word) {
	return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

// Get the last letter of a sentence

console.log(frontDoorPassword('SUMMER'));

function backDoorResponse(line) {
	const noWhiteSpace = line.trim();
	return noWhiteSpace.slice(noWhiteSpace.length - 1);
}

console.log(backDoorResponse('hold my    beer  '));

// Be polite

function backDoorPassword(word) {
	return frontDoorPassword(word) + ', please';
}

console.log(backDoorPassword('sheep'));
