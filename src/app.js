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
      document.getElementById("cardnumber").style.backgroundColor = "#ff000080";
    } else {
      document.getElementById("invalidCredit").style.display = "none";
      document.getElementById("cardnumber").style.backgroundColor = "white";
    }
    if (document.getElementById("cvc").value == "") {
      document.getElementById("invalidCvc").innerHTML =
        "Please provide a valid CVC.";
      document.getElementById("cvc").style.backgroundColor = "#ff000080";
    } else {
      document.getElementById("invalidCvc").style.display = "none";
      document.getElementById("cvc").style.backgroundColor = "white";
    }
    if (document.getElementById("amount").value == "") {
      document.getElementById("invalidAmount").innerHTML =
        "Please provide a valid amount.";
      document.getElementById("amount").style.backgroundColor = "#ff000080";
    } else {
      document.getElementById("invalidAmount").style.display = "none";
      document.getElementById("amount").style.backgroundColor = "white";
    }
    if (
      document.getElementById("firstname").value == "" ||
      !/^[a-zA-Z]*$/g.test(document.getElementById("firstname").value)
    ) {
      document.getElementById("invalidFName").innerHTML =
        "Please provide a valid first Name.";
      document.getElementById("firstname").style.backgroundColor = "#ff000080";
    } else {
      document.getElementById("invalidFName").style.display = "none";
      document.getElementById("firstname").style.backgroundColor = "white";
    }
    if (
      document.getElementById("lastname").value == "" ||
      !/^[a-zA-Z]*$/g.test(document.getElementById("lastname").value)
    ) {
      document.getElementById("invalidLName").innerHTML =
        "Please provide a valid last Name.";
      document.getElementById("lastname").style.backgroundColor = "#ff000080";
    } else {
      document.getElementById("invalidLName").style.display = "none";
      document.getElementById("lastname").style.backgroundColor = "white";
    }
    if (document.getElementById("city").value == "") {
      document.getElementById("invalidCity").innerHTML =
        "Please provide a valid city.";
      document.getElementById("city").style.backgroundColor = "#ff000080";
    } else {
      document.getElementById("invalidCity").style.display = "none";
      document.getElementById("city").style.backgroundColor = "white";
    }
    if (document.getElementById("state").value == "") {
      document.getElementById("invalidState").innerHTML =
        "Please provide a valid state.";
      document.getElementById("state").style.backgroundColor = "#ff000080";
    } else {
      document.getElementById("invalidState").style.display = "none";
      document.getElementById("state").style.backgroundColor = "white";
    }
    if (document.getElementById("zip").value == "") {
      document.getElementById("invalidZip").innerHTML =
        "Please provide a valid zip.";
      document.getElementById("zip").style.backgroundColor = "#ff000080";
    } else {
      document.getElementById("invalidZip").style.display = "none";
      document.getElementById("zip").style.backgroundColor = "white";
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
  }
};
