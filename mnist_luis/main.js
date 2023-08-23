const canvas = document.getElementById("drawing-canvas");
const ctx = canvas.getContext("2d");
const canvasSize = 280; // Tamaño del lienzo
const pixelSize = canvasSize / 28; // Tamaño de cada píxel en el lienzo
let isDrawing = false;

canvas.addEventListener("mousedown", () => {
    isDrawing = true;
});

canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    ctx.beginPath();
});

canvas.addEventListener("mousemove", (event) => {
    if (!isDrawing) return;

    const x = Math.floor((event.clientX - canvas.getBoundingClientRect().left) / pixelSize);
    const y = Math.floor((event.clientY - canvas.getBoundingClientRect().top) / pixelSize);

    ctx.fillStyle = "black";
    ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
	
});
	
	
const eraseButton = document.getElementById("erase-button");
eraseButton.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	
	

});