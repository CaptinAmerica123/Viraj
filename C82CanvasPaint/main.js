canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="blue";
var mouseevent="empty";
var lastposofx,lastposofy;widthofline=1;
canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e){
    mouseevent="mouseDown";
}

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e){
    mouseevent="mouseUP";
}
canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e){
    mouseevent="mouseleave";
}

canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e){
    currentpositionofmousex=e.clientX-canvas.offsetLeft;
    currentpositionofmousey=e.clientY-canvas.offsetTop;

    if (mouseevent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle="red";
        ctx.lineWidth=1;
         
        ctx.moveTo(lastposofx,lastposofy);
        ctx.lineTo(currentpositionofmousex,currentpositionofmousey);
        ctx.stroke()
    }
}