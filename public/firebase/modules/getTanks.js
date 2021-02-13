var debugEnable = false;
var pageLocation = "/admin/dashboard.html"

//database references
var userRef = firebase.database().ref("user"); //Reference for the "/user" directory in the database
var baseRef = firebase.database().ref("/"); //Reference for the "/" directory in the database
var usersRef = firebase.database().ref("users"); //Reference for the "/users" directory in the database
var orgRef = firebase.database().ref("orgCodes"); //Reference for the "/orgCodes" directory in the database



function getTanksNew(orgid4) {
    var ref = firebase.database().ref(orgid4);
    ref.on("value", function(tankSnapshot) {
        var tank01=tankSnapshot.val();
        console.log(tank01);
    })
}

var error = {
    a1010: "Error: A1010"
}

var defaults = {
    tank01: {
        dht: null,
        min: 90,
        max: 150,
        dynamicLabel: false
    },
    tank02: {
        dht: null,
        min: 90,
        max: 150,
        dynamicLabel: false
    },
    tank03: {
        dht: null,
        min: 90,
        max: 150,
        dynamicLabel: false
    },
    tank04: {
        dht: null,
        min: 90,
        max: 150,
        dynamicLabel: false
    },
    tank05: {
        dht: null,
        min: 90,
        max: 150,
        dynamicLabel: false
    },
    tank06: {
        dht: null,
        min: 90,
        max: 150,
        dynamicLabel: false
    },
    tank07: {
        dht: null,
        min: 90,
        max: 150,
        dynamicLabel: false
    },
    tank08: {
        dht: null,
        min: 90,
        max: 150,
        dynamicLabel: false
    },
    tank09: {
        dht: null,
        min: 90,
        max: 150,
        dynamicLabel: false
    },
    tank10: {
        dht: null,
        min: 90,
        max: 150,
        dynamicLabel: false
    },
    tank11: {
        dht: null,
        min: 90,
        max: 150,
        dynamicLabel: false
    },
    tank12: {
        dht: null,
        min: 90,
        max: 150,
        dynamicLabel: false
    }
}


    function getTanks2(orgid5) {
        var ref = firebase.database().ref(orgid5);
        ref.on("value", function(snapshot) {
            var tankInfoFirebase = snapshot.child("tanks").val();
            var tankInfo = tankInfoFirebase;
            if (tankInfoFirebase.isDynamicColor == null) {
                tankInfo.isDynamicColor = false;
            }
            if (tankInfoFirebase.isCelsius == null) {
                tankInfo.isCelsius = false;
            } else {
                console.log("isCelsius: "+ tankInfo.isCelsius);
            }
            //console.log(tankInfo);
            if (tankInfo.isCelsius == true) {
                tankInfo.degreeType = "°C";
            } else {
                tankInfo.degreeType = "°F";
            }
            var tankDegree = tankInfo.degreeType;

            // in the event that the tank does not have a temperature, the error message will be displayed
          
            if (tankInfoFirebase.tank01.temp==null) {
                tankInfo.tank01.temp = error.a1010;
            } else {}
            if (tankInfoFirebase.tank02.temp==null) {
                tankInfo.tank02.temp = error.a1010;
            } else {}
            if (tankInfoFirebase.tank03.temp==null) {
                tankInfo.tank03.temp = error.a1010;
            } else {}
            if (tankInfoFirebase.tank04.temp==null) {
                tankInfo.tank04.temp = error.a1010;
            } else {}
            if (tankInfoFirebase.tank05.temp==null) {
                tankInfo.tank05.temp = error.a1010;
            } else {}
            if (tankInfoFirebase.tank06.temp==null) {
                tankInfo.tank06.temp = error.a1010;
            } else {}
            if (tankInfoFirebase.tank07.temp==null) {
                tankInfo.tank07.temp = error.a1010;
            } else {}
            if (tankInfoFirebase.tank08.temp==null) {
                tankInfo.tank08.temp = error.a1010;
            } else {}
            if (tankInfoFirebase.tank09.temp==null) {
                tankInfo.tank09.temp = error.a1010;
            } else {}
            if (tankInfoFirebase.tank10.temp==null) {
                tankInfo.tank10.temp = error.a1010;
            } else {}
            if (tankInfoFirebase.tank11.temp==null) {
                tankInfo.tank11.temp = error.a1010;
            } else {}
            if (tankInfoFirebase.tank12.temp==null) {
                tankInfo.tank12.temp = error.a1010;
            } else {}
          
            // setting the temp value shortcut for the type of the data available
            var tank01 = tankInfo.tank01.temp;
            var tank02 = tankInfo.tank02.temp;
            var tank03 = tankInfo.tank03.temp;
            var tank04 = tankInfo.tank04.temp;
            var tank05 = tankInfo.tank05.temp;
            var tank06 = tankInfo.tank06.temp;
            var tank07 = tankInfo.tank07.temp;
            var tank08 = tankInfo.tank08.temp;
            var tank09 = tankInfo.tank09.temp;
            var tank10 = tankInfo.tank10.temp;
            var tank11 = tankInfo.tank11.temp;
            var tank12 = tankInfo.tank12.temp;

            // setting the tank's temperature values
            document.getElementById("tank01").innerHTML =tank01 + tankDegree;
            document.getElementById("tank02").innerHTML =tank02 + tankDegree;
            document.getElementById("tank03").innerHTML =tank03 + tankDegree;
            document.getElementById("tank04").innerHTML =tank04 + tankDegree;
            document.getElementById("tank05").innerHTML =tank05 + tankDegree;
            document.getElementById("tank06").innerHTML =tank06 + tankDegree;
            document.getElementById("tank07").innerHTML =tank07 + tankDegree;
            document.getElementById("tank08").innerHTML =tank08 + tankDegree;
            document.getElementById("tank09").innerHTML =tank09 + tankDegree;
            document.getElementById("tank10").innerHTML =tank10 + tankDegree;
            document.getElementById("tank11").innerHTML =tank11 + tankDegree;
            document.getElementById("tank12").innerHTML =tank12 + tankDegree;

            

            dynamicLabel(tankInfo);


            console.log(tankInfo.isDynamicColor)
            if (tankInfo.isDynamicColor=="true") {
              dynamicColor();
            } else {
              console.log("isDynamicColor = false");
            }

  
        })
    }



function getTanksLegacy(orgid3) {
    var tankDHTEnable01 = null;
    var tankDHTEnable02 = null;
    var tankDHTEnable03 = null;
    var tankDHTEnable04 = null;
    var tankDHTEnable05 = null;
    var tankDHTEnable06 = null;
    var ref = firebase.database().ref(orgid3);

  var tank01H = " " + snapshot.child("tanks").child("tank01").child("humidity").val(); // Example: 120 and will be formatted to 120°
  if (tank01DHT=="true") {
    if (tankDHTEnable01!=1) {
      tankDHTEnable01=1;
      enableHumidity("01");
    }
    document.getElementById("tank01H").innerHTML =tank01H + "%";
  }


  var tank02H = " " + snapshot2.child("tanks").child("tank02").child("humidity").val(); // Example: 120 and will be formatted to 120°
  if (tank02DHT=="true" ) {
    if (tankDHTEnable02!=1) {
      tankDHTEnable02=1;
      enableHumidity("02");
    }
    document.getElementById("tank02H").innerHTML =tank02H + "%";
  }

  var tank03H = " " + snapshot3.child("tanks").child("tank03").child("humidity").val(); // Example: 120 and will be formatted to 120°
  if (tank03DHT=="true") {
    if (tankDHTEnable03!=1) {
      tankDHTEnable03=1;
      enableHumidity("03");
    }
    document.getElementById("tank03H").innerHTML =tank03H + "%";
  }

    var tank04H = " " + snapshot4.child("tanks").child("tank04").child("humidity").val(); // Example: 120 and will be formatted to 120°
    if (tank04DHT=="true") {
      if (tankDHTEnable04!=1) {
        tankDHTEnable04=1;
        enableHumidity("04");
      }
      document.getElementById("tank04H").innerHTML =tank04H + "%";
    }
  
    var tank05H = " " + snapshot5.child("tanks").child("tank05").child("humidity").val(); // Example: 120 and will be formatted to 120°
  if (tank05DHT=="true") {
    if (tankDHTEnable05!=1) {
      tankDHTEnable05=1;
      enableHumidity("05");
    }
    document.getElementById("tank05H").innerHTML =tank05H + "%";
  }

    var tank06H = " " + snapshot6.child("tanks").child("tank06").child("humidity").val(); // Example: 120 and will be formatted to 120°
  if (tank06DHT=="true") {
    if (tankDHTEnable06!=1) {
      tankDHTEnable06=1;
      enableHumidity("06");
    }
    document.getElementById("tank06H").innerHTML =tank06H + "%";
  }

};