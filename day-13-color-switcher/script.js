/**
 * Day 13 - Color Switcher
 * Javascript 30 Day Challenge
 *
 * Interactive color switcher built with a single delegated
 * click listener. Applies swatch colors to the page background,
 * highlights the active swatch, and generates random hex colors.
 */

const swatches = document.querySelector("#swatches");
swatches.addEventListener("click", (event) => {

    if (!event.target.classList.contains("swatch")) return;
    let color;

    if (event.target.id === "random-btn") {
        const chars = "0123456789abcdef";
        color = "#";
        for (let i = 0; i < 6; i++) {
            color = color + chars[Math.floor(Math.random() * 16)];
        }
    } else {
        color = event.target.dataset.color;
    }

    document.body.style.backgroundColor = color;
    document.querySelectorAll(".swatch").forEach((btn) => {
        btn.style.border = "";
    });
    event.target.style.border = "3px solid black";
});

console.log("Color Switcher script loaded.");