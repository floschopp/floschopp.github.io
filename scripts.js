let globalSolution = 0;


//This JavaScript function always returns a random integer between min and max (both included):
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// set hrbeats
function setHrBeats(value) {
  document.getElementById("hrbeats").innerHTML = value;
}

// set hrseconds
function setHrSeconds(value) {
  document.getElementById("hrseconds").innerHTML = value;
}

// calculate hrseconds between 5 and 30
function calculateHrSeconds() {
    let value = getRndInteger(1, 5);
    switch(value) {
        case 1:
            return 5;
        case 2:
            return 10;
        case 3:
            return 15;
        case 4:
            return 20;
        case 5:
            return 30;
    }
}

// calculate hrbeats based on hrseconds to be >=30 and <=180
function calculateHrBeats(hrseconds) {
    switch(hrseconds) {
        case 5:
            return getRndInteger(3, 15);
        case 10:
            return getRndInteger(5, 30);
        case 15:
            return getRndInteger(8, 45);
        case 20:
            return getRndInteger(10, 60);
        case 30:
            return getRndInteger(15, 90);
    }
}

function updateHrChallenge() {
    let hrseconds = calculateHrSeconds();
    setHrSeconds(hrseconds);
    let hrbeats = calculateHrBeats(hrseconds);
    setHrBeats(hrbeats);
    let solution = (hrbeats * 60) / hrseconds;
    return solution;
}

function checkHrChallenge(userInput) {
    let correct = false;
    if (parseFloat(userInput) === parseFloat(globalSolution)) {
        document.getElementById("heartRateSolution").innerHTML = "Richtig!";
        correct = true;
        document.getElementById("flash").classList.add("green-flash");
    } else {
        document.getElementById("heartRateSolution").innerHTML = "Falsch! Die richtige Lösung ist " + globalSolution.toFixed(2);
        correct = false;
        document.getElementById("flash").classList.add("red-flash");
    }
    // Remove flash class after animation
    setTimeout(() => {
        document.getElementById("flash").classList.remove("green-flash", "red-flash");
    }, 500);
    // Change button to reload after submission
    document.getElementById("hrsubmit").innerHTML = "Neue Aufgabe";
    document.getElementById("hrsubmit").onclick = function() { location.reload(); };
    return correct;
}

// Initial call to set values on page load
globalSolution = updateHrChallenge();
