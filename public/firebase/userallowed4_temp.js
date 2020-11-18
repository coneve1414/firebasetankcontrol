var userRef = firebase.database().ref("user");
var suborgaperm;
var suborgbperm;
var suborgcperm;



window.onload(allowed());
function allowed(){
var baseRef = firebase.database().ref("/");



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

function getLogo(orgLogo) {
  if (orgLogo == "namhf"){ // temporary fix for the shitty code
    document.getElementById("brandFull").src = "https://firebasestorage.googleapis.com/v0/b/tankstatuscontrol-ce.appspot.com/o/brand%2Fnamf.png?alt=media&token=299be2d2-d421-45b4-97ae-4012ece3de1d";
    document.getElementById("brandMini").src = "https://firebasestorage.googleapis.com/v0/b/tankstatuscontrol-ce.appspot.com/o/brand%2Fnamf.png?alt=media&token=299be2d2-d421-45b4-97ae-4012ece3de1d";
  } else {
    var logoUrl = "https://firebasestorage.googleapis.com/v0/b/tankstatuscontrol-ce.appspot.com/o/brand%2F" + orgLogo + ".png?alt=media";
    document.getElementById("brandFull").src = logoUrl;
    document.getElementById("brandMini").src = logoUrl;
    return;
  }
}

function getTanks(orgid3) {
  var ref = firebase.database().ref(orgid3);
  ref.on("value", function(snapshot) {
  var tank01val = snapshot.child("tanks").child("tank01").child("temp").val(); //Example: 70
  var tank01time = snapshot.child("tanks").child("tank01").child("timestamp").val();
  var tank01 = " " + tank01val;
  document.getElementById("tank01").innerHTML =tank01 + "°F";
});
ref.on("value", function(snapshot2) {
  var tank02val = snapshot2.child("tanks").child("tank02").child("temp").val(); //Example: 70
  var tank02time = snapshot2.child("tanks").child("tank02").child("timestamp").val();
  var tank02 = " " + tank02val;
  document.getElementById("tank02").innerHTML =tank02 + "°F";
});
ref.on("value", function(snapshot3) {
  var tank03val = snapshot3.child("tanks").child("tank03").child("temp").val(); //Example: 70
  var tank03time = snapshot3.child("tanks").child("tank03").child("timestamp").val();
  var tank03 = " " + tank03val;
  document.getElementById("tank03").innerHTML =tank03 + "°F";
});
ref.on("value", function(snapshot4) {
    var tank04val = snapshot4.child("tanks").child("tank04").child("temp").val(); //Example: 70
    var tank04time = snapshot4.child("tanks").child("tank04").child("timestamp").val();
    var tank04 = " " + tank04val;
    document.getElementById("tank04").innerHTML =tank04 + "°F";
  });
ref.on("value", function(snapshot5) {
    var tank05val = snapshot5.child("tanks").child("tank05").child("temp").val(); //Example: 70
    var tank05time = snapshot5.child("tanks").child("tank05").child("timestamp").val();
    var tank05 = " " + tank05val;
    document.getElementById("tank05").innerHTML =tank05 + "°F";
  });
ref.on("value", function(snapshot6) {
    var tank06val = snapshot6.child("tanks").child("tank06").child("temp").val(); //Example: 70
    var tank06time = snapshot6.child("tanks").child("tank06").child("timestamp").val();
    var tank06 = " " + tank06val;
    document.getElementById("tank06").innerHTML =tank06 + "°F";
  });
ref.on("value", function(snapshot7) {
    var tank07val = snapshot7.child("tanks").child("tank07").child("temp").val(); //Example: 70
    var tank07time = snapshot7.child("tanks").child("tank07").child("timestamp").val();
    var tank07 = " " + tank07val;
    document.getElementById("tank07").innerHTML =tank07 + "°F";
  });
ref.on("value", function(snapshot8) {
    var tank08val = snapshot8.child("tanks").child("tank08").child("temp").val(); //Example: 70
    var tank08time = snapshot8.child("tanks").child("tank08").child("timestamp").val();
    var tank08 = " " + tank08val;
    document.getElementById("tank08").innerHTML =tank08 + "°F";
  });
ref.on("value", function(snapshot9) {
    var tank09val = snapshot9.child("tanks").child("tank09").child("temp").val(); //Example: 70
    var tank09time = snapshot9.child("tanks").child("tank09").child("timestamp").val();
    var tank09 = " " + tank09val;
    document.getElementById("tank09").innerHTML =tank09 + "°F";
  });
ref.on("value", function(snapshot10) {
    var tank10val = snapshot10.child("tanks").child("tank10").child("temp").val(); //Example: 70
    var tank10time = snapshot10.child("tanks").child("tank10").child("timestamp").val();
    var tank10 = " " + tank10val;
    document.getElementById("tank10").innerHTML =tank10 + "°F";
  });
ref.on("value", function(snapshot11) {
    var tank11val = snapshot11.child("tanks").child("tank11").child("temp").val(); //Example: 70
    var tank11time = snapshot11.child("tanks").child("tank11").child("timestamp").val();
    var tank11 = " " + tank11val;
    document.getElementById("tank11").innerHTML =tank11 + "°F";
  });

}


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User logged in already or has just logged in.
      console.log(user.uid);
      baseRef.once("value", function(userSnapshot) {
      var userid = "" + user.uid;
      var orgid2 = userSnapshot.child("user").child(userid).val(); // "Lovelace"
      var multiOrgEnable = userSnapshot.child("multiViewOrgs").child(orgid2).val();
      var multiOrgSubOrgNum = " " + userSnapshot.child(orgid2).child("subOrgNumber").val(); // current limit is hard coded at three
      var multiOrgSubOrgA = userSnapshot.child(orgid2).child("subOrgs").child("org1").val();
      var multiOrgSubOrgB = userSnapshot.child(orgid2).child("subOrgs").child("org2").val();
      var multiOrgSubOrgC = userSnapshot.child(orgid2).child("subOrgs").child("org3").val();
      var location1 = userSnapshot.child(orgid2).child(multiOrgSubOrgA).child("location").val();
      var location2 = userSnapshot.child(orgid2).child(multiOrgSubOrgB).child("location").val();
      var location3 = userSnapshot.child(orgid2).child(multiOrgSubOrgC).child("location").val();
      var userAllowedSubOrgA = " " + userSnapshot.child(orgid2).child(multiOrgSubOrgA).child(userid).val();
      console.log(userAllowedSubOrgA);
      var userAllowedSubOrgB = " " + userSnapshot.child(orgid2).child(multiOrgSubOrgB).child(userid).val();
      var userAllowedSubOrgC = " " + userSnapshot.child(orgid2).child(multiOrgSubOrgC).child(userid).val();
      var orgid = orgid2;

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

      console.log(userAllowedSubOrgB);
      
      if (multiOrgEnable == "true") {
        console.log(multiOrgSubOrgNum);
        if (multiOrgSubOrgNum == " 3") {
          //check to see if user is allowed to view sub org c
          if (userAllowedSubOrgC == " true") {
            console.log("USER ALLOWED SUB ORG" + multiOrgSubOrgC);
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
          document.getElementById("location1").innerHTML= location1;
          suborgaperm = true;
        } else {
          console.log("USER NOT ALLOWED" + multiOrgSubOrgA);
          suborgaperm = false;
          hideSubOrg1();
        }
        //check to see if user is allowed to view sub org b
        if (userAllowedSubOrgB == " true") {
          console.log("USER ALLOWED SUB ORG" + multiOrgSubOrgB);
          document.getElementById("location2").innerHTML= location2;
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
    
    var usersRef = firebase.database().ref("users");
firebase.auth().onAuthStateChanged((user) => {

    function hideTemps() {
      var x = document.getElementById("temps");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
  }

  function setPermInfo(orgid) {

    if (user) {
      // User logged in already or has just logged in.
      console.log(user.uid);
      //ref.once("value")
      usersRef.once("value", function(debugInfo) {
      var userid = "" + user.uid;
    //var name = snapshot.child("tanks").val(); // {first:"Ada",last:"Lovelace"}
    //var firstName = snapshot.child("name/first").val(); // "Ada"
      var useruid = debugInfo.child(orgid).child(userid).val(); // "Lovelace"
      var version = debugInfo.child(orgid).child("version").val();
      var orgname = debugInfo.child(orgid).child("orgName").val();
      console.log(orgname);
      console.log(version);
      console.log(useruid);
      var useruid2 = " " + useruid;
      document.getElementById("version").innerHTML= version;
      document.getElementById("userEmail").innerHTML = user.email;
      document.getElementById("emailDebug").innerHTML = user.email;
      //document.getElementById("useridDebug").innerHTML = user.uid;
      //document.getElementById("userPhotoUrl").innerHTML = user.photoURL;
    if (useruid == false) {
        getTanks.hideTemps();
        window.alert("Access Denied! User removed from an organization! Code: A1004");
    
    } else {
        if (useruid2 == " null") {
            hideTemps();
            window.alert("Access Denied! User not assigned to an organization! Code: A1003");
        } else { 
            if(useruid2 == " admin") {
                document.getElementById("role").innerHTML = "Administrator";
                document.getElementById("org").innerHTML = orgname;
                // getLogo(orgid);
                // getTanks(orgid);
                if (multiOrgEnable=="false") {
                  getLogo(orgid);
                  getTanks(orgid);
                } else {
                  checkPerms(useruid);
                }
            } else{
                if (useruid2 == " superadmin") {
                    document.getElementById("role").innerHTML = "Super Administrator";
                    document.getElementById("org").innerHTML = orgname;
                    // getLogo(orgid);
                    // getTanks(orgid);
                    if (multiOrgEnable=="false") {
                      getLogo(orgid);
                      getTanks(orgid);
                    } else {
                      checkPerms(useruid);
                    }
                } else {
            document.getElementById("org").innerHTML = orgname;
            document.getElementById("role").innerHTML = "Standard User";
            // getLogo(orgid);
            // getTanks(orgid);
            if (multiOrgEnable=="false") {
              getLogo(orgid);
              getTanks(orgid);
            } else {
              checkPerms(useruid);
            }
            return;
        }
    }
    }
      // User not logged in or has just logged out.
    }
  });
    }



}}); 

    
    
    
});}});}
