const cursorDot = document.getElementById("cursor-dot");
const cursorOutline = document.getElementById("cursor-outline");

window.addEventListener("mousemove", function(i) {
    const positionX = i.clientX;
    const positionY = i.clientY;

    cursorDot.style.left = `${positionX}px`;
    cursorDot.style.top = `${positionY}px`;

    cursorOutline.style.left = `${positionX}px`;
    cursorOutline.style.top =  `${positionY}px`;

    cursorOutline.animate({
        left: `${positionX}px`,
        top: `${positionY}px`
    }, {duration:500, fill: "forwards" });
});


