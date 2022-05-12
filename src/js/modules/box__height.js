window.onload = function getHeight() {
  let boxes = document.querySelectorAll(".categories__item");
  let boxesActive = document.querySelector(".categories__item.active");
  let height = boxesActive.offsetHeight;
  console.log(height);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.height = height + "px";
  }
};
