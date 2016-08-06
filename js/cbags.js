/**
 * Created by mark on 1/16/16.
 */

function lengthFromDiameter() {
    "use strict";
    var getText = document.getElementById("circleWidth");
    var disp = document.getElementById("dispArea");
    disp.innerHTML = "Crochet for " + (getText.value * 3.14).toPrecision(3) + " inches.";
    getText.value = "";
}

function diameterFromLength() {
    "use strict";
    var getText = document.getElementById("bodyLength");
    var disp = document.getElementById("dispArea");
    disp.innerHTML = "Crochet circle for " + (getText.value / 3.14).toPrecision(3) + " inches.";
    getText.value = "";
}

