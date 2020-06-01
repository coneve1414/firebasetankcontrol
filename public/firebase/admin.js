// Start signed in user profile photo

 firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var userb = firebase.auth().currentUser;
var nameb, emailb, photoUrlb, uidb, emailVerifiedb;

var enableadmin;

if (userb != null) {
  nameb = userb.displayName;
  emailb = userb.email;
  photoUrlb = userb.photoURL;
  emailVerifiedb = userb.emailVerified;
  uidb = userb.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.

if (emailb == "ceverett@mcrobotics.tk") {
    
    enableadmin = true;
    
} else {
    
    enableadmin = false;
    
}


}
  } else {
      
    
    // No user is signed in.
  }
});
// end user sign in progile photo