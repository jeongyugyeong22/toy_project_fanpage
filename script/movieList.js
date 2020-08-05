var list = document.querySelector(".movieList");

for (var i = 21; i > 0; i--) {
    var element = document.createElement("li");
    element.className = "list";

    var img = document.createElement("img");
    img.className = "poster";
    img.src = '../image/movie/' + i + '.jpg';
    img.id = i;
    img.onclick = function () { popUp() };
    list.appendChild(element);
    element.appendChild(img);
}