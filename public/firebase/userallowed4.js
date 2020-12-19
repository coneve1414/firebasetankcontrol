window.onload(allowed());
var debugEnable = false;
var pageLocation = "/admin/dashboard_dev.html"

//database references
var userRef = firebase.database().ref("user"); //Reference for the "/user" directory in the database
var baseRef = firebase.database().ref("/"); //Reference for the "/" directory in the database
var usersRef = firebase.database().ref("users"); //Reference for the "/users" directory in the database

//base functions

function hideTemps() {
  var x = document.getElementById("temps");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function hideSubOrg1Button() {
  var hideSubOrg1ButtonVar = document.getElementById("subOrg1");
  if (hideSubOrg1ButtonVar.style.display === "none") {
    hideSubOrg1ButtonVar.style.display = "block";
  } else {
    hideSubOrg1ButtonVar.style.display = "none";
  }
}

function hideSubOrg2Button() {
  var hideSubOrg2ButtonVar = document.getElementById("subOrg2");
  if (hideSubOrg2ButtonVar.style.display === "none") {
    hideSubOrg2ButtonVar.style.display = "block";
  } else {
    hideSubOrg2ButtonVar.style.display = "none";
  }
}

function hideSubOrg3Button() {
  var hideSubOrg3ButtonVar = document.getElementById("subOrg3");
  if (hideSubOrg3ButtonVar.style.display === "none") {
    hideSubOrg3ButtonVar.style.display = "block";
  } else {
    hideSubOrg3ButtonVar.style.display = "none";
  }
}

var subOrg1Master;
var subOrg2Master;
var subOrg3Master;
var userIdMaster;
var orgIdMaster;
var multiOrgTrueMaster;
var tankNum;
var orgPhotoId;

function setSubOrg(subOrgNumber) {
  
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      baseRef.once("value", function(subOrgSet) {
        if (multiOrgTrueMaster=="true"){
        var subOrgId1Master = subOrgSet.child(orgIdMaster).child("subOrgs").child("org1").val();
        var subOrgId2Master = subOrgSet.child(orgIdMaster).child("subOrgs").child("org2").val();
        var subOrgId3Master = subOrgSet.child(orgIdMaster).child("subOrgs").child("org3").val();
        //subOrgId3 = subOrgSet.child(orgid).child("subOrgs").child("org3").val();
        console.log(subOrgId1Master);
        console.log(subOrgId2Master);
        //console.log(subOrg3);
        if (subOrgNumber == 1) {
          baseRef.child(orgIdMaster).child("userView").child(userIdMaster).set(subOrgId1Master);
          console.log("success");
          window.location = pageLocation;
        }
        if (subOrgNumber == 2) {
          baseRef.child(orgIdMaster).child("userView").child(userIdMaster).set(subOrgId2Master);
          console.log("success");
          window.location = pageLocation;
        }
        if (subOrgNumber == 3) {
          baseRef.child(orgIdMaster).child("userView").child(userIdMaster).set(subOrgId3Master);
          console.log("success");
          window.location = pageLocation;
        }
      } else {
        console.log("multiOrgSupport Disabled")
      }})
      // if (subOrgNumber == 1) {
      //   baseRef.child(orgIdMaster).child("userView").child(userIdMaster).set(subOrg1Master)
      // }
      // if (subOrgNumber == 2) {
      //   baseRef.child(orgIdMaster).child("userView").child(userIdMaster).set(subOrg2Master)
      // }
      // if (subOrgNumber == 3) {
      //   baseRef.child(orgIdMaster).child("userView").child(userIdMaster).set(subOrg3Master)
      // }

    } else {
      hideTemps();
    }
  });
}

function allowed(){

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User logged in already or has just logged in.
      console.log(user.uid);
      userRef.once("value", function(userSnapshot) {
        var userId = "" + user.uid //Firebase User ID Number
        userIdMaster = userId;
        var orgid = userSnapshot.child(userId).val(); // Organization ID Value - Example "TESTORG"
        orgIdMaster = userSnapshot.child(userId).val();
        var orgIdOverride;
//        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            // User logged in already or has just logged in.
            console.log(userId);
            baseRef.once("value", function(debugInfo) {
              var useruid = debugInfo.child("users").child(orgid).child(userId).val();
              var version = debugInfo.child("version").val();
              var orgname = debugInfo.child("users").child(orgid).child("orgName").val();
              var subscription = debugInfo.child("users").child(orgid).child("subscription").val();
              var multiOrgTrue = debugInfo.child("multiViewOrgs").child(orgid).val();
              var orgid2;
              orgName1 = debugInfo.child("users").child(orgid).child("orgName").val();
              //console.log("orgName: "+ orgName1);
              orgLocation1 = debugInfo.child("users").child(orgid).child("locationName").val();
              //console.log("location: "+ orgLocation1);
              multiOrgTrueMaster = multiOrgTrue;
              if (multiOrgTrue == "true") {
                //window.alert("MULTI ORG TRUE");
                var multiOrgSubOrgNum = debugInfo.child(orgid).child("subOrgNumber").val(); //Currently, Hard Limit on Sub Views is 3
                var subOrgId1;
                var subOrgId2;
                var subOrgId3;
                var userView = debugInfo.child(orgid).child("userView").child(userId).val();
                var userPermSubOrg1;
                var userPermSubOrg2;
                var userPermSubOrg3;
                var subOrgName1;
                var orgName1;
                var subOrgName2;
                var subOrgName3;
                var subOrgLocation1;
                var subOrgLocation2;
                var subOrgLocation3;
                var viewSubOrg1;
                var viewSubOrg2;
                var viewSubOrg3;
                if (multiOrgSubOrgNum == "3") {
                  subOrgId1 = debugInfo.child(orgid).child("subOrgs").child("org1").val();
                  subOrgId2 = debugInfo.child(orgid).child("subOrgs").child("org2").val();
                  subOrgId3 = debugInfo.child(orgid).child("subOrgs").child("org3").val();
                  subOrg1Master = subOrgId1;
                  subOrg2Master = subOrgId2;
                  subOrg3Master = subOrgId3;
                  userPermSubOrg1 = debugInfo.child(orgid).child(subOrgId1).child(userId).val();
                  userPermSubOrg2 = debugInfo.child(orgid).child(subOrgId2).child(userId).val();
                  userPermSubOrg3 = debugInfo.child(orgid).child(subOrgId3).child(userId).val();
                  subOrgName1 = debugInfo.child(orgid).child(subOrgId1).child("orgName").val();
                  subOrgName2 = debugInfo.child(orgid).child(subOrgId2).child("orgName").val();
                  subOrgName3 = debugInfo.child(orgid).child(subOrgId3).child("orgName").val();
                  subOrgLocation1 = debugInfo.child(orgid).child(subOrgId1).child("location").val();
                  subOrgLocation2 = debugInfo.child(orgid).child(subOrgId2).child("location").val();
                  subOrgLocation3 = debugInfo.child(orgid).child(subOrgId3).child("location").val();
                  //document.getElementById('subOrg1').onclick = setSubOrg(1);
                  //document.getElementById('subOrg2').onclick = setSubOrg(2);
                  //document.getElementById('subOrg3').onclick = setSubOrg(3);
                  document.getElementById("subOrg1Name").innerHTML= subOrgName1 +" - " + subOrgLocation1;
                  document.getElementById("subOrg2Name").innerHTML= subOrgName2 +" - " + subOrgLocation2;
                  document.getElementById("subOrg3Name").innerHTML= subOrgName3 +" - " + subOrgLocation3;
                } else {
                  subOrgId1 = debugInfo.child(orgid).child("subOrgs").child("org1").val();
                  subOrgId2 = debugInfo.child(orgid).child("subOrgs").child("org2").val();
                  var subOrgId1b = subOrgId1;
                  var subOrgId2b = subOrgId2;
                  userPermSubOrg1 = debugInfo.child(orgid).child(subOrgId1).child(userId).val();
                  userPermSubOrg2 = debugInfo.child(orgid).child(subOrgId2).child(userId).val();
                  subOrgName1 = debugInfo.child(orgid).child(subOrgId1).child("orgName").val();
                  subOrgName2 = debugInfo.child(orgid).child(subOrgId2).child("orgName").val();
                  subOrgLocation1 = debugInfo.child(orgid).child(subOrgId1).child("location").val();
                  subOrgLocation2 = debugInfo.child(orgid).child(subOrgId2).child("location").val();
                  //document.getElementById('subOrg1').onclick = setSubOrg(1);
                  //document.getElementById('subOrg2').onclick = setSubOrg(2);
                  document.getElementById("subOrg1Name").innerHTML= subOrgName1 +" - " + subOrgLocation1;
                  document.getElementById("subOrg2Name").innerHTML= subOrgName2 +" - " + subOrgLocation2;
                  //hideSubOrg3();
                  hideSubOrg3Button();
                }
                if (userPermSubOrg1=="true") {
                  viewSubOrg1=true;
                } else {
                  viewSubOrg1=false;
                  //hideSubOrg1();
                }
                if (userPermSubOrg2=="true") {
                  viewSubOrg2=true;
                } else {
                  viewSubOrg2=false;
                  //hideSubOrg2();
                }
                if (userPermSubOrg3=="true") {
                  viewSubOrg3=true;
                } else {
                  viewSubOrg3=false;
                  //hideSubOrg3();
                }
                if (userView==null) {
                  if (viewSubOrg1==true) {
                    orgIdOverride=subOrgId1;
                  } else {
                    if (viewSubOrg2==true) {
                      orgIdOverride=subOrgId2;
                    } else {
                      if (viewSubOrg3==true) {
                        orgIdOverride=subOrgId3;
                      }
                    }
                  }
                } else {
                  if(userView==subOrgId1) {
                    if(viewSubOrg1==true) {
                      orgIdOverride=subOrgId1;
                    } else {
                      if (viewSubOrg2==true) {
                        orgIdOverride=subOrgId2;
                        window.alert("You do not have permission to view that page, so we redirected you to a page where you have permission.");
                        setSubOrg(2);
                      } else {
                        if (viewSubOrg3==true) {
                          orgIdOverride=subOrgId3;
                          window.alert("You do not have permission to view that page, so we redirected you to a page where you have permission.");
                          setSubOrg(3);
                        }
                      }
                    }
                  } else {
                    if(userView==subOrgId2) {
                      if(viewSubOrg2==true) {
                        orgIdOverride=subOrgId2;
                      } else {
                        if (viewSubOrg1==true) {
                          orgIdOverride=subOrgId1;
                          window.alert("You do not have permission to view that page, so we redirected you to a page where you have permission.");
                          setSubOrg(1);
                        } else {
                          if (viewSubOrg3==true) {
                            orgIdOverride=subOrgId3;
                            window.alert("You do not have permission to view that page, so we redirected you to a page where you have permission.");
                            setSubOrg(3);
                          }
                        }
                      }
                    } else {
                      if(userView==subOrgId3) {
                        if(viewSubOrg3==true) {
                          orgIdOverride=subOrgId3;
                        } else {
                          if (viewSubOrg2==true) {
                            orgIdOverride=subOrgId2;
                            window.alert("You do not have permission to view that page, so we redirected you to a page where you have permission.");
                            setSubOrg(2);
                          } else {
                            if (viewSubOrg1==true) {
                              orgIdOverride=subOrgId1;window.alert("You do not have permission to view that page, so we redirected you to a page where you have permission.");
                              setSubOrg(1);
                            }
                          }
                        }
                      }
                    }
                  }
                }
                console.log("ORGID OVERRIDE: "+ orgIdOverride);
                orgid2 = orgIdOverride
                console.log("ORG ID TRUE: "+ orgid2);
                console.log(subOrgId1); 
                console.log(subOrgId2);
              } else {
                orgid2 = orgid;
                hideSubOrg3Button();
                hideSubOrg2Button();
                document.getElementById("subOrg1Name").innerHTML= orgLocation1;
                console.log("ORG ID FALSE: "+ orgid2);
              }
              var tankNumFetch = debugInfo.child(orgid2).child("tankNumber").val();  // gets info of the total number of values that should be displayed.
              orgPhotoId = debugInfo.child(orgid2).child("orgPhotoId").val();
              console.log(orgPhotoId);
              console.log(tankNumFetch);
              tankNum=tankNumFetch;
              console.log("tankNum Out "+tankNum);
              console.log(orgname);
              console.log(version);
              console.log(useruid);
              console.log(orgLocation1);
              console.log("ORG ID: "+ orgid2);
              var useruid2 = " " + useruid
              
              document.getElementById("version").innerHTML= version;
              document.getElementById("userEmail").innerHTML = user.email;
              document.getElementById("subscription").innerHTML= subscription;
              if (debugEnable == true) {
                document.getElementById("emailDebug").innerHTML = user.email;
                document.getElementById("useridDebug").innerHTML = user.uid;
                document.getElementById("userPhotoUrl").innerHTML = user.photoURL;
              }
            if (useruid == false) {
                getTanks.hideTemps();
                window.alert("Access Denied! User removed from an organization! Code: A1004");
            
            } else {
                if (tankNum=="1") { //Testing to see what values to hide
                  hideTank02();
                  hideTank03();
                  hideTank04();
                  hideTank05();
                  hideTank06();
                  hideTank07();
                  hideTank08();
                  hideTank09();
                  hideTank10();
                  hideTank11();
                  hideTank12();
                } else if (tankNum=="2") {
                  hideTank03();
                  hideTank04();
                  hideTank05();
                  hideTank06();
                  hideTank07();
                  hideTank08();
                  hideTank09();
                  hideTank10();
                  hideTank11();
                  hideTank12();
                } else if (tankNum=="3") {
                  hideTank04();
                  hideTank05();
                  hideTank06();
                  hideTank07();
                  hideTank08();
                  hideTank09();
                  hideTank10();
                  hideTank11();
                  hideTank12();
                } else if (tankNum=="4") {
                  hideTank05();
                  hideTank06();
                  hideTank07();
                  hideTank08();
                  hideTank09();
                  hideTank10();
                  hideTank11();
                  hideTank12();
                } else if (tankNum=="5") {
                  hideTank06();
                  hideTank07();
                  hideTank08();
                  hideTank09();
                  hideTank10();
                  hideTank11();
                  hideTank12();
                } else if (tankNum=="6") {
                  hideTank07();
                  hideTank08();
                  hideTank09();
                  hideTank10();
                  hideTank11();
                  hideTank12();
                } else if (tankNum=="7") {
                  hideTank08();
                  hideTank09();
                  hideTank10();
                  hideTank11();
                  hideTank12();
                } else if (tankNum=="8") {
                  hideTank09();
                  hideTank10();
                  hideTank11();
                  hideTank12();
                } else if (tankNum=="9") {
                  hideTank10();
                  hideTank11();
                  hideTank12();
                } else if (tankNum=="10") {
                  hideTank11();
                  hideTank12();
                } else if (tankNum=="11") {
                  hideTank12();
                } else {
                  console.log("all values shown")
                }

                if (useruid2 == " null") {
                    hideTemps(); //Hides the temperature guages
                    window.alert("Access Denied! User not assigned to an organization! Code: A1003");
                } else { 
                    if(useruid2 == " admin") {
                        document.getElementById("role").innerHTML = "Administrator";
                        document.getElementById("org").innerHTML = orgname;
                        getLogo(orgid2);
                        getTanks(orgid2);
                    } else{
                        if (useruid2 == " superadmin") {
                            document.getElementById("role").innerHTML = "Super Administrator";
                            document.getElementById("org").innerHTML = orgname;
                            getLogo(orgid2);
                            getTanks(orgid2);
                        } else {
                          if (useruid2 == " systemadmin") {
                            document.getElementById("role").innerHTML = "System Administrator (Global)";
                            document.getElementById("org").innerHTML = orgname;
                          } else {
                    document.getElementById("org").innerHTML = orgname;
                    document.getElementById("role").innerHTML = "Standard User";
                    getLogo(orgid2);
                    getTanks(orgid2);
                    return 
                  }
                }
              }
            }
              // User not logged in or has just logged out.
            }
          });
//        };

function getLogo(orgLogo2) {
  if (orgLogo2 == "namhf"){ // temporary fix for the shitty code
    document.getElementById("brandFull").src = "https://firebasestorage.googleapis.com/v0/b/tankstatuscontrol-ce.appspot.com/o/brand%2Fnamf.png?alt=media&token=299be2d2-d421-45b4-97ae-4012ece3de1d";
    document.getElementById("brandMini").src = "https://firebasestorage.googleapis.com/v0/b/tankstatuscontrol-ce.appspot.com/o/brand%2Fnamf.png?alt=media&token=299be2d2-d421-45b4-97ae-4012ece3de1d";
  } else {
    var logoUrl = "https://firebasestorage.googleapis.com/v0/b/tankstatuscontrol-ce.appspot.com/o/brand%2F" + orgLogo2 + ".png?alt=media";
    document.getElementById("brandFull").src = logoUrl;
    document.getElementById("brandMini").src = logoUrl;
    return;
  }
}

      function getTanks(orgid3) {
          var ref = firebase.database().ref(orgid3);
      //ref.once("value")
      ref.on("value", function(snapshot) {
      //var name = snapshot.child("tanks").val(); // {first:"Ada",last:"Lovelace"}
      //var firstName = snapshot.child("name/first").val(); // "Ada"
        var tank01val = snapshot.child("tanks").child("tank01").child("temp").val(); // "Lovelace"
        var tank01time = snapshot.child("tanks").child("tank01").child("timestamp").val();
      //  var tank01val = snapshot.child("tank01").val(); // "Lovelace"
        var tank01 = " " + tank01val;
        document.getElementById("tank01").innerHTML =tank01 + "°F";
      // document.getElementById("tank01time").innerHTML ="Last Updated: " + tank01time;
      //document.write(tank01);
      //var age = snapshot.child("age").val(); // null
      });
      //ref.once("value")
      ref.on("value", function(snapshot2) {
      //var name = snapshot.child("tanks").val(); // {first:"Ada",last:"Lovelace"}
      //var firstName = snapshot.child("name/first").val(); // "Ada"
        var tank02val = snapshot2.child("tanks").child("tank02").child("temp").val(); // "Lovelace"
        var tank02time = snapshot2.child("tanks").child("tank02").child("timestamp").val();
      //  var tank01val = snapshot.child("tank01").val(); // "Lovelace"
        var tank02 = " " + tank02val;
        document.getElementById("tank02").innerHTML =tank02 + "°F";
      // document.getElementById("tank02time").innerHTML ="Last Updated: " + tank02time;
      //document.write(tank01);
      //var age = snapshot.child("age").val(); // null
      });

      //ref.once("value")
      ref.on("value", function(snapshot3) {
      //var name = snapshot.child("tanks").val(); // {first:"Ada",last:"Lovelace"}
      //var firstName = snapshot.child("name/first").val(); // "Ada"
        var tank03val = snapshot3.child("tanks").child("tank03").child("temp").val(); // "Lovelace"
      // var tank03time = snapshot3.child("tanks").child("tank03").child("timestamp").val();
      //  var tank01val = snapshot.child("tank01").val(); // "Lovelace"
        var tank03 = " " + tank03val;
        document.getElementById("tank03").innerHTML =tank03 + "°F";
      // document.getElementById("tank03time").innerHTML ="Last Updated: " + tank03time;
      //document.write(tank01);
      //var age = snapshot.child("age").val(); // null
      });
      ref.on("value", function(snapshot4) {
        //var name = snapshot.child("tanks").val(); // {first:"Ada",last:"Lovelace"}
        //var firstName = snapshot.child("name/first").val(); // "Ada"
          var tank04val = snapshot4.child("tanks").child("tank04").child("temp").val(); // "Lovelace"
          var tank04time = snapshot4.child("tanks").child("tank04").child("timestamp").val();
        //  var tank01val = snapshot.child("tank01").val(); // "Lovelace"
          var tank04 = " " + tank04val;
          document.getElementById("tank04").innerHTML =tank04 + "°F";
        //  document.getElementById("tank04time").innerHTML ="Last Updated: " + tank04time;
        //document.write(tank01);
        //var age = snapshot.child("age").val(); // null
        });
        //ref.once("value")
      ref.on("value", function(snapshot5) {
        //var name = snapshot.child("tanks").val(); // {first:"Ada",last:"Lovelace"}
        //var firstName = snapshot.child("name/first").val(); // "Ada"
          var tank05val = snapshot5.child("tanks").child("tank05").child("temp").val(); // "Lovelace"
          var tank05time = snapshot5.child("tanks").child("tank05").child("timestamp").val();
        //  var tank01val = snapshot.child("tank01").val(); // "Lovelace"
          var tank05 = " " + tank05val;
          document.getElementById("tank05").innerHTML =tank05 + "°F";
        //  document.getElementById("tank05time").innerHTML ="Last Updated: " + tank05time;
        //document.write(tank01);
        //var age = snapshot.child("age").val(); // null
        });
        //ref.once("value")
      ref.on("value", function(snapshot6) {
        //var name = snapshot.child("tanks").val(); // {first:"Ada",last:"Lovelace"}
        //var firstName = snapshot.child("name/first").val(); // "Ada"
          var tank06val = snapshot6.child("tanks").child("tank06").child("temp").val(); // "Lovelace"
          var tank06time = snapshot6.child("tanks").child("tank06").child("timestamp").val();
        //  var tank01val = snapshot.child("tank01").val(); // "Lovelace"
          var tank06 = " " + tank06val;
          document.getElementById("tank06").innerHTML =tank06 + "°F";
        //  document.getElementById("tank06time").innerHTML ="Last Updated: " + tank06time;
        //document.write(tank01);
        //var age = snapshot.child("age").val(); // null
        });
        //ref.once("value")
      ref.on("value", function(snapshot7) {
        //var name = snapshot.child("tanks").val(); // {first:"Ada",last:"Lovelace"}
        //var firstName = snapshot.child("name/first").val(); // "Ada"
          var tank07val = snapshot7.child("tanks").child("tank07").child("temp").val(); // "Lovelace"
          var tank07time = snapshot7.child("tanks").child("tank07").child("timestamp").val();
        //  var tank01val = snapshot.child("tank01").val(); // "Lovelace"
          var tank07 = " " + tank07val;
          document.getElementById("tank07").innerHTML =tank07 + "°F";
        //  document.getElementById("tank07time").innerHTML ="Last Updated: " + tank07time;
        //document.write(tank01);
        //var age = snapshot.child("age").val(); // null
        });
        //ref.once("value")
      ref.on("value", function(snapshot8) {
        //var name = snapshot.child("tanks").val(); // {first:"Ada",last:"Lovelace"}
        //var firstName = snapshot.child("name/first").val(); // "Ada"
          var tank08val = snapshot8.child("tanks").child("tank08").child("temp").val(); // "Lovelace"
          var tank08time = snapshot8.child("tanks").child("tank08").child("timestamp").val();
        //  var tank01val = snapshot.child("tank01").val(); // "Lovelace"
          var tank08 = " " + tank08val;
          document.getElementById("tank08").innerHTML =tank08 + "°F";
        //  document.getElementById("tank08time").innerHTML ="Last Updated: " + tank08time;
        //document.write(tank01);
        //var age = snapshot.child("age").val(); // null
        });
        //ref.once("value")
      ref.on("value", function(snapshot9) {
        //var name = snapshot.child("tanks").val(); // {first:"Ada",last:"Lovelace"}
        //var firstName = snapshot.child("name/first").val(); // "Ada"
          var tank09val = snapshot9.child("tanks").child("tank09").child("temp").val(); // "Lovelace"
          var tank09time = snapshot9.child("tanks").child("tank09").child("timestamp").val();
        //  var tank01val = snapshot.child("tank01").val(); // "Lovelace"
          var tank09 = " " + tank09val;
          document.getElementById("tank09").innerHTML =tank09 + "°F";
        //  document.getElementById("tank09time").innerHTML ="Last Updated: " + tank09time;
        //document.write(tank01);
        //var age = snapshot.child("age").val(); // null
        });
        //ref.once("value")
      ref.on("value", function(snapshot10) {
        //var name = snapshot.child("tanks").val(); // {first:"Ada",last:"Lovelace"}
        //var firstName = snapshot.child("name/first").val(); // "Ada"
          var tank10val = snapshot10.child("tanks").child("tank10").child("temp").val(); // "Lovelace"
          var tank10time = snapshot10.child("tanks").child("tank10").child("timestamp").val();
        //  var tank01val = snapshot.child("tank01").val(); // "Lovelace"
          var tank10 = " " + tank10val;
          document.getElementById("tank10").innerHTML =tank10 + "°F";
        //  document.getElementById("tank10time").innerHTML ="Last Updated: " + tank10time;
        //document.write(tank01);
        //var age = snapshot.child("age").val(); // null
        });
        //ref.once("value")
      ref.on("value", function(snapshot11) {
        //var name = snapshot.child("tanks").val(); // {first:"Ada",last:"Lovelace"}
        //var firstName = snapshot.child("name/first").val(); // "Ada"
          var tank11val = snapshot11.child("tanks").child("tank11").child("temp").val(); // "Lovelace"
          var tank11time = snapshot11.child("tanks").child("tank11").child("timestamp").val();
        //  var tank01val = snapshot.child("tank01").val(); // "Lovelace"
          var tank11 = " " + tank11val;
          document.getElementById("tank11").innerHTML =tank11 + "°F";
        //  document.getElementById("tank11time").innerHTML ="Last Updated: " + tank11time;
        //document.write(tank01);
        //var age = snapshot.child("age").val(); // null
        });

        


      }

    };

    function hideTank01() {
      var hideTank01Var = document.getElementById("orgTank01");
      if (hideTank01Var.style.display === "none") {
        hideTank01Var.style.display = "block";
      } else {
        hideTank01Var.style.display = "none";
      }
    };

    function hideTank02() {
      var hideTank02Var = document.getElementById("orgTank02");
      if (hideTank02Var.style.display === "none") {
        hideTank02Var.style.display = "block";
      } else {
        hideTank02Var.style.display = "none";
      }
    };

    function hideTank03() {
      var hideTank03Var = document.getElementById("orgTank03");
      if (hideTank03Var.style.display === "none") {
        hideTank03Var.style.display = "block";
      } else {
        hideTank03Var.style.display = "none";
      }
    };

    function hideTank04() {
      var hideTank04Var = document.getElementById("orgTank04");
      if (hideTank04Var.style.display === "none") {
        hideTank04Var.style.display = "block";
      } else {
        hideTank04Var.style.display = "none";
      }
    };

    function hideTank05() {
      var hideTank05Var = document.getElementById("orgTank05");
      if (hideTank05Var.style.display === "none") {
        hideTank05Var.style.display = "block";
      } else {
        hideTank05Var.style.display = "none";
      }
    };
    
    function hideTank06() {
      var hideTank06Var = document.getElementById("orgTank06");
      if (hideTank06Var.style.display === "none") {
        hideTank06Var.style.display = "block";
      } else {
        hideTank06Var.style.display = "none";
      }
    };

    function hideTank07() {
      var hideTank07Var = document.getElementById("orgTank07");
      if (hideTank07Var.style.display === "none") {
        hideTank07Var.style.display = "block";
      } else {
        hideTank07Var.style.display = "none";
      }
    };

    function hideTank08() {
      var hideTank08Var = document.getElementById("orgTank08");
      if (hideTank08Var.style.display === "none") {
        hideTank08Var.style.display = "block";
      } else {
        hideTank08Var.style.display = "none";
      }
    };

    function hideTank09() {
      var hideTank09Var = document.getElementById("orgTank09");
      if (hideTank09Var.style.display === "none") {
        hideTank09Var.style.display = "block";
      } else {
        hideTank09Var.style.display = "none";
      }
    };

    function hideTank10() {
      var hideTank10Var = document.getElementById("orgTank10");
      if (hideTank10Var.style.display === "none") {
        hideTank10Var.style.display = "block";
      } else {
        hideTank10Var.style.display = "none";
      }
    };

    function hideTank11() {
      var hideTank11Var = document.getElementById("orgTank11");
      if (hideTank11Var.style.display === "none") {
        hideTank11Var.style.display = "block";
      } else {
        hideTank11Var.style.display = "none";
      }
    };

    function hideTank12() {
      var hideTank12Var = document.getElementById("orgTank12");
      if (hideTank12Var.style.display === "none") {
        hideTank12Var.style.display = "block";
      } else {
        hideTank12Var.style.display = "none";
      }
    };

  })}});
}
