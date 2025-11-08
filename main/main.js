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
	let canvas_height = main_space_height * windowHeight * 0.01;
	
	console.log(canvas_width, canvas_height);
	
	let canvas = createCanvas(canvas_width, canvas_height);
	canvas.position(0, 0);
	canvas.parent("main-space");
}

// Draw runs every frame
function draw() {
	background('blue');
	strokeWeight(5);
	fill(color('red'))
	circle(200, 200, 100);
}