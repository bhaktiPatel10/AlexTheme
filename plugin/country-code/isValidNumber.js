var i, input = document.querySelectorAll(".phone"),
  errorMsg = document.querySelector("#error-msg"),
  validMsg = document.querySelector("#valid-msg");

// here, the index maps to the error code returned from getValidationError - see readme
var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
for (i=0; i<input.length ; i++){
  var iti = window.intlTelInput(input[i], {
    utilsScript: "./utils.js"
  });
  
  var reset = function() {
    // // input[i].classList.remove("error");
    // errorMsg.innerHTML = "";
    // errorMsg.classList.add("hide");
    // validMsg.classList.add("hide");
  };
  
  // on blur: validate
  input[i].addEventListener('blur', function() {
    reset();
    // if (input[i].value.trim()) {
    //   if (iti.isValidNumber()) {
    //     validMsg.classList.remove("hide");
    //   } else {
    //     input[i].classList.add("error");
    //     var errorCode = iti.getValidationError();
    //     errorMsg.innerHTML = errorMap[errorCode];
    //     errorMsg.classList.remove("hide");
    //   }
    // }
  });
  
  // on keyup / change flag: reset
  input[i].addEventListener('change', reset);
  input[i].addEventListener('keyup', reset);
  
}
// initialise plugin
