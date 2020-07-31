var modal = document.getElementById('movieModal');
var span = document.getElementsByClassName("close")[0];

function popUp(){
    modal.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function makeTemplate(data, clickedName) {
    var html = document.getElementById("modalContent").innerHTML;
    var resultHTML = "";
    for (var i = 23; i >= 0; i--) {
        if (data[i].id == clickedName) {
            resultHTML = html.replace("{title}", data[i].content[0])
                             .replace("{url}", data[i].content[1]);
            break;
        }
    }
    document.querySelector("#conetentModal").innerHTML = resultHTML;
    
}

function sendAjax(url, clickedName) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function () {
        var data = JSON.parse(oReq.responseText);
        makeTemplate(data, clickedName);
    });
    oReq.open("GET", url);
    oReq.send();
}

var movieImg = document.querySelector(".movieImg");

movieImg.addEventListener("click", function (evt) {
    sendAjax("../json/movieData.txt",evt.target.id);
});

