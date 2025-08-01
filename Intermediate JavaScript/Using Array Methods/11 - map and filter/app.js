const allInputs = document.querySelectorAll('input[type="checkbox"]');

const checkedOnly = Array.from(allInputs).filter((input, i, arr) => {
    return input.checked;
});

const whatWasDone = checkedOnly.map((task, i, arr) => {
    return task.parentElement.innerText;
});


console.log(whatWasDone);

