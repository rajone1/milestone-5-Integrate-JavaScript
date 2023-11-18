document.getElementById("btn-deposite").addEventListener("click", function () {
  // 1

  const newbuttondeposite = getinputfieldvaluebyid("input-deposite");
  const pretextfield = textelementvaluebyid("total-deposit");

  const newtextfieldadd = pretextfield + newbuttondeposite;

  setTextElementValueById("total-deposit", newtextfieldadd);

  // balance total
  const balanceelement = textelementvaluebyid("total-balance");

  const setbalance = balanceelement + newbuttondeposite;

  setTextElementValueById("total-balance", setbalance);
});
