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
    } else {
      document.getElementById("invalidCredit").style.display = "none";
    }
    if (document.getElementById("cvc").value == "") {
      document.getElementById("invalidCvc").innerHTML =
        "Please provide a valid CVC.";
    } else {
      document.getElementById("invalidCvc").style.display = "none";
    }
    if (document.getElementById("amount").value == "") {
      document.getElementById("invalidAmount").innerHTML =
        "Please provide a valid amount.";
    } else {
      document.getElementById("invalidAmount").style.display = "none";
    }
    if (
      document.getElementById("firstname").value == "" ||
      !/^[a-zA-Z]*$/g.test(document.getElementById("firstname").value)
    ) {
      document.getElementById("invalidFName").innerHTML =
        "Please provide a valid first Name.";
    } else {
      document.getElementById("invalidFName").style.display = "none";
    }
    if (
      document.getElementById("lastname").value == "" ||
      !/^[a-zA-Z]*$/g.test(document.getElementById("lastname").value)
    ) {
      document.getElementById("invalidLName").innerHTML =
        "Please provide a valid last Name.";
    } else {
      document.getElementById("invalidLName").style.display = "none";
    }
    if (document.getElementById("city").value == "") {
      document.getElementById("invalidCity").innerHTML =
        "Please provide a valid city.";
    } else {
      document.getElementById("invalidCity").style.display = "none";
    }
    if (document.getElementById("state").value == "") {
      document.getElementById("invalidState").innerHTML =
        "Please provide a valid state.";
    } else {
      document.getElementById("invalidState").style.display = "none";
    }
    if (document.getElementById("zip").value == "") {
      document.getElementById("invalidZip").innerHTML =
        "Please provide a valid zip.";
    } else {
      document.getElementById("invalidZip").style.display = "none";
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
    } else {
      document.getElementById("invalidCard").style.display = "none";
    }

    var z = document.getElementById("firstname").value.match(/^\d+/);
    console.log();
  }
};
