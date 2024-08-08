const items = document.querySelectorAll(".item");
const holes = document.querySelectorAll(".hole");

items.forEach((item, index) => {
  item.setAttribute("id", `item-${index}`);
});
console.log(items);

items.forEach((item) => {
  item.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  });
});

items.forEach((item) => {
  item.addEventListener("drag", (event) => {
    event.target.style.backgroundColor = "yellow";
  });
});
items.forEach((item) => {
  item.addEventListener("dragend", (event) => {
    event.target.style.backgroundColor = "#c0c0c0";
  });
});
holes.forEach((hole) => {
  hole.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
});
holes.forEach((hole) => {
  hole.addEventListener("drop", (event) => {
    const draggedElementId = event.dataTransfer.getData("text/plain");
    console.log(draggedElementId);
    const draggedElement = document.getElementById(draggedElementId);
    event.target.appendChild(draggedElement);
  });
});
