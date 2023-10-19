let random_name= ["hgg",
"hgl",
"khlinh",
"kly",
"manh",
"tna",
"pa5",
"pa6",
"nhung",
"thao",
"hien",
"ngan",
"trang"];

document.querySelector("#button").addEventListener("click", die);

let sacrified= [];
let chk = 0;
let sacrificio = "intro";
var x = document.getElementById(sacrificio);
let res = document.getElementById("results")
let end = document.getElementById("end")

function die() {
  if(random_name.length === 0){
    x.style.visibility = "hidden";
    end.style.visibility = "initial";
  }
  if(chk === 0){
    res.style.visibility = "initial";
    x.style.visibility = "initial";
    chk = 1
  }
  else {
    x.style.visibility = "hidden";
    let randomNumber = Math.round(Math.random()*(random_name.length-1));
    sacrificio = random_name[randomNumber];
    x = document.getElementById(sacrificio);
    x.style.visibility = "initial";
    sacrified.push(random_name.splice(randomNumber, 1));
  }
}
