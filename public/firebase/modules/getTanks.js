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

;