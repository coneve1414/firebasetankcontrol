function dynamicLabel(labelTankInfo) {

    // setting the dynamic label shortcut for the data available
    var tank01labelDyn = labelTankInfo.tank01.isDynamicLabel;
    var tank02labelDyn = labelTankInfo.tank02.isDynamicLabel;
    var tank03labelDyn = labelTankInfo.tank03.isDynamicLabel;
    var tank04labelDyn = labelTankInfo.tank04.isDynamicLabel;
    var tank05labelDyn = labelTankInfo.tank05.isDynamicLabel;
    var tank06labelDyn = labelTankInfo.tank06.isDynamicLabel;
    var tank07labelDyn = labelTankInfo.tank07.isDynamicLabel;
    var tank08labelDyn = labelTankInfo.tank08.isDynamicLabel;
    var tank09labelDyn = labelTankInfo.tank09.isDynamicLabel;
    var tank10labelDyn = labelTankInfo.tank10.isDynamicLabel;
    var tank11labelDyn = labelTankInfo.tank11.isDynamicLabel;
    var tank12labelDyn = labelTankInfo.tank12.isDynamicLabel;

    if (tank01labelDyn == false || tank01labelDyn == null) {
        labelTankInfo.tank01.label = "Tank 01";
    } else {}
    if (tank02labelDyn == false || tank02labelDyn == null) {
        labelTankInfo.tank02.label = "Tank 02";
    } else {}
    if (tank03labelDyn == false || tank03labelDyn == null) {
        labelTankInfo.tank03.label = "Tank 03";
    } else {}
    if (tank04labelDyn == false || tank04labelDyn == null) {
        labelTankInfo.tank04.label = "Tank 04";
    } else {}
    if (tank05labelDyn == false || tank05labelDyn == null) {
        labelTankInfo.tank05.label = "Tank 05";
    } else {}
    if (tank06labelDyn == false || tank06labelDyn == null) {
        labelTankInfo.tank06.label = "Tank 06";
    } else {}
    if (tank07labelDyn == false || tank07labelDyn == null) {
        labelTankInfo.tank07.label = "Tank 07";
    } else {}
    if (tank08labelDyn == false || tank08labelDyn == null) {
        labelTankInfo.tank08.label = "Tank 08";
    } else {}
    if (tank09labelDyn == false || tank09labelDyn == null) {
        labelTankInfo.tank09.label = "Tank 09";
    } else {}
    if (tank10labelDyn == false || tank10labelDyn == null) {
        labelTankInfo.tank10.label = "Tank 10";
    } else {}
    if (tank11labelDyn == false || tank11labelDyn == null) {
        labelTankInfo.tank11.label = "Tank 11";
    } else {}
    if (tank12labelDyn == false || tank12labelDyn == null) {
        labelTankInfo.tank12.label = "Tank 12";
    } else {}
    if (labelTankInfo.number > 12 && labelTankInfo.number <= 16) {
        if (labelTankInfo.number == 13 || labelTankInfo.number >13) {
            var tank13labelDyn = labelTankInfo.tank13.isDynamicLabel;
            if (tank13labelDyn == false || tank13labelDyn == null) {
                labelTankInfo.tank13.label = "Tank 12";
            } else {}
        } else {}
        if (labelTankInfo.number == 14 || labelTankInfo.number >14) {
            var tank14labelDyn = labelTankInfo.tank14.isDynamicLabel;
            if (tank14labelDyn == false || tank14labelDyn == null) {
                labelTankInfo.tank14.label = "Tank 14";
            } else {}
        } else {}
        if (labelTankInfo.number == 15 || labelTankInfo.number >15) {
            var tank15labelDyn = labelTankInfo.tank15.isDynamicLabel;
            if (tank15labelDyn == false || tank15labelDyn == null) {
                labelTankInfo.tank15.label = "Tank 15";
            } else {}
        } else {}
        if (labelTankInfo.number == 16 || labelTankInfo.number >16) {
            var tank16labelDyn = labelTankInfo.tank16.isDynamicLabel;
            if (tank16labelDyn == false || tank16labelDyn == null) {
                labelTankInfo.tank16.label = "Tank 16";
            } else {}
        } else {
            console.error("Math is wrong: dynamicLabel.js");
        }
    }

    // setting the dynamic label value shortcut for the data available
    var tank01label = labelTankInfo.tank01.label;
    var tank02label = labelTankInfo.tank02.label;
    var tank03label = labelTankInfo.tank03.label;
    var tank04label = labelTankInfo.tank04.label;
    var tank05label = labelTankInfo.tank05.label;
    var tank06label = labelTankInfo.tank06.label;
    var tank07label = labelTankInfo.tank07.label;
    var tank08label = labelTankInfo.tank08.label;
    var tank09label = labelTankInfo.tank09.label;
    var tank10label = labelTankInfo.tank10.label;
    var tank11label = labelTankInfo.tank11.label;
    var tank12label = labelTankInfo.tank12.label;

    document.getElementById("labelTank01").innerHTML =tank01label;
    document.getElementById("labelTank02").innerHTML =tank02label;
    document.getElementById("labelTank03").innerHTML =tank03label;
    document.getElementById("labelTank04").innerHTML =tank04label;
    document.getElementById("labelTank05").innerHTML =tank05label;
    document.getElementById("labelTank06").innerHTML =tank06label;
    document.getElementById("labelTank07").innerHTML =tank07label;
    document.getElementById("labelTank08").innerHTML =tank08label;
    document.getElementById("labelTank09").innerHTML =tank09label;
    document.getElementById("labelTank10").innerHTML =tank10label;
    document.getElementById("labelTank11").innerHTML =tank11label;
    document.getElementById("labelTank12").innerHTML =tank12label;
}