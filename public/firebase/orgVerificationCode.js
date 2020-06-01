//function getOrgCode() {
//var orgVerificationCode = document.getElementById('verificationCode').value;
//getOrgCode2(orgVerificationCode);
function getOrgCode(orgCode, uid) {
    var ref = firebase.database().ref("orgCodes");
ref.on("value", function(snapshot) {
  var orgCodeValid = snapshot.child(orgCode).val();
  var orgCodeCheck = " " + orgCodeValid;
  if (orgCodeCheck != " null") {
    if (orgCodeValid = "namf") {
    //
    function writeOrgData(userId, orgCodeSet) {
      firebase.database().ref('user').child(userId).set(
        orgCodeSet);
    }
    
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
        writeOrgData(uid, orgCodeValid);
        redirectAdmin();
      };
  } else {
      alert('Please enter a valid code');
      return
  }
});

}
//};