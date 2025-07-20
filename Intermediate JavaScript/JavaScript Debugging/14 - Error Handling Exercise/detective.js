let vacationDays = 0;

function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
	{
		console.log("The operation is completed successfully!");
		vacationDays += 13;
	}
	else
	{
		vacationDays += 1;
		throw new Error("The operation is failed mysteriously!");
	}
}

function run20Missions() {
	for (let i = 0; i < 20; i++) {
		try {
			mysteryOperation();
		} catch (error) {
			// console.log(error);
		} finally {
			vacationDays += 3;
		}
	}

	console.log("You deserve " + vacationDays + " days of vacations!");
}

run20Missions();


