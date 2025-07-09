const body = document.body;
// pointermove could also work
body.addEventListener("mousemove", (e) => {
    const xValue = Math.round((e.pageX / window.innerWidth) * 255);
    const yValue = Math.round((e.pageY / window.innerHeight) * 255);
    // const thirdvalue = Math.round((xValue + yValue) / 2);

    body.style.backgroundColor = `rgb(${xValue}, 0, ${yValue})`;
});