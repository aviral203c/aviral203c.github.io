document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  if(options.enableAlert) {
    alert(options.alertText);
  }
});

var options = {
  enableAlert: true, // Set this false to deactivate alert
  alertText: "Don't try to copy! Do it yourself" // Customize this to change alert text
}

