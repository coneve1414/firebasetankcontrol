window.onload = function() {
    console.log("setting createAccount button");
    document.getElementById('createAccount').addEventListener('click', initCreateUser("test2").createUser(), false);
    console.log("setting redirectLogin button");
    document.getElementById('redirectLogin').addEventListener('click', redirectLogin(), false);
    console.log("startingCreateUser");
    initCreateUser("test");
}

//global variables
var debugEnable = false;
var pageLocation = "/admin/dashboard_dev.html"

//database references
var userRef = firebase.database().ref("user"); //Reference for the "/user" directory in the database
var baseRef = firebase.database().ref("/"); //Reference for the "/" directory in the database
var usersRef = firebase.database().ref("users"); //Reference for the "/users" directory in the database
var codeRef = firebase.database().ref("orgCodes"); //checking the code against the database

//legacy redirect function to the dashboard. Deprecated into redirectDashboard().
function redirectAdmin() {
  window.location = "/admin/dashboard.html";
}

//redirects user to the dashboard page
function redirectDashboard() {
  window.location = "/admin/dashboard.html";
}

//redirects user to the login page
function redirectLogin() {
  window.location = "/admin/login.html";
}

// function createUser() {
//   console.log('starting user create');
//   var email2 = document.getElementById('email').value;
//   var password2 = document.getElementById('password').value;
//   if (email2.length < 4) {
//     alert('Please enter an email address.');
//     return;
//   }
//   if (password2.length < 4) {
//     alert('Please enter a longer password.');
//     return;
//   }
//   getOrgCode(document.getElementById('verificationCode').value); //sending data to orgVerificationCode.js
// }

function initCreateUser(x) {
  console.log("create user started!")
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var orgCode = document.getElementById('verificationCode').value;
  console.log(x);
  function createUser() {
  codeRef.on("value", function(codeInfo) {
    var orgCodeValid = codeInfo.child(orgCode).val();
    var orgCodeCheck = " " + orgCodeValid;
    if (orgCodeCheck != " null") { //if a verification code exists
      console.log('orgcode exists');
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/user-exists') {
          alert('The User already exists');
        } else {
          alert(errorMessage);
        }
      })
      if (user) {
        writeUserData(user.uid, document.getElementById('verificationCode').value);
        redirectDashboard();
      }
    } else {
        alert('Please enter a valid code. Error Code: A1011'); //code not valid error code
        return;
    } 
  })}
}

// function getOrgCode(orgCode, uid) {
//     var ref = firebase.database().ref("orgCodes"); //checking the code against the database
//     ref.on("value", function(snapshot) {
//     var orgCodeValid = snapshot.child(orgCode).val();
//     var orgCodeCheck = " " + orgCodeValid;
//     if (orgCodeCheck != " null") { //if a verification code exists
//       console.log('orgcode exists');
//       if (orgCodeValid = "namf") { //checking for return value of database
      
//       var email2 = document.getElementById('email').value;
//       var password2 = document.getElementById('password').value;
//       firebase.auth().createUserWithEmailAndPassword("testUser2@test.com", "password").catch(function(error) {
//           // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             if (errorCode === 'auth/user-exists') {
//               alert('The User already exists');
//             } else {
//               alert(errorMessage);
//             }
//           });
//         };
//     } else {
//         alert('Please enter a valid code. Error Code: A1011'); //code not valid error code
//         return
//     }
//   });

function writeUserData(userId, orgCode2) {
    var ref = firebase.database().ref("orgCodes"); //checking the code against the database
    ref.on("value", function(snapshot) {
    var orgCodeValid2 = snapshot.child(orgCode2).val();
    var orgCodeCheck2 = "/" + orgCodeValid2;
    firebase.database().ref('user/' + userId).set(orgCodeValid2);
    firebase.database().ref('users/' + orgCodeCheck2 + "/" + userId).set("true");
    redirectAdmin();
  })
  }

// function initApp2() {
//     firebase.auth().onAuthStateChanged(function(user) {		
//         if (user) {
//           writeUserData(user.uid, document.getElementById('verificationCode').value) //writing user data to the appropriate organization verification code
//         } else {
//           function createUser() {
//             console.log('starting user create');
//               var email2 = document.getElementById('email').value;
//               var password2 = document.getElementById('password').value;
//               if (email2.length < 4) {
//                 alert('Please enter an email address.');
//                 return;
//               }
//               if (password2.length < 4) {
//                 alert('Please enter a longer password.');
//                 return;
//               }
//               getOrgCode(document.getElementById('verificationCode').value); //sending data to orgVerificationCode.js
//           }
//           document.getElementById('createAccount').addEventListener('click', createUser, false);
//           document.getElementById('redirectLogin').addEventListener('click', redirectLogin, false);
//         }})}
//       window.onload = function() {
//       initApp2();
//     }};