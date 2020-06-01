var ref = firebase.database().ref("users");
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User logged in already or has just logged in.
      console.log(user.uid);
      //ref.once("value")
ref.once("value", function(snapshot) {
      var userid = "" + user.uid
    //var name = snapshot.child("tanks").val(); // {first:"Ada",last:"Lovelace"}
    //var firstName = snapshot.child("name/first").val(); // "Ada"
      var useruid = snapshot.child("namf").child(userid).val(); // "Lovelace"
      var version = snapshot.child("namf").child("version").val();
      console.log(useruid);
      var useruid2 = " " + useruid
      document.getElementById("version").innerHTML= version;
      document.getElementById("userEmail").innerHTML = firebase.auth().currentUser.email;
      //var tank01time = snapshot.child("tanks").child("tank01").child("timestamp").val();
    //document.write(tank01);
    //var age = snapshot.child("age").val(); // null
    if (useruid == false) {
        hideTemps();
        window.alert("Access Denied! Code: A1004");
    
    } else {
        if (useruid2 == " null") {
            hideTemps();
            window.alert("Access Denied! Code: A1003")
        } else { 
            if(useruid2 == " admin") {
                document.getElementById("role").innerHTML = "Administrator";
                document.getElementById("adminOptions").style.display = "none";
                document.getElementById("org").innerHTML = "New Age Metal Fabrication (NAMF)";
            } else{
                if (useruid2 == " superadmin") {
                    document.getElementById("role").innerHTML = "Super Administrator";
                    
                    document.getElementById("org").innerHTML = "New Age Metal Fabrication (NAMF)";
                } else {
            document.getElementById("org").innerHTML = "New Age Metal Fabrication (NAMF)";
            
            document.getElementById("role").innerHTML = "Standard User";
            return
        }
    }
    }
      // User not logged in or has just logged out.
    }
  });
    };

  function hideTemps() {
    var x = document.getElementById("temps");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function hideAdmin() {
    var x = document.getElementById("adminOptions");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


});
