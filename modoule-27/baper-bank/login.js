document.getElementById("btn-submit").addEventListener("click", function () {
  // console.log("jjjjj");
  const getemail = document.getElementById("user-email");
  const email = getemail.value;

  const getpass = document.getElementById("user-password");
  const password = getpass.value;

  if (email === "r@gmail" && password == "se") {
    window.location.href = "bank.html";
  } else {
    alert("insert email and password");
  }
});
