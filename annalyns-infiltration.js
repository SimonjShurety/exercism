// The fast attack is available when the knight is sleeping

const knightIsAwake = false;
const archerIsAwake = false;
const prisonerIsAwake = true;

function canExecuteFastAttack(knightIsAwake) {
	return !knightIsAwake;
}

console.log(canExecuteFastAttack(knightIsAwake));

// can spy > when everyone is asleep

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
	return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

console.log(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake));

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
	return prisonerIsAwake && !archerIsAwake;
}

// Logical operators in the order of their precedence (from highest to lowest): !, &&, ||.

console.log(canSignalPrisoner(true, false));

function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
	return (!knightIsAwake && !archerIsAwake && prisonerIsAwake) || (!archerIsAwake && petDogIsPresent);
}

console.log(canFreePrisoner(false, false, false, false, true));
