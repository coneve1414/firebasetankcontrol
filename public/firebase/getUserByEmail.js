
function getUserUidByEmail() {
var emailUser = firebase.auth().getUserByEmail("ceverett@namf.com");

if (emailUser != null) {
    emailUserEmail = emailUser.email;
    emailUserUid = emailUser.uid;
    console.log('UID for User:');
    console.log(emailAdd);
    console.log(emailUserUid);
}
}