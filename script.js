console.log("ready :)");

var likes = [9, 12, 9];
var spans = [
    document.querySelector("#span-1"),
    document.querySelector("#span-2"),
    document.querySelector("#span-3")
];

function like(id) {
    console.log(id)
    likes[id]++;
    spans[id].innerHTML = likes[id] + "like(s)";
}