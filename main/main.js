// CSS Variable Declaration
let nav_bar_height = 10;
let main_space_height = 100 - nav_bar_height;
let ui_sidebar_height = 100;

let nav_bar_width = 80;
let main_space_width = nav_bar_width;
let ui_sidebar_width = 100 - nav_bar_width;

// Assigning all CSS properties
document.getElementById("top-nav-bar").style.height = nav_bar_height + "%";
document.getElementById("top-nav-bar").style.width = nav_bar_width + "%";

document.getElementById("top-nav-bar-content").style.height = nav_bar_height + "%";
document.getElementById("top-nav-bar-content").style.width = nav_bar_width + "%";

document.getElementById("main-space").style.height = main_space_height + "%";
document.getElementById("main-space").style.width = main_space_width + "%";

document.getElementById("main-content").style.height = (main_space_height - 5) + "%";
document.getElementById("main-content").style.width = (main_space_width - 2) + "%";

document.getElementById("ui-sidebar").style.height = ui_sidebar_height + "%";
document.getElementById("ui-sidebar").style.width = ui_sidebar_width + "%";

document.getElementById("ui-sidebar-content").style.height = ui_sidebar_height + "%";
document.getElementById("ui-sidebar-content").style.width = (ui_sidebar_width - 2) + "%";

// All the drawing and interactive stuff
// Setup runs once at the start of the website load
function setup() {
	let canvas_width = nav_bar_width * windowWidth * 0.01;
	let canvas_height = main_space_height * windowHeight * 0.02;
	
	console.log(canvas_width, canvas_height);
	
	let canvas = createCanvas(canvas_width, canvas_height);
	canvas.position(0, 0);
	canvas.parent("main-space");
}

let cX = 200;
let cY = 200;
let cRad = 50;

let selected = false;
let cursor = {
	x: null,
	y: null
}
// Get offset for the elements in the graph
let mainX = 0;
let mainY = nav_bar_height * document.documentElement.clientHeight * 0.01;

function getMousePos(event) {
	var e = event || window.event;
	var scrollX = Math.round(document.getElementById("main-space").scrollLeft || document.body.scrollLeft);
	var scrollY = Math.round(document.getElementById("main-space").scrollTop || document.body.scrollTop);
	
	var x = e.clientX + scrollX || e.pageX;
	var y = e.clientY + scrollY || e.pageY;
	return {'x': x, 'y': y};
}

document.addEventListener("mousedown", function(event) {
	cursor = getMousePos(event);
	
	if (dist(cursor.x, cursor.y, cX + mainX, cY + mainY) < cRad) {
		selected = true;
		console.log("True");
	}
	
	console.log("X: " + cursor.x + ", Y: " + cursor.y);
});

document.addEventListener("mousemove", function(event) {
	if (!selected) return;
	cursor = getMousePos(event);
	cX = cursor.x;
	cY = cursor.y - cRad;
});

document.addEventListener("mouseup", function(event) {
	selected = false;
});

// Draw runs every frame
// Drawing the graphs
function draw() {
	clear();
	
	//background('blue');
	strokeWeight(5);
	fill(color('red'))
	circle(cX, cY, cRad * 2);
}