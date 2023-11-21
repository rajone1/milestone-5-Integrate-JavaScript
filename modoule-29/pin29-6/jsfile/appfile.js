function getpin() {
  const pin = generatepin();

  const pinstring = pin + "";

  if (pinstring.length === 4) {
    return pin;
  } else {
    //     console.log("pin is lessthan 4", pin);
    return getpin();
  }
}

function generatepin() {
  const genarate = Math.round(Math.random() * 10000);
  return genarate;
}
// add pin button
document.getElementById("generate-pin").addEventListener("click", function () {
  const pinbutton = getpin();
  //   console.log(pinbutton);
  // set pin display
  const inputpindisplay = document.getElementById("pin-input");

  inputpindisplay.value = pinbutton;
});

// generatepin();
// console.log(generatepin());

// calculator part

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    console.log(event.target.innerText);
  });
