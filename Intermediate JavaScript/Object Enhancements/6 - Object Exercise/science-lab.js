/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.

const name = "Abraham";
const age = 35;
const studyField = "Data Systems";

const participant = { name, age, studyField };


/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.


const participantWithMethod = {
  ...participant,
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Field: ${this.studyField}`);
  }
};

participantWithMethod.displayInfo(); // Output: Name: Abraham, Age: 35, Field: Data Systems


/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.

const participantWithArrow = {
  ...participant,
  displayInfo: () => {
    console.log(`Name: ${this.name}, Age: ${this.age}, Field: ${this.studyField}`);
  }
};

participantWithArrow.displayInfo(); // Output may be: Name: undefined, Age: undefined, Field: undefined


/*
 * Observations:

/*
 * Arrow functions do not have their own `this` context.
 * Instead, they inherit `this` from the surrounding lexical scope.
 * In this case, `this` does not refer to `participantWithArrow`, so properties are `undefined`.
 * Use regular function syntax for object methods when you need access to `this`.
 */
 

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.

function updateParticipantInfo(obj, propName, value) {
  return {
    ...obj,
    [propName]: value
  };
}

// Example usage:
const updatedParticipant = updateParticipantInfo(participant, "age", 36);
console.log(updatedParticipant); // { name: "Abraham", age: 36, studyField: "Data Systems" }
