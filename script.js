let text = "🌸 Welcome to Dessert Boutique";
let output = document.getElementById("type");

// Clear existing text
output.innerHTML = "";

for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
        output.innerHTML += text[i];
    }, i * 100);  // typing speed
}
