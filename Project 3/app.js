const imageUrl = document.querySelector("#imageUrl");
const textOnTop = document.querySelector("#topText");
const textOnBottom = document.querySelector("#bottomText");
const submitButton = document.querySelector("#submitMeme");
const memeForm = document.querySelector("#memeForm");
const memeSectionDiv = document.querySelector("#memeDivContainer");

memeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(imageUrl.value);
    
    const newMemeDiv = document.createElement("div");
    const newTopTextDiv = document.createElement("div");
    const newBottomTextDiv = document.createElement("div");
    const newTopTextP = document.createElement("p");
    const newBottomTextP = document.createElement("p");
    const newOverlay = document.createElement("div");

    newOverlay.classList.add("memeOverlay");

    newMemeDiv.classList.add("memeImageDiv");
    newMemeDiv.style.backgroundImage = `url('${imageUrl.value}')`;

    newTopTextDiv.classList.add("topTextContainer", "memeTextStyle");
    newTopTextP.textContent = textOnTop.value;
    newTopTextDiv.append(newTopTextP);

    newBottomTextDiv.classList.add("bottomTextContainer", "memeTextStyle");
    newBottomTextP.textContent = textOnBottom.value;
    newBottomTextDiv.append(newBottomTextP);

    newMemeDiv.append(newOverlay, newTopTextDiv, newBottomTextDiv);

    memeSectionDiv.append(newMemeDiv);

    imageUrl.value = "";
    textOnTop.value = "";
    textOnBottom.value = "";
});

memeSectionDiv.addEventListener("mouseover", (e) => {

    if (e.target.classList.contains("memeOverlay")) {
        e.target.style.backgroundColor = "rgba(128, 128, 128, 0.8)";

        // Check if X already exists, if not create it
        if (!e.target.querySelector(".closeX")) {
            const x = document.createElement("div");
            x.className = "closeX";
            x.textContent = "X";
            e.target.appendChild(x);
            x.style.display = "block";
        }
    }
})

memeSectionDiv.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("memeOverlay")) {
        e.target.style.backgroundColor = "";

        const x = e.target.querySelector(".closeX");
        if (x) {
            x.remove();
        }
    }
});

memeSectionDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("memeOverlay")) {
        e.target.parentElement.remove();
    }
});



{/* <div class="memeImageDiv">
    <div class="topTextContainer memeTextStyle">
        <p>Top Text</p>
    </div>
    <div class="bottomTextContainer memeTextStyle">
        <p>Bottom Text</p>
    </div>  
</div> */}