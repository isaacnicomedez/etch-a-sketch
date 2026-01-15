
function getCount() {
    const input = document.querySelector("input");
    const btn = document.querySelector("button");
    let count = 0;

    btn.addEventListener("click", () => {
        count = input.value;
    });
}