const words = [
    "Abraham",
    "Camargo",
    "Trujillo",
    "Itzel",
    "Guadalupe",
    "Luna",
    "Martinez",
    "tskts"
];


const longWords = words.filter((word, i, arr) => {
    return word.length >= 9
})

const containsB = words.filter((word, i, arr) => {
    return word.includes("b");
});

const noVowels = words.filter((word, i, arr) => {
    return !(
        word.toLocaleLowerCase().includes("a") || 
        word.toLocaleLowerCase().includes("e") ||  
        word.toLocaleLowerCase().includes("i") || 
        word.toLocaleLowerCase().includes("o") || 
        word.toLocaleLowerCase().includes("u")
    )
})

// console.log(longWords);
// console.log(containsB);
console.log(noVowels);