document.getElementById("btn-deposite").addEventListener("click", function () {
  //   1
  const depositefield = document.getElementById("input-deposite");

  const depositefileldtotalstring = depositefield.value;
  const depositefileldtotal = parseFloat(depositefileldtotalstring);

  depositefield.value = "";

  // 2
  const depositeTotalElement = document.getElementById("total-deposit");

  const depositetotalElementsString = depositeTotalElement.innerText;

  const depositetotalElement = parseFloat(depositetotalElementsString);
  //   3

  const newDepositeTotal = depositetotalElement + depositefileldtotal;

  depositeTotalElement.innerText = newDepositeTotal;

  // 4

  const balanceTotal = document.getElementById("total-balance");

  const newbalancestring = balanceTotal.innerText;

  const newbalance = parseFloat(newbalancestring);

  //   5
  const addnewbalance = newbalance + depositefileldtotal;

  balanceTotal.innerText = addnewbalance;
});
