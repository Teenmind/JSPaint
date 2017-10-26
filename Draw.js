var canvas = document.getElementById("canField");
var context = canvas.getContext("2d");

canvas.onmousedown = StartDrawing;
canvas.onmousemove = Drawing;

var x = 0;
var y = 0;

var lineTh = 3;
var lineColor = "#000000";



function StartDrawing(e) 
{       
    x = e.offsetX;
    y = e.offsetY;
}
function Drawing(e)
{
    if(e.buttons == 1)
    {
        context.beginPath();
        context.moveTo(x,y);
        context.lineTo(e.offsetX, e.offsetY);
        context.lineWidth = lineTh;
        context.strokeStyle = lineColor;
        context.stroke();
        x = e.offsetX;
        y = e.offsetY;      
    }
    else
    {
        context.closePath();
    }
}