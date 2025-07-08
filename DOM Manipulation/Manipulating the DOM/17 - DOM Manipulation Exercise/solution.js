// Task 1: ✅
const task1 = document.getElementById("task1");
task1.innerText = "I changed this content using innerText";

// Task 2: ✅
const task2 = document.querySelector("#task2");
task2.innerHTML = "<button>Button added with innerHTML</button>";

// Task 3: ✅
document.body.style.backgroundColor = "#232323";

// Task 4: ✅
const task4 = document.querySelectorAll(".item");
for (let item of task4) item.style.border = "solid 1px black";

// Task 5: ✅
const task5 = document.querySelector("div.task a#task5");
task5.setAttribute("href", "https://www.springboard.com/");

// Task 6: ✅
const task6 = document.querySelector("div.task input#task6");
task6.value = "DOM Master";

// Task 7: ✅
const task7 = document.getElementById("task7");
task7.classList.add("new-class");

// Task 8: ✅
const task8 = document.getElementById("task8");
const newButton = document.createElement("button");
newButton.textContent = "New Button";
task8.append(newButton);

// Task 9: ✅
const task9 = document.querySelector("#task9");
task9.remove();