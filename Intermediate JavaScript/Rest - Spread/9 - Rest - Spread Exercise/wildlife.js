/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function sightings(...animals) {
	animals.forEach(animal => {
		console.log(`Sighting: ${animal}`);
	});
}


/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
const protectedAreas = [...forestHabitats, ...savannahHabitats];


/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.
const updatedRhinoStatus = {
	...rhinoStatus,
	population: 100,
};


/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
const lionProfileCopy = { ...lionProfile };

lionProfileCopy.genetics = {
	parentage: "Wild",
	dnaMarkers: ["A1", "B3", "C2"]
};

console.log("Original:", lionProfile);
console.log("Copy:", lionProfileCopy);


// Modifying nested data
lionProfileCopy.genetics.dnaMarkers.push("D5");

console.log("Modified Copy:", lionProfileCopy);
/*
 * Observations:
 * TODO: Explain here.
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
const ecosystemCopy = { ...ecosystemHealth };

// Modify a nested property in the copy
ecosystemCopy.foodSupply.herbivores = "Declining";

// Output both to observe effects
console.log("Original:", ecosystemHealth);
console.log("Copy:", ecosystemCopy);

/*
 * Observations:
 * TODO: Explain here.
 */
