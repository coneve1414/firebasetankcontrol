firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user.uid)
        var uid = user.uid + ""
 {
var ref = firebase.database().ref(orgid);
//ref.once("value")
ref.on("value", function(snapshot) {
//var name = snapshot.child("tanks").val(); // {first:"Ada",last:"Lovelace"}
//var firstName = snapshot.child("name/first").val(); // "Ada"
  var tank01val = snapshot.child("tanks").child("tank01").child("temp").val(); // "Lovelace"
  var tank01time = snapshot.child("tanks").child("tank01").child("timestamp").val();
//  var tank01val = snapshot.child("tank01").val(); // "Lovelace"
  var tank01 = " " + tank01val;
  document.getElementById("tank01").innerHTML =tank01 + "°F";
  document.getElementById("tank01time").innerHTML ="Last Updated: " + tank01time;
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
  document.getElementById("tank02time").innerHTML ="Last Updated: " + tank02time;
//document.write(tank01);
//var age = snapshot.child("age").val(); // null
});

//ref.once("value")
ref.on("value", function(snapshot3) {
//var name = snapshot.child("tanks").val(); // {first:"Ada",last:"Lovelace"}
//var firstName = snapshot.child("name/first").val(); // "Ada"
  var tank03val = snapshot3.child("tanks").child("tank03").child("temp").val(); // "Lovelace"
  var tank03time = snapshot3.child("tanks").child("tank03").child("timestamp").val();
//  var tank01val = snapshot.child("tank01").val(); // "Lovelace"
  var tank03 = " " + tank03val;
  document.getElementById("tank03").innerHTML =tank03 + "°F";
  document.getElementById("tank03time").innerHTML ="Last Updated: " + tank03time;
//document.write(tank01);
//var age = snapshot.child("age").val(); // null
});
//ref.once("value")
ref.on("value", function(snapshot3) {
  //var name = snapshot.child("tanks").val(); // {first:"Ada",last:"Lovelace"}
  //var firstName = snapshot.child("name/first").val(); // "Ada"
    var tank03val = snapshot3.child("tanks").child("tank03").child("temp").val(); // "Lovelace"
    var tank03time = snapshot3.child("tanks").child("tank03").child("timestamp").val();
  //  var tank01val = snapshot.child("tank01").val(); // "Lovelace"
    var tank03 = " " + tank03val;
    document.getElementById("tank03").innerHTML =tank03 + "°F";
    document.getElementById("tank03time").innerHTML ="Last Updated: " + tank03time;
  //document.write(tank01);
  //var age = snapshot.child("age").val(); // null
  });
  //ref.once("value")
ref.on("value", function(snapshot3) {
  //var name = snapshot.child("tanks").val(); // {first:"Ada",last:"Lovelace"}
  //var firstName = snapshot.child("name/first").val(); // "Ada"
    var tank03val = snapshot3.child("tanks").child("tank03").child("temp").val(); // "Lovelace"
    var tank03time = snapshot3.child("tanks").child("tank03").child("timestamp").val();
  //  var tank01val = snapshot.child("tank01").val(); // "Lovelace"
    var tank03 = " " + tank03val;
    document.getElementById("tank03").innerHTML =tank03 + "°F";
    document.getElementById("tank03time").innerHTML ="Last Updated: " + tank03time;
  //document.write(tank01);
  //var age = snapshot.child("age").val(); // null
  });
  //ref.once("value")
ref.on("value", function(snapshot3) {
  //var name = snapshot.child("tanks").val(); // {first:"Ada",last:"Lovelace"}
  //var firstName = snapshot.child("name/first").val(); // "Ada"
    var tank03val = snapshot3.child("tanks").child("tank03").child("temp").val(); // "Lovelace"
    var tank03time = snapshot3.child("tanks").child("tank03").child("timestamp").val();
  //  var tank01val = snapshot.child("tank01").val(); // "Lovelace"
    var tank03 = " " + tank03val;
    document.getElementById("tank03").innerHTML =tank03 + "°F";
    document.getElementById("tank03time").innerHTML ="Last Updated: " + tank03time;
  //document.write(tank01);
  //var age = snapshot.child("age").val(); // null
  });
  //ref.once("value")
ref.on("value", function(snapshot3) {
  //var name = snapshot.child("tanks").val(); // {first:"Ada",last:"Lovelace"}
  //var firstName = snapshot.child("name/first").val(); // "Ada"
    var tank03val = snapshot3.child("tanks").child("tank03").child("temp").val(); // "Lovelace"
    var tank03time = snapshot3.child("tanks").child("tank03").child("timestamp").val();
  //  var tank01val = snapshot.child("tank01").val(); // "Lovelace"
    var tank03 = " " + tank03val;
    document.getElementById("tank03").innerHTML =tank03 + "°F";
    document.getElementById("tank03time").innerHTML ="Last Updated: " + tank03time;
  //document.write(tank01);
  //var age = snapshot.child("age").val(); // null
  });
  //ref.once("value")
ref.on("value", function(snapshot3) {
  //var name = snapshot.child("tanks").val(); // {first:"Ada",last:"Lovelace"}
  //var firstName = snapshot.child("name/first").val(); // "Ada"
    var tank03val = snapshot3.child("tanks").child("tank03").child("temp").val(); // "Lovelace"
    var tank03time = snapshot3.child("tanks").child("tank03").child("timestamp").val();
  //  var tank01val = snapshot.child("tank01").val(); // "Lovelace"
    var tank03 = " " + tank03val;
    document.getElementById("tank03").innerHTML =tank03 + "°F";
    document.getElementById("tank03time").innerHTML ="Last Updated: " + tank03time;
  //document.write(tank01);
  //var age = snapshot.child("age").val(); // null
  });
//} else {
  //  document.getElementById("tank01").innerHTML = "Access Denied";
    //document.getElementById("tank02").innerHTML = "Access Denied";
//    document.getElementById("tank03").innerHTML = "Access Denied";
}
}
});

