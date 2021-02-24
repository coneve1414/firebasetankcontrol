const firebase = require("firebase");
// Required for side-effects
require("firebase/functions");

function validateAdminRole() {
    var emailInRoleOptions = document.getElementById("adminEmailIn2").value;

    var fetchUidByEmail = firebase.functions().httpsCallable('fetchUidByEmail');
fetchUidByEmail(emailInRoleOptions)
  .then((result) => {
    // Read result of the Cloud Function.
    var sanitizedMessage = result.data.text;
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
      setAdminUser2(result.data.text);
        }})
  });
    //Regex for Valid Characters i.e. Alphabets, Numbers and Space.
    
  }

  function setAdminUser2(userInput) {
    var roleInputIn = document.getElementById("oldAdminRole2").value;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        baseRef.child("users".child(orgIdBaseMaster).child(userInput).set(roleInputIn).then(function() {
        }).catch(function(error) {
          // var errorCode = error.code;
          var errorMessage = error.message;
          //showAlert("A1023", "danger", "changeAdminUser");
          alert(errorMessage);
          return;
      }))
    }
  })
};
        