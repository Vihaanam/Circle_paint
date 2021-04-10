canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
colour = "black";
width = 1;
radius = 40;
mouse_event = "";
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    colour = document.getElementById("input_colour").value;
    radius = document.getElementById("input_radius").value;
    width = document.getElementById("input_width").value;
    mouse_event = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_mouse_x = e.clientX - canvas.offsetLeft;
    current_mouse_y = e.clientY - canvas.offsetTop;
    if (mouse_event == "mouseDown") {
        console.log("X = " + current_mouse_x + ", Y = " + current_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;
        ctx.arc(current_mouse_x, current_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouse_event = "mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouse_event = "mouseLeave";
}
function clear_it() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}