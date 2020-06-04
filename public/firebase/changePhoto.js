function changePhoto() {
    var newPhoto = document.getElementById("newPhotoUrl").value;
    firebase.auth().currentUser.updateProfile({
      photoURL: newPhoto
    });
    window.alert("Success!");
    window.reload();
  }