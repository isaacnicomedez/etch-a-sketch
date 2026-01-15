const input = document.querySelector("input");
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const inputValue = input.value;
        input.focus();
        input.value = "";

        if (inputValue > 100) return;
        
        renderPixels(inputValue);
    }
});

const btnBlack = document.querySelector(".black");
const btnRainbow = document.querySelector(".rainbow");

btnBlack.addEventListener("click", () => handleHover("black"));
btnRainbow.addEventListener("click", () => handleHover("rainbow"));



function renderPixels(count) {
    const container = document.querySelector(".container");
    container.innerHTML = "";

    for (let i = 0; i < count * count; i ++) {
        const div = document.createElement("div");

        div.classList.add("inner-div");
        div.style.flexBasis = `${100 / count}%`;
        console.log(div.style.flexBasis);
        container.appendChild(div);
    }
}

function handleHover(color) {
    const divs = document.querySelectorAll(".inner-div");
    
    divs.forEach(div => {
        div.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = color === "black" ? `rgb(0,0,0)` : `rgb(${Math.floor((Math.random() * 255) + 1)}, ${Math.floor((Math.random() * 255) + 1)}, ${Math.floor((Math.random() * 255) + 1)})`;
        });
    });
}