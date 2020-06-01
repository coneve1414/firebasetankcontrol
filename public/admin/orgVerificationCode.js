function getOrgCode(orgCode) {
    var ref = firebase.database().ref("orgcodes");
ref.on("value", function(snapshot) {
  var orgCodeValid = snapshot.child(orgCode).val();
  var orgCodeCheck = " " + orgCodeValid;
  if (orgCodeCheck != " null") {
    var orgVerificationCode = document.getElementById('verificationCode').value;
    var email2 = document.getElementById('email').value;
    var password2 = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email2, password2).catch(function(error) {
        // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          
          //if (!errorCode) {
           // alert("Success!");
          //}

          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
        });
  } else {
      alert('Please enter a valid code');
      return
  }
});

}