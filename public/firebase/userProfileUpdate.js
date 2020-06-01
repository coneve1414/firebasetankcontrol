
function updateUserProfile() {


// Updates the user attributes:
user.updateProfile({
  displayName: "Jane Q. User",
  photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(function() {
  // Profile updated successfully!
  // "Jane Q. User"
  var displayName = user.displayName;
  // "https://example.com/jane-q-user/profile.jpg"
  var photoURL = user.photoURL;
}, function(error) {
  // An error happened.
});
};