const brandName = document.querySelector("input[name='brandname']");
const brandColor = document.querySelector("input[name='color']");
const logoSize = document.querySelector("input[name='fontsize']");
// const submitButton = document.querySelector("button");
const form = document.querySelector("form");
const results = document.querySelector("#results");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(logoSize.value);
    results.innerHTML = `<span style="color: ${brandColor.value}; font-size: ${logoSize.value}px">${brandName.value}<span/>`
})

// console.log(form);
