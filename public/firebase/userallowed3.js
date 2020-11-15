window.onload(allowed());
var debugEnable = false;

//database references
var userRef = firebase.database().ref("user"); // References the "/user/" directory in the Firebase Realtime Database
var usersRef = firebase.database().ref("users"); // References the "/users/" directory in the Firebase Realtime Database

function getOrgID(){
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var userid = user.uid;
      console.log(userid);
      userRef.once("value", function(getOrgId){
        var orgid = getOrgId.child(userid).val();
        return orgid;
      });
    }
  }
);}

function hideTemps() {
    var x = document.getElementById("temps");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function getLogo(orgLogo) {
    if (orgLogo == "namf"){
      document.getElementById("brandFull").src = "https://firebasestorage.googleapis.com/v0/b/tankstatuscontrol-ce.appspot.com/o/brand%2Fnamf.png?alt=media&token=299be2d2-d421-45b4-97ae-4012ece3de1d";
      document.getElementById("brandMini").src = "https://firebasestorage.googleapis.com/v0/b/tankstatuscontrol-ce.appspot.com/o/brand%2Fnamf.png?alt=media&token=299be2d2-d421-45b4-97ae-4012ece3de1d";
    } else {
      return;
    }
  }



function allowed(){

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User logged in already or has just logged in.
      console.log("User Id: " + user.uid);
      userRef.once("value", function(userSnapshot) {
            var userid = "" + user.uid; //Firebase User ID Number
            var orgid = userSnapshot.child(userid).val(); // Example: "NAMF" (For the organization New Age Metal Fabrication)
            
      firebase.auth().onAuthStateChanged((user) => {
          
          if (user) {
            // User logged in already or has just logged in.
            console.log(user.uid);
            usersRef.once("value", function(debugInfo) {
              var userid = "" + user.uid
              var useruid = debugInfo.child(orgid).child(userid).val(); // "Lovelace"
              var version = debugInfo.child(orgid).child("version").val();
              var orgname = debugInfo.child(orgid).child("orgName").val();
              console.log(orgname);
              console.log(version);
              console.log(useruid);
              var useruid2 = " " + useruid
              document.getElementById("version").innerHTML= version;
              document.getElementById("userEmail").innerHTML = user.email;
              if (debugEnable == true) {
                document.getElementById("emailDebug").innerHTML = user.email;
                document.getElementById("useridDebug").innerHTML = user.uid;
                document.getElementById("userPhotoUrl").innerHTML = user.photoURL;
              }
            if (useruid == false) {
                getTanks.hideTemps();
                window.alert("Access Denied! User removed from an organization! Code: A1004");
            
            } else {
                if (useruid2 == " null") {
                    hideTemps();
                    window.alert("Access Denied! User not assigned to an organization! Code: A1003")
                } else { 
                    if(useruid2 == " admin") {
                        document.getElementById("role").innerHTML = "Administrator";
                        document.getElementById("org").innerHTML = orgname;
                        getLogo(orgid);
                        getTanks(orgid);
                    } else{
                        if (useruid2 == " superadmin") {
                            document.getElementById("role").innerHTML = "Super Administrator";
                            document.getElementById("org").innerHTML = orgname;
                            getLogo(orgid);
                            getTanks(orgid);
                        } else {
                    document.getElementById("org").innerHTML = orgname;
                    document.getElementById("role").innerHTML = "Standard User";
                    getLogo(orgid);
                    getTanks(orgid);
                    return
                }
            }
            }
              // User not logged in or has just logged out.
            }
        });
          };



    });
  })}});
}


function getTanks(orgid3) {
    var ref = firebase.database().ref(orgid3);
ref.on("value", function(snapshot) {
  var tank01val = snapshot.child("tanks").child("tank01").child("temp").val(); // Example: 70
  var tank01 = " " + tank01val;
  document.getElementById("tank01").innerHTML =tank01 + "°F";
});
ref.on("value", function(snapshot2) {
  var tank02val = snapshot2.child("tanks").child("tank02").child("temp").val(); // Example: 70
  var tank02 = " " + tank02val;
  document.getElementById("tank02").innerHTML =tank02 + "°F";
});
ref.on("value", function(snapshot3) {
  var tank03val = snapshot3.child("tanks").child("tank03").child("temp").val(); // Example: 70
  var tank03 = " " + tank03val;
  document.getElementById("tank03").innerHTML =tank03 + "°F";
});
ref.on("value", function(snapshot4) {
    var tank04val = snapshot4.child("tanks").child("tank04").child("temp").val(); // Example: 70
    var tank04 = " " + tank04val;
    document.getElementById("tank04").innerHTML =tank04 + "°F";
  });
ref.on("value", function(snapshot5) {
    var tank05val = snapshot5.child("tanks").child("tank05").child("temp").val(); // Example: 70
    var tank05 = " " + tank05val;
    document.getElementById("tank05").innerHTML =tank05 + "°F";
  });
ref.on("value", function(snapshot6) {
    var tank06val = snapshot6.child("tanks").child("tank06").child("temp").val(); // Example: 70
    var tank06 = " " + tank06val;
    document.getElementById("tank06").innerHTML =tank06 + "°F";
  });
ref.on("value", function(snapshot7) {
    var tank07val = snapshot7.child("tanks").child("tank07").child("temp").val(); // Example: 70
    var tank07 = " " + tank07val;
    document.getElementById("tank07").innerHTML =tank07 + "°F";
  });
ref.on("value", function(snapshot8) {
    var tank08val = snapshot8.child("tanks").child("tank08").child("temp").val(); // Example: 70
    var tank08 = " " + tank08val;
    document.getElementById("tank08").innerHTML =tank08 + "°F";
  });
ref.on("value", function(snapshot9) {
    var tank09val = snapshot9.child("tanks").child("tank09").child("temp").val(); // Example: 70
    var tank09 = " " + tank09val;
    document.getElementById("tank09").innerHTML =tank09 + "°F";
  });
ref.on("value", function(snapshot10) {
    var tank10val = snapshot10.child("tanks").child("tank10").child("temp").val(); // Example: 70
    var tank10 = " " + tank10val;
    document.getElementById("tank10").innerHTML =tank10 + "°F";
  });
ref.on("value", function(snapshot11) {
    var tank11val = snapshot11.child("tanks").child("tank11").child("temp").val(); // Example: 70
    var tank11 = " " + tank11val;
    document.getElementById("tank11").innerHTML =tank11 + "°F";
  });
}