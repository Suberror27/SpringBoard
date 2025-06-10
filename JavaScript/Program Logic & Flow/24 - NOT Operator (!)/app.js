const age = 27;
const userName = "Abraham";
const decision = false;

if (!decision !== false || age >= 18) {
    console.log("Passed evaluation!")
} else {
    console.log("Did not pass evaluation")
};

const flavor = "grape";

// if (flavor !== "grape" && flavor !== "cherry") {
//     console.log("WE DO NOT HAVE THAT FLAVOR!")
// } else {
//     console.log("WE HAVE IT!")
// }

// Same as the above, but negating the whole expresion surrounding everything is () and using ! at the start
if (!(flavor === "grape" || flavor === "cherry")) {
    console.log("WE DO NOT HAVE IT!")
} else {
    console.log("WE HAVE IT!")
}