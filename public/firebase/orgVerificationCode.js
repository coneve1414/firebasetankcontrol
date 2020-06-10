function getOrgCode(writeData, orgCode) {
  var ref = firebase.database().ref("user");
  //ref.once("value")
  ref.once("value", function(snapshot2) {
  //var name = snapshot.child("tanks").val(); // {first:"Ada",last:"Lovelace"}
  //var firstName = snapshot.child("name/first").val(); // "Ada"
  var orgCodeValid2 = snapshot2.child(orgCode).val(); // "Lovelace"

  if (writeData == "true"){
    writeUserData(orgCode)
    function writeUserData(orgCode2) {
      if (orgCode2 == null) {
        alert('null2');
      } else{
        if (orgCodeValid2 == null) {
          alert('nullest');
        } else {
          return
        }
      }
      function redirectAdmin() {
        window.location = "/admin/login.html";
      }
      
      
        console.log('setting user root');
      firebase.database().ref('user/' + orgCode2).set(
        orgCodeValid2
      );
      console.log('setting users root');
      firebase.database().ref('users/' + orgCodeValid2 + "/" + orgCode2).set(
        "true"
      );
      redirectAdmin();
    
      
    }
  } else {
  var ref = firebase.database().ref("orgCodes"); //checking the code against the database
  ref.on("value", function(snapshot) {
  var orgCodeValid = snapshot.child(orgCode).val();
  var orgCodeCheck = " " + orgCodeValid;
  if (orgCodeCheck != " null") { //if a verification code exists
    console.log('orgcode exists');
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
      };
  } else {
      alert('Please enter a valid code. Error Code: A1011'); //code not valid error code
      return
  }
  
});



}
});
  }
