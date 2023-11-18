// function getInputFieldValueById(inputFieldId) {
//   const inputField = document.getElementById(inputFieldId);
//   const inputFieldValueString = inputField.value;
//   const inputFieldValue = parseFloat(inputFieldValueString);
//   inputField.value = "";
//   return inputFieldValue;
// }

// function getTextElementValueById(elementId) {
//   const textElement = document.getElementById(elementId);
//   const textElementValueString = textElement.innerText;
//   const textElementValue = parseFloat(textElementValueString);
//   return textElementValue;
// }

// function setTextElementValueById(elementId, newValue) {
//   const textElement = document.getElementById(elementId);
//   textElement.innerText = newValue;
// }

function getinputfieldvaluebyid(inputid) {
  const inputid1 = document.getElementById(inputid);
  const inputvaluestring = inputid1.value;
  const inputvalue = parseFloat(inputvaluestring);

  inputid1.value = "";
  return inputvalue;
}

function textelementvaluebyid(elementid) {
  const elementId1 = document.getElementById(elementid);
  const elementIdvalustring = elementId1.innerText;
  const elementIdvalus = parseFloat(elementIdvalustring);

  return elementIdvalus;
}

function setTextElementValueById(elementId, newValue) {
  const elementId1 = document.getElementById(elementId);
  elementId1.innerText = newValue;
}
