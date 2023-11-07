// use 2nd

function makeRed1() {
  document.body.style.backgroundColor = "red";
}

// three

const bluemake = document.getElementById("blue");

bluemake.onclick = function blue() {
  document.body.style.backgroundColor = "blue";
};

// four

const makepink = document.getElementById("pink");

makepink.addEventListener("click", pinkcreate);

function pinkcreate() {
  document.body.style.backgroundColor = "pink";
}
// or

// const makePurple = document.getElementById("purple");

const make1 = document.getElementById("purple");

make1.addEventListener("click", function pu1() {
  document.body.style.backgroundColor = "purple";
});

// mostly we use

function handleonclick() {
  const event = document.getElementById("event-handler");

  event.innerText = "hai this is Shaon";
}

// or option 2

// function a name na dela anonimous/callback/eventlistener bola *function (){}*

document
  .getElementById("event-listener")
  .addEventListener("click", function () {
    const event = document.getElementById("event-handler");
    event.innerText = "add call back function";
  });

document.getElementById("use-event").addEventListener("click", function () {
  const event = document.getElementById("event-handler");

  event.innerText = "hello this is colour full function";
  event.style.color = "pink";
});
