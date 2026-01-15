const gridBtn = document.querySelector(".grid-btn");
let count = 0;
gridBtn.addEventListener("click", () => {
    count = Number(prompt("Grid: "));
    count *= count;
    console.log(count);
});