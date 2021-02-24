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