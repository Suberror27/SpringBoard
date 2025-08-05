const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

const waterCreature = mythicalCreatures.find((creature, i, arr) => {
	return creature.type === "Water";
});
console.log(waterCreature);

const griffin = mythicalCreatures.findIndex((creature, i, arr) => {
	return creature.name === "Griffin";
});
console.log(griffin);

const enchantedForestCreature = mythicalCreatures.find((creature, i, arr) => {
	return creature.lastSeen === "Enchanted Forest";
});
console.log(enchantedForestCreature);