// let words1 = ["cat", "and", "dog"];
// let words2 = ["my", "apple", "is", "ripe"];
// let words3 = ["it", "is", "a", "dog"];
let words = [
    ["cat", "and", "playful", "dog"],
    ["my", "apple", "is", "ripe"],
    ["it", "is", "a", "dog"]
];


let randomS = Math.floor(Math.random() * words.length);//0 - 2

let randomW;
let words1;
let words2 = words[randomS];
let words5 = words2.slice();
// console.log(words5);

function generation() {
    randomW = Math.floor(Math.random() * words2.length);//0 - 3
    words1 = words2[randomW];//dog
    let words3 = words2.indexOf(words1);
    words2.splice(words3, 1);
    // console.log(words2);
}

for (let i = 1; i < words2.length + 4; i++) {
    let text1 = "drag";
    let id1 = text1.concat(i);
    // console.log(id1);
    generation()
    document.getElementById(id1).innerHTML = words1;

}
// generation()
// document.getElementById("drag2").innerHTML = words1;
// generation()
// document.getElementById("drag1").innerHTML = words1;
// generation()
// document.getElementById("drag3").innerHTML = words1;
// generation()
// document.getElementById("drag4").innerHTML = words1;
// generation()


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
    // data.style.color = "white";
    //  event.target.appendChild(document.getElementById(data));
    let drop = event.target;
    drop.style.color = "green";
    drop.innerHTML += data + " ";
}

let checkButton = document.getElementById("check");
checkButton.addEventListener("click", check);

function check(event) {
    let div1 = document.getElementById("word");
    let str = div1.innerText.trim();
    console.log(str);
    // let words4 = words5.join(" ");
    // console.log(words4);
    let phrase = words5.join(" ");
    if (phrase == str) {
        alert("Верно");
    } else {
        alert("Неверно");
    }
}







// var voiceSelect = document.getElementById("voice");