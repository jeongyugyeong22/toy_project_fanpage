var list = document.querySelector(".movieList");

for (var i = 23; i > 0; i--) {
    var element = document.createElement("li");
    element.className = "list";

    var img = document.createElement("img");
    img.className = "movieImg";
    img.src = '../image/' + i + '.jpg';
    img.id = i;
    img.onclick = function () {popUp()};
    list.appendChild(element);
    element.appendChild(img);
}