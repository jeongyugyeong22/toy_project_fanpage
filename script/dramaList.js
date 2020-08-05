var list = document.querySelector(".dramaList");

for (var i = 7; i > 0; i--) {
    var element = document.createElement("li");
    element.className = "list";

    var img = document.createElement("img");
    img.className = "poster";
    img.src = '../image/drama/' + i + '.jpg';
    img.id = i;
    img.onclick = function () { popUp() };
    list.appendChild(element);
    element.appendChild(img);
}