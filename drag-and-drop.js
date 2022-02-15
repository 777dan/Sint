let words = ["cat", "and", "dog"];

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    let sourse = event.target;
    event.dataTransfer.setData("text", sourse.innerText);
}

function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    //  event.target.appendChild(document.getElementById(data));
    let drop = event.target;
    drop.innerHTML += data + " ";
}

let checkButton = document.getElementById("check");
checkButton.addEventListener("click", check);

function check(event) {
    let div1 = document.getElementById("word");
    let str = div1.innerText.trim();
    let phrase = words[0] + " " + words[1] + " " + words[2];
    if (phrase == str) {
        alert("!!!");
    } else {
        alert("???");
    }
}







// var voiceSelect = document.getElementById("voice");