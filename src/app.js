/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  // // Fetch all the forms we want to apply custom Bootstrap validation styles to
  // var forms = document.getElementsByClassName("needs-validation");
  // // Loop over them and prevent submission
  // var validation = Array.prototype.filter.call(forms, function(form) {
  //   form.addEventListener(
  //     "submit",
  //     function(event) {
  //       if (form.checkValidity() === false) {
  //         event.preventDefault();
  //         event.stopPropagation();
  //       }
  //       form.classList.add("was-validated");
  //     },
  //     false
  //   );
  // });

  let form = document.querySelector("form");

  form.addEventListener("submit", enviarDatos);

  function enviarDatos(e) {
    e.preventDefault();

    if (document.getElementById("cardnumber").value == "") {
      document.getElementById("invalidCredit").innerHTML =
        "Please provide a valid Credit Card.";
    }
    if (document.getElementById("cvc").value == "") {
      document.getElementById("invalidCvc").innerHTML =
        "Please provide a valid CVC.";
    }
    if (document.getElementById("amount").value == "") {
      document.getElementById("invalidAmount").innerHTML =
        "Please provide a valid amount.";
    }
    if (document.getElementById("firstname").value == "") {
      document.getElementById("invalidFName").innerHTML =
        "Please provide a valid first Name.";
    }
    if (document.getElementById("lastname").value == "") {
      document.getElementById("invalidLName").innerHTML =
        "Please provide a valid last Name.";
    }
    if (document.getElementById("city").value == "") {
      document.getElementById("invalidCity").innerHTML =
        "Please provide a valid city.";
    }
    if (document.getElementById("state").value == "") {
      document.getElementById("invalidState").innerHTML =
        "Please provide a valid state.";
    }
    if (document.getElementById("zip").value == "") {
      document.getElementById("invalidZip").innerHTML =
        "Please provide a valid zip.";
    }
    if (
      !(
        document.getElementById("mastercard").checked ||
        document.getElementById("visa").checked ||
        document.getElementById("dinners").checked ||
        document.getElementById("amex").checked
      )
    ) {
      document.getElementById("invalidCard").innerHTML =
        "Please provide a valid cards.";
    }
  }
};
