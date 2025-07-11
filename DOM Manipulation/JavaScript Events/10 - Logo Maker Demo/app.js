const brandName = document.querySelector("input[name='brandname']");
const brandColor = document.querySelector("input[name='color']");
const logoSize = document.querySelector("input[name='fontsize']");
const form = document.querySelector("form");
const results = document.querySelector("#results");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newLogo = document.createElement("span");
    const brTag = document.createElement("br");
    newLogo.style.fontSize = `${logoSize.value}px`;
    newLogo.style.color = `${brandColor.value}`;
    newLogo.textContent = `${brandName.value}`;
    results.append(newLogo);
    results.append(brTag);
})

