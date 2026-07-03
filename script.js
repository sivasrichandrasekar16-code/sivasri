function showMessage() {
    alert("Welcome to My Shopping Store!");
}

let buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Product Added to Cart!");
    });
});
