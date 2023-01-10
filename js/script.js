// Copyright (c) 2022 Andre Deveau All rights reserved
//
// Created by: Andre Deveau
// Created on: Jan 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-5/sw.js", {
    scope: "/ICS2O-Assignment-5/",
  })
}

function myButtonClicked() {
  const timesThroughLoop = parseInt(
    document.getElementById("times-loop").value
  )
  var counter = 0
  var piAnswer = 0

  while (counter < timesThroughLoop) {
    piAnswer = piAnswer + (4 / (1 + 2 * counter)) * (-1) ** counter
    counter++
  }

  document.getElementById("answer").innerHTML =
    "Pi to " + timesThroughLoop + " digits is " + piAnswer + "."
}