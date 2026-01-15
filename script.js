const input = document.querySelector("input");
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const inputValue = input.value;
        input.focus();
        input.value = "";
        renderPixels(inputValue);
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