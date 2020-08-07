var list = document.querySelector(".playList");

for (var i = 2; i > 0; i--) {
    var element = document.createElement("li");
    element.className = "list";

    var img = document.createElement("img");
    img.className = "poster";
    img.src = '../image/play/' + i + '.jpg';
    img.id = i;
    img.onclick = function () { popUp() };
    list.appendChild(element);
    element.appendChild(img);
}