function showHideSidebarMenu() {
const targetDiv = document.getElementByClassName("sidebarMenu");
const btn = document.getElementById("toggle");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};
};