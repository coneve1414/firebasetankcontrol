window.onload(allowed());
function allowed(){
var userRef = firebase.database().ref("user");
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User logged in already or has just logged in.
      console.log(user.uid);
      //ref.once("value")
userRef.once("value", function(userSnapshot) {
      var userid = "" + user.uid
      
    //var name = snapshot.child("tanks").val(); // {first:"Ada",last:"Lovelace"}
    //var firstName = snapshot.child("name/first").val(); // "Ada"
      var orgid = userSnapshot.child(userid).val(); // "Lovelace"
      //var orgIdTest = userSnapshot.child(userid).val();
      //var version = snapshot.child("namf").child("version").val();
      if (orgid == null) {
        var orgid = "namf";
      }
      console.log(orgid);
      //var orgid2 = " " + orgid
      //document.getElementById("version").innerHTML= version;
      //var tank01time = snapshot.child("tanks").child("tank01").child("timestamp").val();
    //document.write(tank01);
    //var age = snapshot.child("age").val(); // null
    
    var usersRef = firebase.database().ref("users");
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User logged in already or has just logged in.
      console.log(user.uid);
      //ref.once("value")
usersRef.once("value", function(debugInfo) {
      var userid = "" + user.uid
    //var name = snapshot.child("tanks").val(); // {first:"Ada",last:"Lovelace"}
    //var firstName = snapshot.child("name/first").val(); // "Ada"
      var useruid = debugInfo.child(orgid).child(userid).val(); // "Lovelace"
      var version = debugInfo.child(orgid).child("version").val();
      var orgname = debugInfo.child(orgid).child("orgName").val();
      console.log(orgname);
      console.log(version);
      console.log(useruid);
      var useruid2 = " " + useruid
      document.getElementById("version").innerHTML= version;
      document.getElementById("userEmail").innerHTML = user.email;
      //document.getElementById("emailDebug").innerHTML = user.email;
      //document.getElementById("useridDebug").innerHTML = user.uid;
      //document.getElementById("userPhotoUrl").innerHTML = user.photoURL;
      //var tank01time = snapshot.child("tanks").child("tank01").child("timestamp").val();
    //document.write(tank01);
    //var age = snapshot.child("age").val(); // null
    if (useruid == false) {
        getTanks.hideTemps();
        window.alert("Access Denied! Code: A1004");
    
    } else {
        if (useruid2 == " null") {
            hideTemps();
            window.alert("Access Denied! Code: A1003")
    //        document.getElementById("role").innerHTML = "Standard User";
    //        document.getElementById("org").innerHTML = "New Age Metal Fabrication";
    //        var version = debugInfo.child(orgid).child("version").val();
    //        document.getElementById("version").innerHTML= version;
            //console.log(orgid);
    //        getTanks(orgid);
        } else { 
            if(useruid2 == " admin") {
                document.getElementById("role").innerHTML = "Administrator";
                document.getElementById("org").innerHTML = orgname;
                getTanks(orgid);
            } else{
                if (useruid2 == " superadmin") {
                    document.getElementById("role").innerHTML = "Super Administrator";
                    document.getElementById("org").innerHTML = orgname;
                    getTanks(orgid);
                } else {
            document.getElementById("org").innerHTML = orgname;
            document.getElementById("role").innerHTML = "Standard User";
            getTanks(orgid);
            return
        }
    }
    }
      // User not logged in or has just logged out.
    }
  });
    };
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

  function hideTemps() {
    var x = document.getElementById("temps");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


}}); 

    
    
    
})}});}
