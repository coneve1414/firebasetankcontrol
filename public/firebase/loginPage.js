var disableLogin;
function showWrongPassword() {
  var xx = document.getElementById("ErrorA1001");

  var iDiv = document.createElement('div');
iDiv.id = 'ErrorA1001';
iDiv.className= 'alert alert-danger alert-dismissible fade show';
iDiv.innerHTML = 'block';

// Create the inner div before appending to the body
var innerDiv = document.createElement('div');
innerDiv.className = 'block-2';

// The variable iDiv is still good... Just append to it.
iDiv.appendChild(innerDiv);

// Then append the whole thing onto the body
document.getElementById('alerts').appendChild(iDiv);
  // if (xx.style.display === "none") {
  //   xx.style.display = "block";
  // } else {
  //   xx.style.display = "none";
  // }
}

function showAlert(errorCode, alertColor) {
  if(typeof(document.getElementById(errorCode)) != 'undefined' && document.getElementById(errorCode) != null){
    console.log("alert already exists");
  } else {
    var alertClass;
    var iDiv = document.createElement('div');
  iDiv.id = errorCode;
  if (alertColor!=null) {
    alertClass = 'alert alert-danger alert-dismissible fade show';
  } else {
    alertClass = 'alert alert-'+alertColor+' alert-dismissible fade show';
  }
  if (errorCode=="A1000") {
    iDiv.innerHTML= "Sorry, your account does not exist | Code: A1000"
  } else if (errorCode=="A1001") {
    iDiv.innerHTML= "Sorry, your email password is incorrect | Code: A1001"
  }
  iDiv.className= alertClass;
  // iDiv.innerHTML = 'block';
  //var innerDiv = document.createElement('button');
  //innerDiv.className = 'close';
  // innerDiv.data.dismiss='alert';
  // innerDiv.aria.label='Close';
  // innerDiv.data-dismiss="alert";
  // innerDiv.aria-label="Close";
  //iDiv.appendChild("<button class='close' type='button' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span></button>");
  document.getElementById('alerts').appendChild(iDiv);
  }

}

// function showEmailNotExist() {
//   var xx = document.getElementById("ErrorA1000");
//   if (xx.style.display === "none") {
//     xx.style.display = "block";
//   } else {
//     xx.style.display = "none";
//   }
// }
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
function showAccountDisabled() {
  var xxxxxx = document.getElementById("ErrorA1016");
  if (xxxxxx.style.display === "none") {
    xxxxxx.style.display = "block";
  } else {
    xxxxxx.style.display = "none";
  }
}
function showTooManyRequests() {
  var xxxxxxx = document.getElementById("ErrorA1017");
  if (xxxxxxx.style.display === "none") {
    xxxxxxx.style.display = "block";
  } else {
    xxxxxxx.style.display = "none";
  }
}

function toggleSignIn() {
  disableLogin="false";
  if (disableLogin=='false') {
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
          // showWrongPassword();
          showAlert("A1001", "danger");
        } else if (errorCode == 'auth/user-not-found') {
          // showEmailNotExist();
          showAlert("A1000", "danger");
        } else if (errorCode == 'auth/user-disabled') {
          showAccountDisabled();
        } else if (errorCode == 'auth/too-many-requests') {
          showTooManyRequests();
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
    //showWrongPassword();
    showEmailEmpty();
    // showEmailNotExist();
    showPasswordEmpty();
    showPasswordResetSuccess();
    showAccountDisabled();
    showTooManyRequests();
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
        //document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
        if (!emailVerified) {
          // document.getElementById('quickstart-verify-email').disabled = false;
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