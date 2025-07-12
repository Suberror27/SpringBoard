document.addEventListener("DOMContentLoaded", (e) => {
    const boxContainer = document.querySelector("#box-container");
    const newBoxButton = document.querySelector("#new-box-button");
    const colorForm = document.querySelector("#color-form");
    const colorInput = document.querySelector("#color-input");

    let boxColor;
    let boxCounter = 0;

    colorForm.addEventListener("submit", (e) => {
        e.preventDefault();
        boxColor = colorInput.value;
        const allBoxes = document.querySelectorAll(".box");
        for (let box of allBoxes) {
            box.style.border = `1px solid ${boxColor}`;
        }
        colorInput.value = "";
    })

    function addNewBox() {
        boxCounter ++;
        const newBox = document.createElement("div");
        newBox.textContent = boxCounter;
        newBox.classList.add("box");
        newBox.style.border = `1px solid ${boxColor}`;
        newBox.dataset.id = boxCounter;
        boxContainer.append(newBox);
    }

    newBoxButton.addEventListener("click", (e) => {
        e.preventDefault();
        addNewBox();
    })

    document.addEventListener("keypress", (e) => {
        if (e.target.id === "color-input") {
            return e;
        } else {
            if (e.key === "n" || e.key === "N") {
                addNewBox();
            }
        }
    })

    boxContainer.addEventListener("dblclick", (e) => {
        e.preventDefault();
        if (e.target.classList.contains("box")) {
            e.target.remove();
        } 
    })

    boxContainer.addEventListener("mouseover", (e) => {
        e.preventDefault();
        if (e.target.classList.contains("box")) {
            const metaData = e.target.getBoundingClientRect()
            const positionX = metaData.left + window.scrollX;
            const positionY = metaData.top + window.scrollY;
            e.target.textContent = `X:${positionX}, Y:${positionY}`;
        } 
    })

    boxContainer.addEventListener("mouseout", (e) => {
        e.preventDefault();
        if (e.target.classList.contains("box")) {
            e.target.textContent = e.target.dataset.id;
        } 
    })
});