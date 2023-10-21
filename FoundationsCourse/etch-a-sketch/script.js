let normalTrace = true;
const randomColor = () => {
	return "#" + Math.floor(Math.random() * 16777215).toString(16);;
}
const getTraceColor = () => {
	if (normalTrace) return "rgba(0, 0, 0, 0.02)";
	else return randomColor();
}
const canvas = document.querySelector("#canvas-area");
const modal = document.querySelector(".modal-container");
function toggleTrace() {
	normalTrace = !normalTrace;
}
function toggleHidden() {
	if (!modal) return;
	modal.classList.toggle("hidden");
}
function addRect(e) {
	const rect = document.createElement("div");
	
	e.stopPropagation();
	rect.classList.add("rect");
	rect.style.backgroundColor = getTraceColor();
	e.target.appendChild(rect);
}
function changeSize() {
	const height = document.querySelector("#canvas-input-height").value;
	const width = document.querySelector("#canvas-input-width").value;

	const errorWidth = document.querySelector("#error-width");
	const errorHeight = document.querySelector("#error-height");
	errorHeight.textContent = "";
	errorWidth.textContent = "";
	if (height > 142 || height <= 0) {
		errorHeight.textContent = `${height} is invalid`;
	}
	if (width > 142 || width <= 0) {
		errorWidth.textContent = `${width} is invalid`;
	}
	if (errorWidth.textContent === "" && errorHeight.textContent === "") {
		toggleHidden();
		createCanvas(canvas, width, height);
	}
}
function createMenu(canvas) {
	const menu = document.createElement("div");
	menu.classList.add("row");
	menu.classList.add("menu");
	
	const changeSize = document.createElement("button");
	changeSize.classList.add("menu-item");
	changeSize.textContent = "Change Size!";
	changeSize.addEventListener("click", () => toggleHidden(), false);
	menu.appendChild(changeSize);
	
	const changeTrace = document.createElement("button");
	changeTrace.classList.add("menu-item");
	changeTrace.textContent = "Change Trace"
	changeTrace.addEventListener("click", () => toggleTrace(), false);
	menu.appendChild(changeTrace);

	canvas.appendChild(menu);
}

function createCanvas(canvas, width = 16, height = 16) {
	if (!canvas || width <= 0 || height <= 0) return ;

	canvas.innerHTML = "";
	createMenu(canvas);
	for (let i = height; i > 0; --i) {
		const div = document.createElement("div");
		div.classList.add("row");
		for (let j = width; j > 0; --j) {
			const col = document.createElement("div");
			col.classList.add("col");
			col.addEventListener("mouseover", (e) => addRect(e), false);
			div.appendChild(col);
		}
		canvas.appendChild(div);
	}
}
createCanvas(canvas, 16, 16);