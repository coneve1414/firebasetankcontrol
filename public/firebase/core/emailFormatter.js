var baseRef = firebase.database().ref("/");
function emailFormatter(email2) {
    console.log("in :" + email2);
    var userTopLevelDomain = email2.lastIndexOf(".");
    var userAtSymbol = email2.lastIndexOf("@");
    var userEmailFront2 = email2.substring(0, userAtSymbol);
    // var userEmailFrontLength = userEmailFront2.length;
    // var userEMailFrontAfterPeriod = userEmailFront2.substring(userEmailFront2.lastIndexOf(".")+1, userEmailFrontLength)
    // var userEmailFrontPeriod = userEmailFront2.substring(0, userEmailFront2.lastIndexOf("."))
    // var userEmailFront = userEmailFrontPeriod+userEMailFrontAfterPeriod;
    var userMidLevelDomain = email2.substring(userAtSymbol+1, userTopLevelDomain)
    var userEmailBack = email2.substring(userTopLevelDomain+1);
    //var email = userEmailFront+"@"+userMidLevelDomain+"."+email2.substring(userTopLevelDomain+1);
    var p = 0;
    // var i;
    var email4 = userEmailFront2;
    for (email3 = email4; email3.lastIndexOf(".")!=null; p++) {
        var userEmailFrontLength = email3.length;
        console.log("length: "+email3.lastIndexOf("."))
        var userEMailFrontAfterPeriod = email3.substring(email3.lastIndexOf(".")+1, userEmailFrontLength)
        var userEmailFrontPeriod = email3.substring(0, email3.lastIndexOf("."))
        var userEmailFront = userEmailFrontPeriod+userEMailFrontAfterPeriod;
        var email3=userEmailFront;
        console.log(email3);
        if (userEmailFrontLength < 0) {
            console.log("breaking due to no more periods");
            break;
        }
        if (p>20) {
            console.log("break loop");
            break;
        }
    } 
    console.log(p)
    console.log(email3);
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var userInfo = {
            uid: user.uid,
            email: user.email,
            updateSuccess: true
          }
        baseRef.child("users2").child(userEmailBack).child(userMidLevelDomain).child(email3).set(userInfo).then(function() {
            redirectadmin();
          });
    } else {
        console.log("error");
    }
});
    return email3+"@"+userMidLevelDomain+"."+email2.substring(userTopLevelDomain+1);
    //return email3;
}