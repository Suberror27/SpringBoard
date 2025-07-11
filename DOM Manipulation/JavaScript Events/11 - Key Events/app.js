// document.body.addEventListener("keypress", (e) => {
//     e.preventDefault();
//     document.body.innerHTML = `<h1 style="font-size: 4rem;">You pressed the <span style="color: red;">${e.key.toUpperCase()}</span> key!</h1>`
// })

// document.body.addEventListener("keydown", (e) => {
//     e.preventDefault();
//     document.body.innerHTML = `<h1 style="font-size: 4rem;">You pressed the <span style="color: red;">${e.key.toUpperCase()}</span> key!</h1>`
// })

document.body.addEventListener("keyup", (e) => {
    e.preventDefault();
    document.body.innerHTML = `<h1 style="font-size: 4rem;">You pressed the <span style="color: red;">${e.key.toUpperCase()}</span> key!</h1>`
})