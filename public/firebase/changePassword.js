function showPasswordChangeSuccess2() {
  var xxxxxx = document.getElementById("ErrorA1014");
  if (xxxxxx.style.display === "none") {
    xxxxxx.style.display = "block";
  } else {
    xxxxxx.style.display = "none";
  }
}
function showPasswordChangeFail2() {
  var xxxxxxx = document.getElementById("ErrorA1015");
  if (xxxxxxx.style.display === "none") {
    xxxxxxx.style.display = "block";
  } else {
    xxxxxxx.style.display = "none";
  }
}

function resetPasswordText() {
    var newPassword = document.getElementById("newPasswordInput").value;
    if (newPassword.length < 8) {
      alert("Error! Please make the password atleast 8 charachers!");
      var xxxxxxx = document.getElementById("ErrorA1015");
        if (xxxxxxx.style.display === "none") {
          xxxxxxx.style.display = "block";
        } else {
          xxxxxxx.style.display = "none";
        }
    } else {
    firebase.auth().currentUser.updatePassword(newPassword).then(function () {
      //alert('Success! Password Reset!');
      var xxxxxx = document.getElementById("ErrorA1014");
        if (xxxxxx.style.display === "none") {
          xxxxxx.style.display = "block";
        } else {
          xxxxxx.style.display = "none";
        }
      //firebase.auth().signOut();
      console.log('About to run signout');
      // setTimeout(redirectadmin, 0);
      window.location = "/admin/dashboard.html";
      console.log('Running Signout Command');
    }
    )
  }
}
// window.onload(initPasswordChange());
// function initPasswordChange() {
//   showPasswordChangeFail2();
//   showPasswordChangeSuccess2();
// }