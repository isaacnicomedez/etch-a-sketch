
function getCount() {
    const input = document.querySelector("input");
    const btn = document.querySelector("button");
    let count = 0;

    btn.addEventListener("click", () => {
        count = input.value;
        createCanvas(count);
    });
}

function createCanvas(count) {
    for (let i = 0; i < count; i++) {
        const container = document.querySelector(".container");
        const div = document.createElement("div");

        div.classList.add("inner-div");
        container.appendChild(div);
    }
}

getCount();