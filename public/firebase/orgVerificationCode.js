//global variables
var debugEnable = false;
var pageLocation = "/admin/dashboard_dev.html"

//database references
var userRef = firebase.database().ref("user"); //Reference for the "/user" directory in the database
var baseRef = firebase.database().ref("/"); //Reference for the "/" directory in the database
var usersRef = firebase.database().ref("users"); //Reference for the "/users" directory in the database
var orgRef = firebase.database().ref("orgCodes");

//redirect function (for when user account is logged in)
function redirectAdmin() {
  window.location = "/admin/dashboard.html";
}

var orgCodeMaster;

function changeOrg() {
  var orgCodeIn = document.getElementById('newOrgCode').value;
  getOrgCode(orgCodeIn);
};

function getOrgCode(orgCode) {
  console.log("recieved!")
  console.log("orgCode: "+orgCode);
   //checking the code against the database
  console.log("checking the database");

  // ref.once("value", function(debugInfo) {
  //   orgCodeMaster= debugInfo.child(orgCode).val();
  // });
  // console.log(orgCodeMaster);


  orgRef.once("value", function(snapshot) {
  console.log("now in the database check!");
  console.log("orgCode2: "+orgCode);
  var orgCodeValid = snapshot.child(orgCode).val();
  console.log("orgCodeValid");
  var orgCodeCheck = " " + orgCodeValid;
  console.log(orgCodeCheck);
  if (orgCodeCheck != " null") { //if a verification code exists
    console.log('orgcode exists');
    if (orgCodeValid = "namf") { //checking for return value of database
    
    var email2 = document.getElementById('email').value;
    var password2 = document.getElementById('password').value;
    console.log(email2);
    console.log(password2);
    console.log("creating user account!");
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
        console.log("Success!");
      };
  } else {
      alert('Please enter a valid code. Error Code: A1011'); //code not valid error code
      return
  }
});

};

function writeUserData(userId, orgCode2) {
  orgRef.on("value", function(snapshot) {
  var orgCodeValid2 = snapshot.child(orgCode2).val();
  var orgCodeCheck2 = "/" + orgCodeValid2;
  firebase.database().ref('user/' + userId).set(orgCodeValid2);
  firebase.database().ref('users/' + orgCodeCheck2 + "/" + userId).set("true");
  redirectAdmin();
})
}
