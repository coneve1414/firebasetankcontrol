// Start signed in user profile photo

 firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var userb = firebase.auth().currentUser;
var nameb, emailb, photoUrlb, uidb, emailVerifiedb;

if (userb != null) {
  nameb = userb.displayName;
  emailb = userb.email;
  photoUrlb = userb.photoURL;
  emailVerifiedb = userb.emailVerified;
  uidb = userb.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.

    if (photoUrlb != null) {
         document.getElementById("imgex").src = photoUrlb
} else {
    document.getElementById("imgex").src = "/img/user.png"
    
}
}
  } else {
      
    
    // No user is signed in.
  }
});
// end user sign in progile photo