window.onload(allowed());
var debugEnable = false;
var pageLocation = "/admin/dashboard.html"

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

function showNoOrg() {
  var xx = document.getElementById("ErrorA1004");
  if (xx.style.display === "none") {
    xx.style.display = "block";
  } else {
    xx.style.display = "none";
  }
}
function showOrgViewDropDown() {
  var xxx = document.getElementById("MobileOrgDropDown");
  if (xxx.style.display === "none") {
    xxx.style.display = "block";
  } else {
    xxx.style.display = "none";
  }
}

function hideSubOrg1Button() {
  var hideSubOrg1ButtonVar = document.getElementById("subOrg1");
  if (hideSubOrg1ButtonVar.style.display === "none") {
    hideSubOrg1ButtonVar.style.display = "block";
  } else {
    hideSubOrg1ButtonVar.style.display = "none";
  }
  var hideSubOrg1ButtonVarMobile = document.getElementById("subOrg1NameMobile");
  if (hideSubOrg1ButtonVarMobile.style.display === "none") {
    hideSubOrg1ButtonVarMobile.style.display = "block";
  } else {
    hideSubOrg1ButtonVarMobile.style.display = "none";
  }
}

function hideSubOrg2Button() {
  var hideSubOrg2ButtonVar = document.getElementById("subOrg2");
  if (hideSubOrg2ButtonVar.style.display === "none") {
    hideSubOrg2ButtonVar.style.display = "block";
  } else {
    hideSubOrg2ButtonVar.style.display = "none";
  }
  var hideSubOrg2ButtonVarMobile = document.getElementById("subOrg2NameMobile");
  if (hideSubOrg2ButtonVarMobile.style.display === "none") {
    hideSubOrg2ButtonVarMobile.style.display = "block";
  } else {
    hideSubOrg2ButtonVarMobile.style.display = "none";
  }
}

function hideSubOrg3Button() {
  var hideSubOrg3ButtonVar = document.getElementById("subOrg3");
  if (hideSubOrg3ButtonVar.style.display === "none") {
    hideSubOrg3ButtonVar.style.display = "block";
  } else {
    hideSubOrg3ButtonVar.style.display = "none";
  }
  var hideSubOrg3ButtonVarMobile = document.getElementById("subOrg3NameMobile");
  if (hideSubOrg3ButtonVarMobile.style.display === "none") {
    hideSubOrg3ButtonVarMobile.style.display = "block";
  } else {
    hideSubOrg3ButtonVarMobile.style.display = "none";
  }
}

var subOrg1Master;
var subOrg2Master;
var subOrg3Master;
var userIdMaster;
var orgIdMaster;
var multiOrgTrueMaster;
var tankNum;

function setSubOrg(subOrgNumber) {
  
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      baseRef.once("value", function(subOrgSet) {
        if (multiOrgTrueMaster=="true"){
        var subOrgId1Master = subOrgSet.child(orgIdMaster).child("subOrgs").child("org1").val();
        var subOrgId2Master = subOrgSet.child(orgIdMaster).child("subOrgs").child("org2").val();
        var subOrgId1Master = subOrgSet.child(orgIdMaster).child("subOrgs").child("org3").val();
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
showNoOrg();
//showOrgViewDropDown();
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
                  document.getElementById("subOrg1NameMobile").innerHTML= subOrgName1 +" - " + subOrgLocation1;
                  document.getElementById("subOrg2NameMobile").innerHTML= subOrgName2 +" - " + subOrgLocation2;
                  document.getElementById("subOrg3NameMobile").innerHTML= subOrgName3 +" - " + subOrgLocation3;
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
                  document.getElementById("subOrg1NameMobile").innerHTML= subOrgName1 +" - " + subOrgLocation1;
                  document.getElementById("subOrg2NameMobile").innerHTML= subOrgName2 +" - " + subOrgLocation2;
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
                document.getElementById("subOrg1NameMobile").innerHTML= orgLocation1;
                console.log("ORG ID FALSE: "+ orgid2);
              }
              var tankNumFetch = debugInfo.child(orgid2).child("tankNumber").val();  // gets info of the total number of values that should be displayed.
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
                showNoOrg();
                //window.alert("Access Denied! User removed from an organization! Code: A1004");
            
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
                    showNoOrg();
                    document.getElementById("subOrg1Name").innerHTML= "Dashboard";
                    //window.alert("Access Denied! User not assigned to an organization! Code: A1003");
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
                        } else if (useruid2 == " systemadmin") {
                          document.getElementById("role").innerHTML = "System Administrator (Global)";
                          document.getElementById("org").innerHTML = orgname;
                          getLogo(orgid2);
                          getTanks(orgid2);
                        } else { 
                        
                        
                    document.getElementById("org").innerHTML = orgname;
                    document.getElementById("role").innerHTML = "Standard User";
                    getLogo(orgid2);
                    getTanks(orgid2);
                    return 
                  }
                
              }
            }
              // User not logged in or has just logged out.
            }
          });
//        };

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
// tank 01
      ref.on("value", function(snapshot) {
        var tank01val = snapshot.child("tanks").child("tank01").child("temp").val(); // Example: 120 and will be formatted to 120°
        //var tank01time = snapshot.child("tanks").child("tank01").child("timestamp").val();
        var tankDyn = snapshot.child("tanks").child("isDynamicColor").val(); // isDynamicColor=true or false
        var tank01min = snapshot.child("tanks").child("tank01").child("minTemp").val(); // min temperature
        var tank01max = snapshot.child("tanks").child("tank01").child("maxTemp").val(); // max temperature
        var tank01label = snapshot.child("tanks").child("tank01").child("label").val(); // value label
        var tank01labelDyn = snapshot.child("tanks").child("tank01").child("isDynamicLabel").val(); // isDynamicLabel = true or false
        if (tankDyn=="true") {
        if (tank01val >=tank01max) {
          document.getElementById("tank01Color").className = "card text-white bg-danger";
        } else if (tank01val<=tank01min) {
          document.getElementById("tank01Color").className = "card text-white bg-warning";
        } else if (tank01val>=tank01min && tank01val<=tank01max) {
          document.getElementById("tank01Color").className = "card text-white bg-success";
        } else {
          document.getElementById("tank01Color").className = "card text-white bg-primary";
        }}
        var tank01 = " " + tank01val;
        document.getElementById("tank01").innerHTML =tank01 + "°F";
        if (tank01labelDyn=="true") {
          document.getElementById("labelTank01").innerHTML =tank01label;
        }
      });

// tank02
      ref.on("value", function(snapshot2) {
        var tank02val = snapshot2.child("tanks").child("tank02").child("temp").val(); // Example: 120 and will be formatted to 120°
        //var tank02time = snapshot2.child("tanks").child("tank02").child("timestamp").val();
        var tankDyn = snapshot2.child("tanks").child("isDynamicColor").val(); // isDynamicColor=true or false
        var tank02min = snapshot2.child("tanks").child("tank02").child("minTemp").val(); // min temperature
        var tank02max = snapshot2.child("tanks").child("tank02").child("maxTemp").val(); // max temperature
        var tank02label = snapshot2.child("tanks").child("tank02").child("label").val(); // value label
        var tank02labelDyn = snapshot2.child("tanks").child("tank02").child("isDynamicLabel").val(); // isDynamicLabel = true or false
        if (tankDyn=="true"){
        if (tank02val >=tank02max) {
          document.getElementById("tank02Color").className = "card text-white bg-danger";
        } else if (tank02val<=tank02min) {
          document.getElementById("tank02Color").className = "card text-white bg-warning";
        } else if (tank02val>=tank02min && tank02val<=tank02max) {
          document.getElementById("tank02Color").className = "card text-white bg-success";
        } else {
          document.getElementById("tank02Color").className = "card text-white bg-primary";
        }}
        var tank02 = " " + tank02val;
        document.getElementById("tank02").innerHTML =tank02 + "°F";
        if (tank02labelDyn=="true") {
          document.getElementById("labelTank02").innerHTML =tank03label;
        }
      });

// tank03
      ref.on("value", function(snapshot3) {
        var tank03val = snapshot3.child("tanks").child("tank03").child("temp").val(); // Example: 120 and will be formatted to 120°
      // var tank03time = snapshot3.child("tanks").child("tank03").child("timestamp").val();
        var tankDyn = snapshot3.child("tanks").child("isDynamicColor").val(); // isDynamicColor=true or false
        var tank03min = snapshot3.child("tanks").child("tank03").child("minTemp").val(); // min temperature
        var tank03max = snapshot3.child("tanks").child("tank03").child("maxTemp").val(); // max temperature
        var tank03label = snapshot3.child("tanks").child("tank03").child("label").val(); // value label
        var tank03labelDyn = snapshot3.child("tanks").child("tank03").child("isDynamicLabel").val(); // isDynamicLabel = true or false
        if (tankDyn=="true") {
        if (tank03val >=tank03max) {
          document.getElementById("tank03Color").className = "card text-white bg-danger";
        } else if (tank03val<=tank03min) {
          document.getElementById("tank03Color").className = "card text-white bg-warning";
        } else if (tank03val>=tank03min && tank03val<=tank03max) {
          document.getElementById("tank03Color").className = "card text-white bg-success";
        } else {
          document.getElementById("tank03Color").className = "card text-white bg-primary";
        }}
        var tank03 = " " + tank03val;
        document.getElementById("tank03").innerHTML =tank03 + "°F";
        if (tank03labelDyn=="true") {
          document.getElementById("labelTank03").innerHTML =tank03label;
        }
      });

// tank04
      ref.on("value", function(snapshot4) {
          var tank04val = snapshot4.child("tanks").child("tank04").child("temp").val(); // Example: 120 and will be formatted to 120°
        //  var tank04time = snapshot4.child("tanks").child("tank04").child("timestamp").val();
          var tankDyn = snapshot4.child("tanks").child("isDynamicColor").val(); // isDynamicColor=true or false
          var tank04min = snapshot4.child("tanks").child("tank04").child("minTemp").val(); // min temperature
          var tank04max = snapshot4.child("tanks").child("tank04").child("maxTemp").val(); // max temperature
          var tank04label = snapshot4.child("tanks").child("tank04").child("label").val(); // value label
          var tank04labelDyn = snapshot4.child("tanks").child("tank04").child("isDynamicLabel").val(); // isDynamicLabel = true or false
          if (tankDyn=="true") {
          if (tank04val >=tank04max) {
            document.getElementById("tank04Color").className = "card text-white bg-danger";
          } else if (tank04val<=tank04min) {
            document.getElementById("tank04Color").className = "card text-white bg-warning";
          } else if (tank04val>=tank04min && tank04val<=tank04max) {
            document.getElementById("tank04Color").className = "card text-white bg-success";
          } else {
            document.getElementById("tank04Color").className = "card text-white bg-primary";
          }}
          var tank04 = " " + tank04val;
          document.getElementById("tank04").innerHTML =tank04 + "°F";
          if (tank04labelDyn=="true") {
            document.getElementById("labelTank04").innerHTML =tank04label;
          }
        });

// tank05
      ref.on("value", function(snapshot5) {
          var tank05val = snapshot5.child("tanks").child("tank05").child("temp").val(); // Example: 120 and will be formatted to 120°
          var tank05time = snapshot5.child("tanks").child("tank05").child("timestamp").val();
          var tankDyn = snapshot5.child("tanks").child("isDynamicColor").val(); // isDynamicColor=true or false
          var tank05min = snapshot5.child("tanks").child("tank05").child("minTemp").val(); // min temperature
          var tank05max = snapshot5.child("tanks").child("tank05").child("maxTemp").val(); // max temperature
          var tank05label = snapshot5.child("tanks").child("tank05").child("label").val(); // value label
          var tank05labelDyn = snapshot5.child("tanks").child("tank05").child("isDynamicLabel").val(); // isDynamicLabel = true or false
          if (tankDyn=="true") {
          if (tank05val >=tank05max) {
            document.getElementById("tank05Color").className = "card text-white bg-danger";
          } else if (tank05val<=tank05min) {
            document.getElementById("tank05Color").className = "card text-white bg-warning";
          } else if (tank05val>tank05min && tank05val<tank05max) {
            document.getElementById("tank05Color").className = "card text-white bg-success";
          } else {
            document.getElementById("tank05Color").className = "card text-white bg-primary";
          }}
          var tank05 = " " + tank05val;
          document.getElementById("tank05").innerHTML =tank05 + "°F";
          if (tank05labelDyn=="true") {
            document.getElementById("labelTank05").innerHTML =tank05label;
          }
        });

// tank06
      ref.on("value", function(snapshot6) {
          var tank06val = snapshot6.child("tanks").child("tank06").child("temp").val(); // Example: 120 and will be formatted to 120°
          var tank06time = snapshot6.child("tanks").child("tank06").child("timestamp").val();
          var tankDyn = snapshot6.child("tanks").child("isDynamicColor").val(); // isDynamicColor=true or false
          var tank06min = snapshot6.child("tanks").child("tank06").child("minTemp").val(); // min temperature
          var tank06max = snapshot6.child("tanks").child("tank06").child("maxTemp").val(); // max temperature
          var tank06label = snapshot6.child("tanks").child("tank06").child("label").val(); // value label
          var tank06labelDyn = snapshot6.child("tanks").child("tank06").child("isDynamicLabel").val(); // isDynamicLabel = true or false
          if (tankDyn=="true") {
          if (tank06val >=tank06max) {
            document.getElementById("tank06Color").className = "card text-white bg-danger";
          } else if (tank06val<=tank06min) {
            document.getElementById("tank06Color").className = "card text-white bg-warning";
          } else if (tank06val>tank06min && tank06val<tank06max) {
            document.getElementById("tank06Color").className = "card text-white bg-success";
          } else {
            document.getElementById("tank06Color").className = "card text-white bg-primary";
          }}
          var tank06 = " " + tank06val;
          document.getElementById("tank06").innerHTML =tank06 + "°F";
          if (tank06labelDyn=="true") {
            document.getElementById("labelTank06").innerHTML =tank06label;
          }
        });

// tank07
      ref.on("value", function(snapshot7) {
          var tank07val = snapshot7.child("tanks").child("tank07").child("temp").val(); // Example: 120 and will be formatted to 120°
          var tank07time = snapshot7.child("tanks").child("tank07").child("timestamp").val();
          var tankDyn = snapshot7.child("tanks").child("isDynamicColor").val(); // isDynamicColor=true or false
          var tank07min = snapshot7.child("tanks").child("tank07").child("minTemp").val(); // min temperature
          var tank07max = snapshot7.child("tanks").child("tank07").child("maxTemp").val(); // max temperature
          var tank07label = snapshot7.child("tanks").child("tank07").child("label").val(); // value label
          var tank07labelDyn = snapshot7.child("tanks").child("tank07").child("isDynamicLabel").val(); // isDynamicLabel = true or false
          if (tankDyn=="true") {
          if (tank07val >=tank07max) {
            document.getElementById("tank07Color").className = "card text-white bg-danger";
          } else if (tank07val<=tank07min) {
            document.getElementById("tank07Color").className = "card text-white bg-warning";
          } else if (tank07val>tank07min && tank07val<tank07max) {
            document.getElementById("tank07Color").className = "card text-white bg-success";
          } else {
            document.getElementById("tank07Color").className = "card text-white bg-primary";
          }}
          var tank07 = " " + tank07val;
          document.getElementById("tank07").innerHTML =tank07 + "°F";
          if (tank07labelDyn=="true") {
            document.getElementById("labelTank07").innerHTML =tank07label;
          }
        });

// tank08        
      ref.on("value", function(snapshot8) {
          var tank08val = snapshot8.child("tanks").child("tank08").child("temp").val(); // Example: 120 and will be formatted to 120°
          var tank08time = snapshot8.child("tanks").child("tank08").child("timestamp").val();
          var tankDyn = snapshot8.child("tanks").child("isDynamicColor").val(); // isDynamicColor=true or false
          var tank08min = snapshot8.child("tanks").child("tank08").child("minTemp").val(); // min temperature
          var tank08max = snapshot8.child("tanks").child("tank08").child("maxTemp").val(); // max temperature
          var tank08label = snapshot8.child("tanks").child("tank08").child("label").val(); // value label
          var tank08labelDyn = snapshot8.child("tanks").child("tank08").child("isDynamicLabel").val(); // isDynamicLabel = true or false
          if (tankDyn=="true") {
          if (tank08val >=tank08max) {
            document.getElementById("tank08Color").className = "card text-white bg-danger";
          } else if (tank08val<=tank08min) {
            document.getElementById("tank08Color").className = "card text-white bg-warning";
          } else if (tank08val>tank08min && tank08val<tank08max) {
            document.getElementById("tank08Color").className = "card text-white bg-success";
          } else {
            document.getElementById("tank08Color").className = "card text-white bg-primary";
          }}
          var tank08 = " " + tank08val;
          document.getElementById("tank08").innerHTML =tank08 + "°F";
          if (tank08labelDyn=="true") {
            document.getElementById("labelTank08").innerHTML =tank08label;
          }
        });

// tank09
      ref.on("value", function(snapshot9) {
          var tank09val = snapshot9.child("tanks").child("tank09").child("temp").val(); // Example: 120 and will be formatted to 120°
          var tank09time = snapshot9.child("tanks").child("tank09").child("timestamp").val();
          var tankDyn = snapshot9.child("tanks").child("isDynamicColor").val(); // isDynamicColor=true or false
          var tank09min = snapshot9.child("tanks").child("tank09").child("minTemp").val(); // min temperature
          var tank09max = snapshot9.child("tanks").child("tank09").child("maxTemp").val(); // max temperature
          var tank09label = snapshot9.child("tanks").child("tank09").child("label").val(); // value label
          var tank09labelDyn = snapshot9.child("tanks").child("tank09").child("isDynamicLabel").val(); // isDynamicLabel = true or false
          if (tankDyn=="true") {
          if (tank09val >=tank09max) {
            document.getElementById("tank09Color").className = "card text-white bg-danger";
          } else if (tank09val<=tank09min) {
            document.getElementById("tank09Color").className = "card text-white bg-warning";
          } else if (tank09val>tank09min && tank09val<tank09max) {
            document.getElementById("tank09Color").className = "card text-white bg-success";
          } else {
            document.getElementById("tank09Color").className = "card text-white bg-primary";
          }}
          var tank09 = " " + tank09val;
          document.getElementById("tank09").innerHTML =tank09 + "°F";
          if (tank09labelDyn=="true") {
            document.getElementById("labelTank09").innerHTML =tank09label;
          }
        });

// tank10
      ref.on("value", function(snapshot10) {
          var tank10val = snapshot10.child("tanks").child("tank10").child("temp").val(); // Example: 120 and will be formatted to 120°
          var tank10time = snapshot10.child("tanks").child("tank10").child("timestamp").val();
          var tankDyn = snapshot10.child("tanks").child("isDynamicColor").val(); // isDynamicColor=true or false
          var tank10min = snapshot10.child("tanks").child("tank10").child("minTemp").val(); // min temperature
          var tank10max = snapshot10.child("tanks").child("tank10").child("maxTemp").val(); // max temperature
          var tank10label = snapshot10.child("tanks").child("tank10").child("label").val(); // value label
          var tank10labelDyn = snapshot10.child("tanks").child("tank10").child("isDynamicLabel").val(); // isDynamicLabel = true or false
          if (tankDyn=="true") {
          if (tank10val >=tank10max) {
            document.getElementById("tank10Color").className = "card text-white bg-danger";
          } else if (tank10val<=tank10min) {
            document.getElementById("tank10Color").className = "card text-white bg-warning";
          } else if (tank10val>tank10min && tank10val<tank10max) {
            document.getElementById("tank10Color").className = "card text-white bg-success";
          } else {
            document.getElementById("tank10Color").className = "card text-white bg-primary";
          }} else {
          }
          var tank10 = " " + tank10val;
          document.getElementById("tank10").innerHTML =tank10 + "°F";
          if (tank10labelDyn=="true") {
            document.getElementById("labelTank10").innerHTML =tank10label;
          }
        });
 
// tank11
      ref.on("value", function(snapshot11) {
          var tank11val = snapshot11.child("tanks").child("tank11").child("temp").val(); // Example: 120 and will be formatted to 120°
          var tank11time = snapshot11.child("tanks").child("tank11").child("timestamp").val();
          var tankDyn = snapshot11.child("tanks").child("isDynamicColor").val(); // isDynamicColor=true or false
          var tank11min = snapshot11.child("tanks").child("tank11").child("minTemp").val(); // min temperature
          var tank11max = snapshot11.child("tanks").child("tank11").child("maxTemp").val(); // max temperature
          var tank11label = snapshot11.child("tanks").child("tank11").child("label").val(); // value label
          var tank11labelDyn = snapshot11.child("tanks").child("tank11").child("isDynamicLabel").val(); // isDynamicLabel = true or false
          if (tankDyn=="true") {
          if (tank11val >=tank11max) {
            document.getElementById("tank11Color").className = "card text-white bg-danger";
          } else if (tank11val<=tank11min) {
            document.getElementById("tank11Color").className = "card text-white bg-warning";
          } else if (tank11val>tank11min && tank11val<tank11max) {
            document.getElementById("tank11Color").className = "card text-white bg-success";
          } else {
            document.getElementById("tank11Color").className = "card text-white bg-primary";
          }}
          var tank11 = " " + tank11val;
          document.getElementById("tank11").innerHTML =tank11 + "°F";
          if (tank11labelDyn=="true") {
            document.getElementById("labelTank11").innerHTML =tank11label;
          }
        });

// tank12
      ref.on("value", function(snapshot12) {
        var tank12val = snapshot12.child("tanks").child("tank12").child("temp").val(); // Example: 120 and will be formatted to 120°
        var tank12time = snapshot12.child("tanks").child("tank12").child("timestamp").val();
        var tank12min = snapshot12.child("tanks").child("tank12").child("minTemp").val(); // min temperature
        var tankDyn = snapshot12.child("tanks").child("isDynamicColor").val(); // isDynamicColor=true or false
        var tank12max = snapshot12.child("tanks").child("tank12").child("maxTemp").val(); // max temperature
        var tank12label = snapshot12.child("tanks").child("tank12").child("label").val(); // value label
        var tank12labelDyn = snapshot12.child("tanks").child("tank12").child("isDynamicLabel").val(); // isDynamicLabel = true or false
        if (tankDyn=="true") {
        if (tank12val >=tank12max) {
          document.getElementById("tank12Color").className = "card text-white bg-danger";
        } else if (tank12val<=tank12min) {
          document.getElementById("tank12Color").className = "card text-white bg-warning";
        } else if (tank12val>tank12min && tank12val<tank12max) {
          document.getElementById("tank12Color").className = "card text-white bg-success";
        } else {
          document.getElementById("tank12Color").className = "card text-white bg-primary";
        }}
        var tank12 = " " + tank12val;
        document.getElementById("tank12").innerHTML =tank12 + "°F";
        if (tank12labelDyn=="true") {
          document.getElementById("labelTank12").innerHTML =tank12label;
        }
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
