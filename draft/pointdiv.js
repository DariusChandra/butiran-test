/*
	pointdiv.js
	Draw points to form circle using HTML div tag and CSS
	
	Copyright 2014 Sparisoma Viridi
	Release under the MIT license
	https://github.com/dudung/LineChart.js/blob/master/LICENSE
		
	20140418
	Start the script.
	20180224
	Change the name from Pointdiv.js to pointdiv.js for
	consistency with with butiran.
*/

var parent = document.body;
var linesteps = 1000;
var linewidth = 1;
var linecolor = "black";

function setlinecolor(lc) {
	linecolor = lc;
}
function setlinewidth(lw) {
	linewidth = lw;
}
function setlinestep(ls) {
	linesteps = ls;
}
function setparent(p) {
	parent = p;
}

function point(x, y) {
	var div = document.createElement("div");
	div.style.width = linewidth;
	div.style.height = linewidth;
	div.style.background = linecolor;
	div.style.position = "absolute";
	div.style.left = x;
	div.style.top = y;
	div.innerHTML = "";
	
	var xmin = 0;
	var ymin = 0;
	var xmax = document.getElementById(parent).style.width;
	xmax = xmax.substr(0, xmax.length-2);
	var ymax = document.getElementById(parent).style.height;
	ymax = ymax.substr(0, ymax.length-2);
		
	if( (xmin < x) && (x < xmax) && (ymin < y) && (y < ymax)) {
		document.getElementById(parent).appendChild(div);
	}
}

function circle(x, y, R) {
	for(var s = 0; s < linesteps; s++) {
		var th = 360.0 * s / linesteps;
		var xx = x + R * Math.cos(th);
		var yy = y + R * Math.sin(th);
		point(xx, yy, linecolor, parent);
	}
}
