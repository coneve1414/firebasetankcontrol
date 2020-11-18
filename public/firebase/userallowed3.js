window.onload(allowed2());
// global settings
var debugEnable = false;

//database references
var userRef = firebase.database().ref("user"); // References the "/user/" directory in the Firebase Realtime Database
var usersRef = firebase.database().ref("users"); // References the "/users/" directory in the Firebase Realtime Database
var baseRef = firebase.database().ref("/"); //references the "/" directory in the Firebase Realtime Database (The Root Directory)


function switchOrg(arg1) {
  if (arg1 == "1") {
    //orgid = multiOrgSubOrgA;
    getLogo(multiOrgSubOrgA);
    getTanks(multiOrgSubOrgA);
  }
  if (arg1 == "2") {
    //orgid = multiOrgSubOrgB;
    getLogo(multiOrgSubOrgB);
    getTanks(multiOrgSubOrgB);
  }
  if (arg1 == "3") {
    //orgid = multiOrgSubOrgC;
    getLogo(multiOrgSubOrgC);
    getTanks(multiOrgSubOrgC);
  }
}

function isMultiOrg(){
  if (multiOrgEnable == "true") {
    console.log(multiOrgSubOrgNum);
    if (multiOrgSubOrgNum == " 3") {
      //check to see if user is allowed to view sub org c
      if (userAllowedSubOrgC == " true") {
        console.log("USER ALLOWED SUB ORG" + multiOrgSubOrgC);
        document.getElementById("location3").innerHTML= getLocation3();
        suborgcperm = true;
      } else {
        console.log("USER NOT ALLOWED" + multiOrgSubOrgC);
        hideSubOrg3();
        suborgcperm = false;
      }
    } else {
      hideSubOrg3();
    }

    //check to see if user is allowed to view sub org a
    if (userAllowedSubOrgA == " true") {
      console.log("USER ALLOWED SUB ORG" + multiOrgSubOrgA);
      document.getElementById("location1").innerHTML= getLocation1();
      suborgaperm = true;
    } else {
      console.log("USER NOT ALLOWED" + multiOrgSubOrgA);
      suborgaperm = false;
      hideSubOrg1();
    }
    //check to see if user is allowed to view sub org b
    if (userAllowedSubOrgB == " true") {
      console.log("USER ALLOWED SUB ORG" + multiOrgSubOrgB);
      document.getElementById("location2").innerHTML= getLocation2();;
      suborgbperm = true;
    } else {
      console.log("USER NOT ALLOWED" + multiOrgSubOrgB);
      suborgbperm = false;
      hideSubOrg2();
    }
    
    
    if(suborgcperm==null) {
      suborgcperm=false;
    }
    if (suborgaperm==false) {
      hideSubOrg1();
      if (suborgbperm==false){
        hideSubOrg2();
        if(suborgcperm==null){
          suborgcperm=false;
          hideSubOrg3();
          console.log(suborgcperm+" fixed");
        } else {
          if (suborgcperm==false) {
            console.log("error");
            hideTemps();
            hideSubOrg3();
          } else {
            suborgcperm=false;
            hideSubOrg3();
            console.log(suborgcperm+" fixed");
          }
          
        }
      }
    } else {
      if (suborgbperm==false){
        //orgid = multiOrgSubOrgA;
        hideSubOrg2();
      }
      if(suborgcperm==false){
        //orgid = multiOrgSubOrgA;
        hideSubOrg3();
      }
      //orgid2 = multiOrgSubOrgA;
      //getLogo(orgid2);
      //getTanks(orgid2);
    }
    console.log(suborgaperm);
    console.log(suborgbperm);
    console.log(suborgcperm);

    document.getElementById('suborg1b').onclick = switchOrg("1");
    document.getElementById('suborg2b').onclick = switchOrg("2");
    document.getElementById('suborg3b').onclick = switchOrg("3");      
  } else {
    orgid = orgid2;
    setPermInfo(orgid);
  }
}

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
  )};

function getUserID(){
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var userid = "" + user.uid;
      //console.log(userid);
      // setUserID(userid);
      return userid;
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

  function hideSubOrg1() {
    var y = document.getElementById("suborg1");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  }
  
  function hideSubOrg2() {
    var z = document.getElementById("suborg2");
    if (z.style.display === "none") {
      z.style.display = "block";
    } else {
      z.style.display = "none";
    }
  }
  
  function hideSubOrg3() {
    var w = document.getElementById("suborg3");
    if (w.style.display === "none") {
      w.style.display = "block";
    } else {
      w.style.display = "none";
    }
  }

function allowed2(){
function setInternalUid(x) {
  console.log(x);
  var userid = x;
  console.log(userid);
  userID().set(userid);
}
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
            var userid2 = ""+user.uid;
            console.log(userid2);
            setInternalUid(userid2);
            console.log(userID.get() + "test");
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
function setLocation1(location){
  var location1 = location;
  console.log(location1);
}

function location1() {
  var location1;
  return {
    get : function () {
        return location1;
    },
    set : function (val) {
        location1 = val;
    }
}
}

function getLocation1(){
  return setLocation1.location1;
}
function setLocation2(location){
  var location2 = location;
  console.log(location2);
}
function getLocation2(){
  return setLocation2.location2;
}
function setLocation3(location){
  var location3 = location;
  console.log(location3);
}
function getLocation3(){
  return setLocation3.location3;
}
function userID() {
  var userid;

  //console.log(userid + " < Output of setUserID()");
  //console.log("test " + getUserID());
  return {
    get : function () {
        console.log(userid + " < Output of setUserID()");
        return userid;
    },
    set : function (userInput) {
        console.log(userid + " < Input of setUserID()");
        userid = userInput;
    }
}

}
function getUserID2() {
  
  return userID().get();
}
function wait() {
baseRef.once("value", function(userSnapshot) {
  var multiOrgEnable = userSnapshot.child("multiViewOrgs").child(getOrgID()).val();
  var multiOrgSubOrgNum = " " + userSnapshot.child(getOrgID()).child("subOrgNumber").val(); // current limit is hard coded at three
  var multiOrgSubOrgA = userSnapshot.child(getOrgID()).child("subOrgs").child("org1").val();
  var multiOrgSubOrgB = userSnapshot.child(getOrgID()).child("subOrgs").child("org2").val();
  var multiOrgSubOrgC = userSnapshot.child(getOrgID()).child("subOrgs").child("org3").val();
  var location1 = userSnapshot.child(getOrgID()).child(multiOrgSubOrgA).child("location").val();
  setLocation1(location1);
  var location2 = userSnapshot.child(getOrgID(getUserID2())).child(multiOrgSubOrgB).child("location").val();
  setLocation2(location2);
  var location3 = userSnapshot.child(getOrgID(getUserID2())).child(multiOrgSubOrgC).child("location").val();
  setLocation3(location3);
  var userAllowedSubOrgA = " " + userSnapshot.child(getOrgID(getUserID2())).child(multiOrgSubOrgA).child(getUserID2()).val();
  var userAllowedSubOrgB = " " + userSnapshot.child(getOrgID(getUserID2())).child(multiOrgSubOrgB).child(getUserID2()).val();
  var userAllowedSubOrgC = " " + userSnapshot.child(getOrgID(getUserID2())).child(multiOrgSubOrgC).child(getUserID2()).val();
});};