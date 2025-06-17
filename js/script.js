// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
"use strict";

function Guess() {
let age = parseInt(document.getElementById("age").value);
let day = document.getElementById("day").value;
let ans = "";

if (age <= 5 || age >= 95) {
    ans = "Entry is free";
} else if (age >= 12 && age <= 21) {
    ans = "You get a discount";
} else if (day === "Tuesday" || day === "Thursday") {
    ans = "You get a discount";
} else {
    ans = "Pay regular price";
}

document.getElementById("ans").innerHTML = ans;
}