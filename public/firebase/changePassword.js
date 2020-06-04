function resetPasswordText() {
    var newPassword = document.getElementById("newPasswordInput").value;
    if (newPassword.length < 8) {
      alert("Error! Please make the password atleast 8 charachers!");
    } else {
    firebase.auth().currentUser.updatePassword(newPassword).then(function () {
      alert('Success! Password Reset!');
      //firebase.auth().signOut();
      console.log('About to run signout');
      setTimeout(redirectadmin, 0);
      console.log('Running Signout Command');
    }
    )
  }
}