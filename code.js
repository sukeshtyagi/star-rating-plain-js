function start() {
  let star1 = document.getElementById("1");
  let star2 = document.getElementById("2");
  let star3 = document.getElementById("3");
  let star4 = document.getElementById("4");
  let star5 = document.getElementById("5");
  let starsDiv = document.getElementById("starsDiv");
  starsDiv.style.width = "200px";
  starsDiv.style.display = "flex";
  starsDiv.style.gap = "15px";
  starsDiv.style.cursor = "pointer";
  star1.onclick = rating1;
  star2.onclick = rating2;
  star3.onclick = rating3;
  star4.onclick = rating4;
  star5.onclick = rating5;

  document.addEventListener("click", errorMsg);
}
start();

function rating1() {
  let rated = document.getElementById("rated");
  rated.innerText = "You have rated 1 Star.";
}

function rating2() {
  let rated = document.getElementById("rated");
  rated.innerText = "You have rated 2 Star.";
}

function rating3() {
  let rated = document.getElementById("rated");
  rated.innerText = "You have rated 3 Star.";
}

function rating4() {
  let rated = document.getElementById("rated");
  rated.innerText = "You have rated 4 Star.";
}

function rating5() {
  let rated = document.getElementById("rated");
  rated.innerText = "You have rated 5 Star.";
}

function errorMsg(e) {
  let id = e.target.id;
  let rated = document.getElementById("rated");
  console.log(id);
  if (id === "") {
    console.log("object");
    rated.innerText = "Click on relevant star to rate.";
  }
}
