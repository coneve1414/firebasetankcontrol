function dynamicColor(colorTankInfo) {

    // tank temperature value
    var tank01 = colorTankInfo.tank01.temp;
    var tank02 = colorTankInfo.tank02.temp;
    var tank03 = colorTankInfo.tank03.temp;
    var tank04 = colorTankInfo.tank04.temp;
    var tank05 = colorTankInfo.tank05.temp;
    var tank06 = colorTankInfo.tank06.temp;
    var tank07 = colorTankInfo.tank07.temp;
    var tank08 = colorTankInfo.tank08.temp;
    var tank09 = colorTankInfo.tank09.temp;
    var tank10 = colorTankInfo.tank10.temp;
    var tank11 = colorTankInfo.tank11.temp;
    var tank12 = colorTankInfo.tank12.temp;

    // dynamic tank color minimum values
    var tank01min = colorTankInfo.tank01.minTemp;
    var tank02min = colorTankInfo.tank02.minTemp;
    var tank03min = colorTankInfo.tank03.minTemp;
    var tank04min = colorTankInfo.tank04.minTemp;
    var tank05min = colorTankInfo.tank05.minTemp;
    var tank06min = colorTankInfo.tank06.minTemp;
    var tank07min = colorTankInfo.tank07.minTemp;
    var tank08min = colorTankInfo.tank08.minTemp;
    var tank09min = colorTankInfo.tank09.minTemp;
    var tank10min = colorTankInfo.tank10.minTemp;
    var tank11min = colorTankInfo.tank11.minTemp;
    var tank12min = colorTankInfo.tank12.minTemp;

    // dynamic tank color maximum values
    var tank01max = colorTankInfo.tank01.maxTemp;
    var tank02max = colorTankInfo.tank02.maxTemp;
    var tank03max = colorTankInfo.tank03.maxTemp;
    var tank04max = colorTankInfo.tank04.maxTemp;
    var tank05max = colorTankInfo.tank05.maxTemp;
    var tank06max = colorTankInfo.tank06.maxTemp;
    var tank07max = colorTankInfo.tank07.maxTemp;
    var tank08max = colorTankInfo.tank08.maxTemp;
    var tank09max = colorTankInfo.tank09.maxTemp;
    var tank10max = colorTankInfo.tank10.maxTemp;
    var tank11max = colorTankInfo.tank11.maxTemp;
    var tank12max = colorTankInfo.tank12.maxTemp;

    // dynamic color tank 01
    if (tank01 >=tank01max) {
    document.getElementById("tank01Color").className = "card text-white bg-danger";
    } else if (tank01<=tank01min) {
    document.getElementById("tank01Color").className = "card text-white bg-warning";
    } else if (tank01>=tank01min && tank01<=tank01max) {
    document.getElementById("tank01Color").className = "card text-white bg-success";
    } else {
    document.getElementById("tank01Color").className = "card text-white bg-primary";
    }

    // dynamic color tank02
    if (tank02 >=tank02max) {
    document.getElementById("tank02Color").className = "card text-white bg-danger";
    } else if (tank02<=tank02min) {
    document.getElementById("tank02Color").className = "card text-white bg-warning";
    } else if (tank02>=tank02min && tank02<=tank02max) {
    document.getElementById("tank02Color").className = "card text-white bg-success";
    } else {
    document.getElementById("tank02Color").className = "card text-white bg-primary";
    }
    
    // dynamic color tank 03
    if (tank03 >=tank03max) {
    document.getElementById("tank03Color").className = "card text-white bg-danger";
    } else if (tank03<=tank03min) {
    document.getElementById("tank03Color").className = "card text-white bg-warning";
    } else if (tank03>=tank03min && tank03val<=tank03max) {
    document.getElementById("tank03Color").className = "card text-white bg-success";
    } else {
    document.getElementById("tank03Color").className = "card text-white bg-primary";
    }

    // dynamic color tank 04
    if (tank04 >=tank04max) {
    document.getElementById("tank04Color").className = "card text-white bg-danger";
    } else if (tank04<=tank04min) {
    document.getElementById("tank04Color").className = "card text-white bg-warning";
    } else if (tank04>=tank04min && tank04<=tank04max) {
    document.getElementById("tank04Color").className = "card text-white bg-success";
    } else {
    document.getElementById("tank04Color").className = "card text-white bg-primary";
    }

    // dynamic color tank 05
    if (tank05 >=tank05max) {
    document.getElementById("tank05Color").className = "card text-white bg-danger";
    } else if (tank05<=tank05min) {
    document.getElementById("tank05Color").className = "card text-white bg-warning";
    } else if (tank05>tank05min && tank05<tank05max) {
    document.getElementById("tank05Color").className = "card text-white bg-success";
    } else {
    document.getElementById("tank05Color").className = "card text-white bg-primary";
    }

    // dynamic color tank 06
    if (tank06 >=tank06max) {
    document.getElementById("tank06Color").className = "card text-white bg-danger";
    } else if (tank06<=tank06min) {
    document.getElementById("tank06Color").className = "card text-white bg-warning";
    } else if (tank06>tank06min && tank06<tank06max) {
    document.getElementById("tank06Color").className = "card text-white bg-success";
    } else {
    document.getElementById("tank06Color").className = "card text-white bg-primary";
    }

    // dynamic color tank 07
    if (tank07 >=tank07max) {
    document.getElementById("tank07Color").className = "card text-white bg-danger";
    } else if (tank07<=tank07min) {
    document.getElementById("tank07Color").className = "card text-white bg-warning";
    } else if (tank07>tank07min && tank07<tank07max) {
    document.getElementById("tank07Color").className = "card text-white bg-success";
    } else {
    document.getElementById("tank07Color").className = "card text-white bg-primary";
    }

    // dynamic color tank 08
    if (tank08 >=tank08max) {
    document.getElementById("tank08Color").className = "card text-white bg-danger";
    } else if (tank08<=tank08min) {
    document.getElementById("tank08Color").className = "card text-white bg-warning";
    } else if (tank08>tank08min && tank08<tank08max) {
    document.getElementById("tank08Color").className = "card text-white bg-success";
    } else {
    document.getElementById("tank08Color").className = "card text-white bg-primary";
    }

    // dynamic color tank 09
    if (tank09 >=tank09max) {
    document.getElementById("tank09Color").className = "card text-white bg-danger";
    } else if (tank09<=tank09min) {
    document.getElementById("tank09Color").className = "card text-white bg-warning";
    } else if (tank09>tank09min && tank09<tank09max) {
    document.getElementById("tank09Color").className = "card text-white bg-success";
    } else {
    document.getElementById("tank09Color").className = "card text-white bg-primary";
    }

    // dynamic color tank 10
    if (tank10 >=tank10max) {
    document.getElementById("tank10Color").className = "card text-white bg-danger";
    } else if (tank10<=tank10min) {
    document.getElementById("tank10Color").className = "card text-white bg-warning";
    } else if (tank10>tank10min && tank10val<tank10max) {
    document.getElementById("tank10Color").className = "card text-white bg-success";
    } else {
    document.getElementById("tank10Color").className = "card text-white bg-primary";
    }

    // dynamic color tank 11
    if (tank11 >=tank11max) {
    document.getElementById("tank11Color").className = "card text-white bg-danger";
    } else if (tank11<=tank11min) {
    document.getElementById("tank11Color").className = "card text-white bg-warning";
    } else if (tank11>tank11min && tank11<tank11max) {
    document.getElementById("tank11Color").className = "card text-white bg-success";
    } else {
    document.getElementById("tank11Color").className = "card text-white bg-primary";
    }

    // dynamic color tank 12            
    if (tank12 >=tank12max) {
    document.getElementById("tank12Color").className = "card text-white bg-danger";
    } else if (tank12<=tank12min) {
    document.getElementById("tank12Color").className = "card text-white bg-warning";
    } else if (tank12>tank12min && tank12<tank12max) {
    document.getElementById("tank12Color").className = "card text-white bg-success";
    } else {
    document.getElementById("tank12Color").className = "card text-white bg-primary";
    }

}