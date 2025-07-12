const ul = document.querySelector("#cars");

ul.addEventListener("click", (e) => {
    console.log(e.target.getAttribute("data-id"));
    e.target.dataset.model = "Model X";
    e.target.dataset.sold = true;
    console.log(e.target.dataset);
})