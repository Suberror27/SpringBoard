const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

// ## Step 1 🧩 Caesar remembers he forgot to add his best friend "BRUTUS" to the list. Add him to the beginning of the list.
guests.unshift("BRUTUS");

// ## Question 1 🤔 How can you verify that "BRUTUS" was added to the beginning of the array?
// We can console.log() the array to verify BRUTUS is now inside and in the first spot of the array.

// ## Step 2 🧩 A herald announced the arrival of "AUGUSTUS" and "LUCIA". Add them to the end of the guest list.
guests.push("AUGUSTUS", "LUCIA");

// ## Step 3 🧩 Caesar is curious. He wants to know if "SPARTACUS" has been invited. Check if he's on the list and find out at which position.
const spartacusCheck = guests.includes("SPARTACUS"); // Returns false because SPARTACUS is not on the list :(

// ## Question 2 🤔 What would the value of `spartacusIndex` be if "SPARTACUS" wasn't invited?
// It would be -1 becuase it does not exist on the array

// ## Step 4 🧩 Oops! Caesar just received a message that "CASSIUS" won't be able to make it. Remove him from the list.
const cassiusCheck = guests.includes("CASSIUS");

if (cassiusCheck == true) {
    const cassiusIndex = guests.indexOf("CASSIUS");
    guests.splice(cassiusIndex, 1);
} else {
    console.log("Couldn't locate CASSIUS")
}

// ## Step 5 🧩 Caesar wants to send a special invite to the first three guests on the list. Extract these names into a new array.
const firstThreeGuests = guests.slice(0, 3);

// ## Step 6 🧩 Caesar decides he wants the guest list in alphabetical order. Sort the array. 
// However, Caesar wants his most honored guest (the one added first) to remain at the top of the list. 
// Can you think of a way to sort the guests but keep the honored ones at the top?
const splitBrutus = guests.slice(0, 1); // We first remove Brutus for later on set him up front on the list
const splitOtherGuests = guests.slice(1) // We grab the rest of the guests
const sortedGuestWithBrutusUpFront = splitBrutus.concat(splitOtherGuests.sort()); //We concat Brutus with the rest of the guests being sorted alphabetically

// console.log(sortedGuestWithBrutusUpFront);
// console.log(guests);