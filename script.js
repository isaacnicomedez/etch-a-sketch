const input = document.querySelector("input");
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const inputValue = input.value;
        input.focus();
        input.value = "";

        if (inputValue > 100) return;
        
        renderPixels(inputValue);
        handleHover();
    }
})

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

function handleHover() {
    const divs = document.querySelectorAll(".inner-div");

    divs.forEach(div => {
        div.addEventListener("mouseenter", (e) => e.target.classList.add("entered"));
    });
}