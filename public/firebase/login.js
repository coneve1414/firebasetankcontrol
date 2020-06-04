function passwordResetManual() {
      var email = firebase.auth().currentUser.email;
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        alert('Password Reset Email Sent! Please Sign Back In To Continue!');
        firebase.auth().signOut();
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
    
function toggleSignIn() {
      if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          document.getElementById('quickstart-sign-in').disabled = false;
        });
      }
      document.getElementById('quickstart-sign-in').disabled = true;
    }
    function handleSignUp() {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
    }
    function sendEmailVerification() {
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        alert('Email Verification Sent!');
      });
    }
    function sendPasswordReset() {
      var email = document.getElementById('email').value;
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        alert('Password Reset Email Sent!');
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
    function sendUserPasswordReset() {
      
      firebase.auth().sendPasswordResetEmail("coneve1414@gmail.com").then(function() {
        alert('Password Reset Email Sent!');
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
      firebase.auth().onAuthStateChanged(function(user) {
        //document.getElementById('quickstart-verify-email').disabled = true;
        document.getElementById('quickstart-sign-in').disabled = true;
		
		if (!user) {
		    setTimeout(redirectadmin, 0)
		}
		
		function redirectadmin() {
			window.location = "/admin/login.html";
		}
        if (user) {
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          //document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
          //document.getElementById('quickstart-sign-in').textContent = 'Sign out';
          //document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
          document.getElementsByClassName('img-avatar').src = '/img/user.png';
          if (!emailVerified) {
            document.getElementById('quickstart-verify-email').disabled = false;
          }
        } else {
          // User is signed out.
          // [START_EXCLUDE]
          //document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
          //document.getElementById('quickstart-sign-in').textContent = 'SignIn';
          //document.getElementById('quickstart-account-details').textContent = 'null';
          // [END_EXCLUDE]
        }
        // [START_EXCLUDE silent]
        document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authstatelistener]
      document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
      //document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
      //document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
      //document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
    }
    window.onload = function() {
      initApp();
      //getRemoteConfig();
    };