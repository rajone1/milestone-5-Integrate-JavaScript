document.getElementById("btn-withdraw").addEventListener("click", function () {
  // 1
  const withDrawField = document.getElementById("input-withdraw");

  const withdrowfieldString = withDrawField.value;
  const Widrowfieldtotal = parseFloat(withdrowfieldString);

  withDrawField.value = "";
  // 2
  const withdraElement = document.getElementById("total-withdraw");

  const newwithdraElementString = withdraElement.innerText;

  const newwithdraElement = parseFloat(newwithdraElementString);

  // 3

  const newTotalWithdraw = newwithdraElement + Widrowfieldtotal;
  withdraElement.innerText = newTotalWithdraw;
  //
  const balanceTotal = document.getElementById("total-balance");

  const newbalancestring = balanceTotal.innerText;

  const newbalance = parseFloat(newbalancestring);

  //   5
  const addnewbalance = newbalance - Widrowfieldtotal;

  balanceTotal.innerText = addnewbalance;
});
