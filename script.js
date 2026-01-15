
function getCount() {
    const input = document.querySelector("input");
    const btn = document.querySelector("button");
    let count = 0;

    btn.addEventListener("click", () => {
        count = input.value;
        input.focus();
        input.value = "";
        createCanvas(count);
    });
}

function createCanvas(count) {
    const container = document.querySelector(".container");
    container.innerHTML = ""; 

    for (let i = 0; i < count; i++) {
        const div = document.createElement("div");

        div.classList.add("inner-div");
        container.appendChild(div);
        checkHover(div);
    }
}

function checkHover(div) {
    div.addEventListener("mouseenter", () => div.classList.add("entered"));
    div.addEventListener("mouseleave", () => div.classList.remove("entered"));
}

getCount();