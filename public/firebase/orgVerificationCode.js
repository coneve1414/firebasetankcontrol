function getOrgCode(orgCode, uid) {
  var ref = firebase.database().ref("orgCodes"); //checking the code against the database
  ref.on("value", function(snapshot) {
  var orgCodeValid = snapshot.child(orgCode).val();
  var orgCodeCheck = " " + orgCodeValid;
  if (orgCodeCheck != " null") { //if a verification code exists
    if (orgCodeValid = "namf") { //checking for return value of database
    
    var email2 = document.getElementById('email').value;
    var password2 = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email2, password2).catch(function(error) {
        // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/user-exists') {
            alert('The User already exists');
          } else {
            alert(errorMessage);
          }
        });
        var uid = firebase.auth().currentUser().uid;
        alert('User UID is now:', uid);
        //redirectAdmin(); //redirects to dashboard
      };
  } else {
      alert('Please enter a valid code. Error Code: A1011'); //code not valid error code
      return
  }
});

}