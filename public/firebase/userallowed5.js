window.onload(allowed());
var debugEnable = false;
var pageLocation = "/admin/dashboard.html"

//database references
var userRef = firebase.database().ref("user"); //Reference for the "/user" directory in the database
var baseRef = firebase.database().ref("/"); //Reference for the "/" directory in the database
var usersRef = firebase.database().ref("users"); //Reference for the "/users" directory in the database
var orgRef = firebase.database().ref("orgCodes"); //Reference for the "/orgCodes" directory in the database

//base functions

function showAlert(errorCodeIn, alertColorIn, alertLocationIn) {
  if(typeof(document.getElementById(errorCodeIn)) != 'undefined' && document.getElementById(errorCodeIn) != null){
    console.log("alert already exists");
  } else {
    var alertClass;
    var alertLocation;
    var iDiv = document.createElement('div');
  iDiv.id = errorCodeIn;
  if (alertLocationIn==null) {
    alertLocation = 'alerts';
  } else if (alertLocationIn=="tankMinMax") {
    alertLocation = 'minMaxAlerts';
  } else if (alertLocationIn=="changeAdminUser") {
    alertLocation = 'adminChangeAlerts';
  } else {
    alertLocation = 'alerts';
  }
  if (alertColorIn==null) {
    alertClassIn = 'alert alert-danger alert-dismissible fade show';
  } else {
    alertClassIn = 'alert alert-'+alertColorIn+' alert-dismissible fade show';
  }
  if (errorCodeIn=="A1020") {
    iDiv.innerHTML= "Operation Succeeded! | Code: A1020"
  } else if (errorCodeIn=="A1021") {
    iDiv.innerHTML= "Sorry, Operation Failed | Code: A1021"
  } else if (errorCodeIn=="A1022") {
    iDiv.innerHTML= "Operation Success! Reloading... | Code: A1022"
  } else if (errorCodeIn=="A1023") {
    iDiv.innerHTML= "Sorry, Operation Failed | Code: A1023"
  }
  iDiv.className= alertClass;
  // iDiv.innerHTML = 'block';
  //var innerDiv = document.createElement('button');
  //innerDiv.className = 'close';
  // innerDiv.data.dismiss='alert';
  // innerDiv.aria.label='Close';
  // innerDiv.data-dismiss="alert";
  // innerDiv.aria-label="Close";
  //iDiv.appendChild("<button class='close' type='button' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span></button>");
  document.getElementById(alertLocation).appendChild(iDiv);
  }

}
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
function showOrgCodeChange() {
  var xxxx = document.getElementById("ErrorA1012");
  if (xxxx.style.display === "none") {
    xxxx.style.display = "block";
  } else {
    xxxx.style.display = "none";
  }
}
function showOrgCodeNotValid() {
  var xxxxx = document.getElementById("ErrorA1013");
  if (xxxxx.style.display === "none") {
    xxxxx.style.display = "block";
  } else {
    xxxxx.style.display = "none";
  }
}
function showPasswordChangeSuccess() {
  var xxxxxx = document.getElementById("ErrorA1014");
  if (xxxxxx.style.display === "none") {
    xxxxxx.style.display = "block";
  } else {
    xxxxxx.style.display = "none";
  }
}
function showPasswordChangeFail() {
  var xxxxxxx = document.getElementById("ErrorA1015");
  if (xxxxxxx.style.display === "none") {
    xxxxxxx.style.display = "block";
  } else {
    xxxxxxx.style.display = "none";
  }
}
function showTankNumChangeSuccess() {
  var xxxxxxxx = document.getElementById("ErrorA1018");
  if (xxxxxxxx.style.display === "none") {
    xxxxxxxx.style.display = "block";
  } else {
    xxxxxxxx.style.display = "none";
  }
}
function showTankNumChangeFail() {
  var xxxxxxxxx = document.getElementById("ErrorA1019");
  if (xxxxxxxxx.style.display === "none") {
    xxxxxxxxx.style.display = "block";
  } else {
    xxxxxxxxx.style.display = "none";
  }
}
function setSidebar() {
  var xxxxxxxx = document.getElementById("appHeader");
  if (xxxxxxxx.className == "app footer-fixed header-fixed sidebar-fixed sidebar-lg-show") {
    xxxxxxxx.className = "app footer-fixed header-fixed sidebar-fixed sidebar-lg-show sidebar-minimized";
  } else {
    xxxxxxxx.className = "app footer-fixed header-fixed sidebar-fixed sidebar-lg-show";
  }
}



function showAdminOptions() {

  var adminOptions01 = document.getElementById("optionsNavLink");
  if (adminOptions01.style.display === "none") {
    adminOptions01.style.display = "block";
  } else {
    adminOptions01.style.display = "none";
  }
  // var adminOptions02 = document.getElementById("adminOptionsTank02");
  // if (adminOptions02.style.display === "none") {
  //   adminOptions02.style.display = "block";
  // } else {
  //   adminOptions02.style.display = "none";
  // }
  // var adminOptions03 = document.getElementById("adminOptionsTank03");
  // if (adminOptions03.style.display === "none") {
  //   adminOptions03.style.display = "block";
  // } else {
  //   adminOptions03.style.display = "none";
  // }
  // var adminOptions04 = document.getElementById("adminOptionsTank04");
  // if (adminOptions04.style.display === "none") {
  //   adminOptions04.style.display = "block";
  // } else {
  //   adminOptions04.style.display = "none";
  // }
  // var adminOptions05 = document.getElementById("adminOptionsTank05");
  // if (adminOptions05.style.display === "none") {
  //   adminOptions05.style.display = "block";
  // } else {
  //   adminOptions05.style.display = "none";
  // }
  // var adminOptions06 = document.getElementById("adminOptionsTank06");
  // if (adminOptions06.style.display === "none") {
  //   adminOptions06.style.display = "block";
  // } else {
  //   adminOptions06.style.display = "none";
  // }
  //console.log("test");
}

function enableHumidity(tankNumHIn) {
  var HDiv = document.createElement('div');
  HDiv.className = 'text-value';
  HDiv.innerHTML = 'Loading Test...';
  HDiv.id='tank'+tankNumHIn+'H';
  var HDiv2 = document.createElement('div');
  HDiv2.id = 'labelTank'+tankNumHIn;
  HDiv2.innerHTML= 'Tank '+tankNumHIn+' Humidity';
  document.getElementById('tankCard'+tankNumHIn).appendChild(HDiv);
  document.getElementById('tankCard'+tankNumHIn).appendChild(HDiv2);
}

function redirectDashboard() {
window.location = pageLocation;
}

function hideSubOrg1Button() {
  var hideSubOrg1ButtonVar = document.getElementById("subOrg1");
  if (hideSubOrg1ButtonVar.style.display === "none") {
    hideSubOrg1ButtonVar.style.display = "block";
  } else {
    hideSubOrg1ButtonVar.style.display = "none";
  }
  var hideSubOrg1ButtonVarMobile = document.getElementById("subOrg1Mobile");
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
  var hideSubOrg2ButtonVarMobile = document.getElementById("subOrg2Mobile");
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
  var hideSubOrg3ButtonVarMobile = document.getElementById("subOrg3Mobile");
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
var tankOrgIdMaster;
var multiOrgTrueMaster;
var tankNum;
var roleMaster;
var MultiOrgSubOrgNumMaster;
var pageVar;
var roleMasterVar;
var orgIdBaseMaster;
var domainMaster;
var domainLock;
var domainLockMaster;
var domainHideMaster;
var userMaster;
var master = {
  subOrg1: null,
  subOrg2: null,
  subOrg3: null,
  tankNumberShown: null
}

function page(pageSetIn) {
  pageVar = pageSetIn;
}

function showTank(tankNumberIn2) {
  console.log(tankNumberIn2);
  var tankNumberIn = tankNumberIn2+"";
  console.log(tankNumberIn2);
  if (document.getElementById("pageView").getAttribute("value")=="dashboard") {
  var iDiv = document.createElement('div');
  iDiv.id = 'orgTank'+tankNumberIn;
  iDiv.className = "col-sm-6 col-lg-3";
  var inDiv1 = document.createElement('div');
  inDiv1.className = 'card text-white bg-primary';
  inDiv1.id = 'tank'+tankNumberIn+'Color'
  var inDiv2 = document.createElement('div');
  inDiv2.className = 'card-body pb-0';
  inDiv2.style='height:160px;';
  inDiv2.id='tankCard'+tankNumberIn;
  var inDiv3 = document.createElement('div');
  inDiv3.className = 'btn-group float-right';
  var inDiv4 = document.createElement('div');
  inDiv4.className = 'text-value';
  inDiv4.innerHTML = 'Loading Test...';
  inDiv4.id='tank'+tankNumberIn;
  var inDiv5 = document.createElement('div');
  inDiv5.id = 'labelTank'+tankNumberIn;
  inDiv5.innerHTML= 'Loading Test...';
  inDiv2.appendChild(inDiv3);
  inDiv2.appendChild(inDiv4);
  inDiv2.appendChild(inDiv5);
  inDiv1.appendChild(inDiv2);
  iDiv.appendChild(inDiv1);
  document.getElementById('temps').appendChild(iDiv);
} else {
  var iDiv2 = document.createElement('div');
  iDiv2.id = 'tank'+tankNumberIn;
  var iDiv3 = document.createElement('div');
  iDiv3.id = 'tankCard'+tankNumberIn;
  var iDiv4 = document.createElement('div');
  iDiv4.id = 'labelTank'+tankNumberIn;
  var iDiv5 = document.createElement('div');
  iDiv5.id = 'orgTank'+tankNumberIn;
  document.getElementById('hiddenTankId').appendChild(iDiv2);
  document.getElementById('hiddenTankId').appendChild(iDiv3);
  document.getElementById('hiddenTankId').appendChild(iDiv4);
  document.getElementById('hiddenTankId').appendChild(iDiv5);
}
  }

function validateAdmin() {
  //Regex for Valid Characters i.e. Alphabets, Numbers and Space.
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
  if (domainLockMaster) {
  //Validate TextBox value against the Regex.
  var regex = document.getElementById("adminEmailIn").value;
  var isValid = regex.includes("@");
  // console.log(isValid);
  if (regex+domainMaster==user.email) {
    alert("Please do not enter your own email.");
    return;
  } else if (isValid) {
    alert("Please do not enter another domain");
  } else {
    setAdminUser();
  }
} else {
  setAdminUser();
}
    }})
}

function showAdminChange() {
  var showAdminChangeVar = document.getElementById("adminChange");
  if (showAdminChangeVar.style.display === "none") {
    showAdminChangeVar.style.display = "block";
  } else {
    showAdminChangeVar.style.display = "none";
  }
}

function showDomain() {
  var showDomainVar = document.getElementById("adminEmailDomainEnable");
  if (showDomainVar.style.display === "none") {
    showDomainVar.style.display = "block";
  } else {
    showDomainVar.style.display = "none";
  }
  var currentMessageAdminVar = document.getElementById("currentMessageAdmin");
  if (currentMessageAdminVar.style.display === "none") {
    currentMessageAdminVar.style.display = "block";
  } else {
    currentMessageAdminVar.style.display = "none";
  }
}

function setAdminUser() {
  var adminEmailIn = document.getElementById("adminEmailIn").value;
  var oldAdminRole = document.getElementById("oldAdminRole").value;
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var domainOverride;
      if (domainMaster!=null) {
        domainOverride = domainMaster;
      } else {
        domainOverride = null;
        showDomain();
      }
      baseRef.child(orgIdBaseMaster).child("adminContact").child("adminEmail").set(adminEmailIn + domainOverride).then(function() {
        // showAlert("A1022", "success", "changeAdminUser");
        // setTimeout(redirectDashboard(), 100);
      }).catch(function(error) {
        // var errorCode = error.code;
        var errorMessage = error.message;
        showAlert("A1023", "danger", "changeAdminUser");
        alert(errorMessage);
        return;
      })
      if (oldAdminRole!="false") {

      baseRef.child("users").child(orgIdBaseMaster).child(user.uid).set(oldAdminRole).then(function() {
        // showAlert("A1022", "success", "changeAdminUser");
        // setTimeout(redirectDashboard(), 100);
      }).catch(function(error) {
        // var errorCode = error.code;
        var errorMessage = error.message;
        showAlert("A1023", "danger", "changeAdminUser");
        alert(errorMessage);
        return;
      })
      } else {
        baseRef.child("user").child(user.uid).set(null).then(function() {
          // showAlert("A1022", "success", "changeAdminUser");
          // setTimeout(redirectDashboard(), 100);
        }).catch(function(error) {
          // var errorCode = error.code;
          var errorMessage = error.message;
          showAlert("A1023", "danger", "changeAdminUser");
          alert(errorMessage);
          return;
        })
      }
      baseRef.child(orgIdBaseMaster).child("adminContact").child("adminChange").set(true).then(function() {
        showAlert("A1022", "success", "changeAdminUser");
        setTimeout(redirectDashboard(), 100);
      }).catch(function(error) {
        // var errorCode = error.code;
        var errorMessage = error.message;
        showAlert("A1023", "danger", "changeAdminUser");
        alert(errorMessage);
        return;
      })

    } else {
      redirectDashboard();
    }
  });
}

function setTankShown() {
  var tankNumSelectIn2 = document.getElementById("tankNumSelect").value;
  var tankNumSelectIn = parseInt(tankNumSelectIn2);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      baseRef.child(tankOrgIdMaster).child("tankNumber").set(tankNumSelectIn).then(function() {
        showTankNumChangeSuccess();
        setTimeout(redirectDashboard(), 100);
      }).catch(function(error) {
        // var errorCode = error.code;
        var errorMessage = error.message;
        showTankNumChangeFail();
        alert(errorMessage);
      })

    } else {
      redirectDashboard();
    }
  });
}

function setTankMinMax() {
  var tankNumSelectIn2 = document.getElementById("tankNumSelect2").value;
  var tankNumMinIn = document.getElementById('minTemp').value;
  var tankNumMaxIn = document.getElementById('maxTemp').value;
  console.log(tankNumMinIn);
  var tankMinInNum = Number(tankNumMinIn);
  console.log(tankNumMaxIn);
  var tankMaxInNum = Number(tankNumMaxIn);
  if (tankNumMinIn==null) {
    console.log("min is empty");
    return;
  } else if (tankNumMinIn=="") {
    console.log("min is empty");
    return;
  } else if (tankNumMaxIn==null) {
    console.log("min is empty");
    return;
  } else if (tankNumMaxIn=="") {
    console.log("min is empty");
    return;
  } else if (tankMaxInNum<tankMinInNum) {
    console.log("min cannot be larger than max");
    return;
  } else {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      baseRef.child(tankOrgIdMaster).child("tanks").child("tank"+tankNumSelectIn2).child("minTemp").set(tankMinInNum).then(function() {
        // showTankNumChangeSuccess();
        // setTimeout(redirectDashboard(), 100);
        // showAlert("A1020", "success", "tankMinMax");
      }).catch(function(error) {
        // var errorCode = error.code;
        showAlert("A1021", 'danger', "tankMinMax");
        var errorMessage = error.message;
        // showTankNumChangeFail();
        alert(errorMessage);
        return;
      })

    } else {
      redirectDashboard();
      //console.log("minSuccess");
    }
    if (user) {
      baseRef.child(tankOrgIdMaster).child("tanks").child("tank"+tankNumSelectIn2).child("maxTemp").set(tankMaxInNum).then(function() {
        // showTankNumChangeSuccess();
        showAlert("A1020", 'success', "tankMinMax");
        // setTimeout(redirectDashboard(), 100);
      }).catch(function(error) {
        // var errorCode = error.code;
        showAlert("A1021", 'danger', "tankMinMax");
        var errorMessage = error.message;
        // showTankNumChangeFail();
        alert(errorMessage);
      })

    } else {
      redirectDashboard();
      //console.log("maxSuccess");
    }
  });
 } 
}

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

//page specific functions - account.html

function changeOrg() {
  var orgCodeIn = document.getElementById('newOrgCode').value;
  getOrgCode(orgCodeIn);
}

function setSubOrgPermission(orgCodeValid2, subOrgNum, subOrgPermSet) {
  baseRef.once("value", function(debugInfo) {
    var subOrg1b = debugInfo.child(orgCodeValid2).child("subOrgs").child("org1").val();
    var subOrg2b = debugInfo.child(orgCodeValid2).child("subOrgs").child("org2").val();
    var subOrg3b = debugInfo.child(orgCodeValid2).child("subOrgs").child("org3").val();
    if (subOrgNum==1) {
      baseRef.child(orgCodeValid2).child(subOrg1b).child(userIdMaster).set(subOrgPermSet);
    } else if (subOrgNum==2) {
      baseRef.child(orgCodeValid2).child(subOrg2b).child(userIdMaster).set(subOrgPermSet);
    } else if (subOrgNum==3) {
      baseRef.child(orgCodeValid2).child(subOrg3b).child(userIdMaster).set(subOrgPermSet);
    } else {
      console.log("error");
    }
    });
  
}

function getOrgCode(orgCode) {
  console.log("recieved!")
  console.log("orgCode: "+orgCode);
   //checking the code against the database
  console.log("checking the database");
  orgRef.once("value", function(snapshot) {
  console.log("now in the database check!");
  console.log("NewOrgCode: "+orgCode);
  var orgCodeValid3 = snapshot.child(orgCode).val();
  console.log(orgCodeValid3);
  var orgCodeValid = orgCodeValid3+"";
  console.log(userIdMaster);
  if (roleMaster=="admin") {
    roleMaster="admin";
  } else if (roleMaster=="superadmin"){
    roleMaster="superadmin";
  } else if (roleMaster=="systemadmin") {
    roleMaster="systemadmin";
  } else {
    roleMaster="true";
  }
  if (orgCodeValid3!=null) {
    var userTopLevelDomain = userMaster.email.lastIndexOf(".");
        var userAtSymbol = userMaster.email.lastIndexOf("@");
        var userEmailFront = userMaster.email.substring(0, userAtSymbol);
        var userMidLevelDomain = userMaster.email.substring(userAtSymbol+1, userTopLevelDomain)
        var userEmailBack = userMaster.email.substring(userTopLevelDomain+1);
        var userInfo = {
          uid: userMaster.uid,
          email: userMaster.email,
          updateSuccess: true,
          role: {
            org: orgCodeValid,
            role: roleMaster
          }
        }
        baseRef.child("users2").child(userEmailBack).child(userMidLevelDomain).child(userEmailFront).set(userInfo).then(function() {
          redirectadmin();
        });
    baseRef.child("user").child(userIdMaster).set(orgCodeValid);
    baseRef.child("users").child(orgCodeValid).child(userIdMaster).set(roleMaster);
    baseRef.once("value", function(debugInfo333) {
    var multiOrgTrueb = debugInfo333.child("multiViewOrgs").child(orgCodeValid).val();
    var multiOrgSubOrgNumbb = debugInfo333.child(orgCodeValid).child("subOrgNumber").val(); //Currently, Hard Limit on Sub Views is 3
    multiOrgTrueMasterb = multiOrgTrueb;
    console.log(multiOrgTrueMaster);
    
    if (multiOrgTrueMasterb == "true") {
      //window.alert("MULTI ORG TRUE");
      var subOrgId1bb;
      var subOrgId2bb;
      var subOrgId3bb;
      console.log(multiOrgSubOrgNumbb);
      if (multiOrgSubOrgNumbb == "3") {
        subOrgId1bb = debugInfo333.child(orgCodeValid).child("subOrgs").child("org1").val();
        subOrgId2bb = debugInfo333.child(orgCodeValid).child("subOrgs").child("org2").val();
        subOrgId3bb = debugInfo333.child(orgCodeValid).child("subOrgs").child("org3").val();
        console.log(subOrgId1bb);
        console.log(subOrgId2bb);
        console.log(subOrgId3bb);
        baseRef.child(orgCodeValid3).child(subOrgId1bb).child(userIdMaster).set("true");
        baseRef.child(orgCodeValid3).child(subOrgId2bb).child(userIdMaster).set("true");
        baseRef.child(orgCodeValid3).child(subOrgId3bb).child(userIdMaster).set("true");
      } else {
        subOrgId1bb = debugInfo333.child(orgCodeValid).child("subOrgs").child("org1").val();
        subOrgId2bb = debugInfo333.child(orgCodeValid).child("subOrgs").child("org2").val();
        console.log(subOrgId1bb);
        console.log(subOrgId2bb);
        baseRef.child(orgCodeValid3).child(subOrgId1bb).child(userIdMaster).set("true");
        baseRef.child(orgCodeValid3).child(subOrgId2bb).child(userIdMaster).set("true");
      }
      showOrgCodeChange();
      setTimeout(redirectDashboard(), 100);
    } else {
    baseRef.child("user").child(userIdMaster).set(orgCodeValid);
    baseRef.child("users").child(orgCodeValid).child(userIdMaster).set(roleMaster);
    console.log("success");
    showOrgCodeChange();
    setTimeout(redirectDashboard(), 100);
    }});
  } else {
    console.log("error");
    showOrgCodeNotValid();
  }
});

};


//main function
function allowed(){
// const remoteConfig = firebase.remoteConfig();
// remoteConfig.settings.minimumFetchIntervalMillis = 3600000;
// remoteConfig.defaultConfig = {
//   "loginDisabled": "false"
// };
// const val = remoteConfig.getValue("welcome_messsage");
showNoOrg();
showOrgCodeNotValid();
showOrgCodeChange();
showPasswordChangeFail();
showPasswordChangeSuccess();
showAdminOptions();
pageVar=document.getElementById("pageView").getAttribute("value");
console.log(pageVar);
if (document.getElementById("pageView").getAttribute("value")==null) {
console.log("failed to know what page");
} else if (document.getElementById("pageView").getAttribute("value")=="options") {
showTankNumChangeFail();
showTankNumChangeSuccess();
showAdminChange();
} else {
  console.log("failed");
}
//showOrgViewDropDown();
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userMaster = user;
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
              roleMaster = useruid;
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
              orgIdBaseMaster=orgid;
              if (debugInfo.child(orgid).child("adminContact").child("adminChange").val()==true) {
              if (user.email == debugInfo.child(orgid).child("adminContact").child("adminEmail").val()){
                baseRef.child("users").child(orgid).child(user.uid).set("superadmin");
                baseRef.child(orgid).child("adminContact").child("adminChange").set(false);
                setTimeout(redirectDashboard(), 1000);
              } else {
                console.log("error - user not system admin")
              }
            } else {
              console.log("either does not exist, or it does not allow admin changes");
            }

            if (debugInfo.child(orgid).child("companyInfo").child("domain").val()!=null) {
              if (pageVar=="options") {
                document.getElementById("adminEmailDomain").innerHTML = "@"+debugInfo.child(orgid).child("companyInfo").child("domain").val();
                domainMaster = "@"+debugInfo.child(orgid).child("companyInfo").child("domain").val();
                if (debugInfo.child(orgid).child("adminContact").child("adminEmail").val() !=null) {
                  document.getElementById("currentAdminEmail").innerHTML = debugInfo.child(orgid).child("adminContact").child("adminEmail").val();
                } else {
                  document.getElementById("currentAdminEmail").innerHTML = "tankstatuscontrol.ce@gmail.com";
                }
                if (debugInfo.child(orgid).child("companyInfo").child("domainLocked").val()!=null) {
                  if (debugInfo.child(orgid).child("companyInfo").child("domainLocked").val()==true) {
                    domainLockMaster = true;
                  } else {
                    domainLockMaster = false;
                    domainMaster=null;
                    domainHideMaster = true;
                  }
                  // domainLockMaster = debugInfo.child(orgid).child("companyInfo").child("domainLocked").val();
                } else {
                  domainLockMaster = false;
                  domainMaster= null;
                  domainHideMaster = true;
                }
                
              } else {
                domainHideMaster = true;
                console.log("not on the org options page");
              }
              
              // if (user.email == debugInfo.child(orgid).child("adminContact").child("adminEmail").val()){
              //   baseRef.child("users").child(orgid).child(user.uid).set("superadmin");
              //   baseRef.child(orgid).child("adminContact").child("adminChange").set(false);
              //   redirectDashboard();
              // } else {
              //   console.log("error - user not system admin")
              // }
            } else {
              if (pageVar=="options") {
                // document.getElementById("adminEmailDomain").style.display="block";
                domainHideMaster=true;
              } else {
                console.log("not on the org options page");
              }
              // console.log("either does not exist, or it does not allow admin changes");

            }

              if (multiOrgTrue == "true") {
                //window.alert("MULTI ORG TRUE");
                var multiOrgSubOrgNum = debugInfo.child(orgid).child("subOrgNumber").val(); //Currently, Hard Limit on Sub Views is 3
                MultiOrgSubOrgNumMaster = multiOrgSubOrgNum;
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
                tankOrgIdMaster = orgid2;
                console.log(tankOrgIdMaster);
              } else {
                orgid2 = orgid;
                hideSubOrg3Button();
                hideSubOrg2Button();
                document.getElementById("subOrg1").addEventListener('click', redirectDashboard, false);
                document.getElementById("subOrg1Mobile").addEventListener('click', redirectDashboard, false);
                document.getElementById("subOrg1Name").innerHTML= orgLocation1;
                document.getElementById("subOrg1NameMobile").innerHTML= orgLocation1;
                console.log("ORG ID FALSE: "+ orgid2);
                tankOrgIdMaster = orgid2;
                console.log(tankOrgIdMaster);
              }
              var tankNumFetch = debugInfo.child(orgid2).child("tankNumber").val();  // gets info of the total number of values that should be displayed.
              console.log(tankNumFetch);
              tankNum=tankNumFetch;
              master.tankNumberShown = tankNumFetch;
              // if (master.tankNumberShown >15) {
              //   master.tankNumberShown = 15;
              // }
              if (pageVar=="options") {
                document.getElementById("tanksShownCurrently").innerHTML= tankNumFetch;
              }
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
                } else if (tankNum=="12") {

                } else if (tankNum=="13") {
                  
                  showTank("13");

                } else {
                  var i2 = master.tankNumberShown;
                  // var i4 = i2;
                  console.log(i2);
                  for (i2 = 13; i2 < master.tankNumberShown+1; i2++) {
                    // if (i2<12) {
                    //   // var i3 = ""+i2;
                      console.log(i2);
                      showTank(i2);
                      // i2--;
                    // } else {
                      console.log("success");
                    // }
                    
                  } 
                  console.log("all values shown")
                }
                roleMasterVar = useruid2;
                if (useruid2 == " null") {
                    hideTemps(); //Hides the temperature guages
                    showNoOrg();
                    document.getElementById("subOrg1Name").innerHTML= "Dashboard";
                    if (pageVar=="options") {
                      redirectDashboard();
                    }
                    //window.alert("Access Denied! User not assigned to an organization! Code: A1003");
                } else if (useruid2 == " false") {
                  hideTemps(); //Hides the temperature guages
                  showNoOrg();
                  document.getElementById("subOrg1Name").innerHTML= "Dashboard";
                  if (pageVar=="options") {
                    redirectDashboard();
                  }
                  //window.alert("Access Denied! User not assigned to an organization! Code: A1003");
              } else if (useruid2==" admin") {
                  document.getElementById("role").innerHTML = "Administrator";
                  document.getElementById("org").innerHTML = orgname;
                  getLogo(orgid2);
                  getTanks(orgid2);
                  showAdminOptions();
                } else if (useruid2==" superadmin"){
                  document.getElementById("role").innerHTML = "Super Administrator";
                  document.getElementById("org").innerHTML = orgname;
                  getLogo(orgid2);
                  getTanks(orgid2);
                  if (pageVar=="options") {
                    showAdminChange();
                    console.log(domainHideMaster);
                    if (domainHideMaster==true) {
                      showDomain();
                    } else {
                      console.log("domain is not hidden");
                    }
                  }
                  showAdminOptions();
                } else if (useruid2 == " systemadmin") {
                  document.getElementById("role").innerHTML = "System Administrator (Global)";
                  document.getElementById("org").innerHTML = orgname;
                  showAdminOptions();
                  if (pageVar=="options") {
                    showAdminChange();
                    console.log(domainHideMaster);
                    if (domainHideMaster==true) {
                      showDomain();
                    } else {
                      console.log("domain is not hidden");
                    }
                  }
                  getLogo(orgid2);
                  getTanks(orgid2);
                } else {
                  document.getElementById("org").innerHTML = orgname;
                  document.getElementById("role").innerHTML = "Standard User";
                  getLogo(orgid2);
                  getTanks(orgid2);
                  if (pageVar=="options") {
                    redirectDashboard();
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
}

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

