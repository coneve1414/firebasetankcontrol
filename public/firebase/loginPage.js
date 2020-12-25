function showWrongPassword() {
  var xx = document.getElementById("ErrorA1001");
  if (xx.style.display === "none") {
    xx.style.display = "block";
  } else {
    xx.style.display = "none";
  }
}
function showEmailNotExist() {
  var xx = document.getElementById("ErrorA1000");
  if (xx.style.display === "none") {
    xx.style.display = "block";
  } else {
    xx.style.display = "none";
  }
}
function showEmailEmpty() {
  var xxx = document.getElementById("ErrorA1009");
  if (xxx.style.display === "none") {
    xxx.style.display = "block";
  } else {
    xxx.style.display = "none";
  }
}
function showPasswordEmpty() {
  var xxxx = document.getElementById("ErrorA1008");
  if (xxxx.style.display === "none") {
    xxxx.style.display = "block";
  } else {
    xxxx.style.display = "none";
  }
}
function showPasswordResetSuccess() {
  var xxxxx = document.getElementById("ErrorA1007");
  if (xxxxx.style.display === "none") {
    xxxxx.style.display = "block";
  } else {
    xxxxx.style.display = "none";
  }
}

function toggleSignIn() {
  var disableLogin = "false";
  if (disableLogin=="false") {
    if (firebase.auth().currentUser) {
      firebase.auth().signOut();
    } else {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      if (email.length < 4) {
        showEmailEmpty();
        return;
      }
      if (password.length < 4) {
        showPasswordEmpty();
        return;
      }
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          //alert('Wrong password.');
          showWrongPassword();
        } else if (errorCode == 'auth/user-not-found') {
          showEmailNotExist();
        } else {
          alert(errorMessage);
        }
        console.log(error);
        document.getElementById('quickstart-sign-in').disabled = false;
      });
    }
  } else {
    window.location = "/"
    window.alert("Sorry! Currently new logins to the system are disabled!");
  }};
  function redirectregister() {
          window.location = "/admin/register.html";
      };
  function sendPasswordReset() {
    var email = document.getElementById('email').value;
    firebase.auth().sendPasswordResetEmail(email).then(function() {
      // alert('Password Reset Email Sent!');
      showPasswordResetSuccess();
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/invalid-email') {
        alert(errorMessage);
      } else if (errorCode == 'auth/user-not-found') {
        alert(errorMessage);
      }
      console.log(error);
    });
  }
  function initApp() {
    showWrongPassword();
    showEmailEmpty();
    showEmailNotExist();
    showPasswordEmpty();
    showPasswordResetSuccess();
    firebase.auth().onAuthStateChanged(function(user) {		
      if (user) {
          setTimeout(redirectadmin, 10)
  }
      function redirectadmin() {
          window.location = "/admin/dashboard.html";
  };
      if (user) {
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
        if (!emailVerified) {
          document.getElementById('quickstart-verify-email').disabled = false;
        }
      } else {
        document.getElementById('quickstart-sign-in').textContent = 'Sign in';
      }
      document.getElementById('quickstart-sign-in').disabled = false;
    });
    document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
    document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
    document.getElementById('registerButton').addEventListener('click', redirectregister, false);
  }
  window.onload = function() {
    initApp();
  };