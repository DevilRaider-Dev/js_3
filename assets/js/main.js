/* function greeting(greetingTime) {
    if (greetingTime < 11 && greetingTime > 5) {
        document.write("Good Morning!");
    } else if (greetingTime < 18 && greetingTime > 9) {
        document.write("Hallo!");
    } else if (greetingTime < 21 && greetingTime > 16) {
        document.write("Good Evening!");
    } else {
        document.write("Good Night!");
    }
}

greeting(12); */

function checkInput() {
    let input = document.getElementById("input").value;
    let output;
    if (input % 3 == 0 && input % 5 == 0) {
        output = "fizzbuzz";
    } else if (input % 5 == 0) {
        output = "buzz";
    } else if (input % 3 == 0) {
        output = "fizz";
    } else {
        output = input;
    }
    document.getElementById("output").innerHTML = output;
}

function calcPoints() {
    let playerA = Number(document.getElementById("playerA_age").value) * 5 + Number(document.getElementById("playerA_size").value);
    let playerB = Number(document.getElementById("playerB_age").value) * 5 + Number(document.getElementById("playerB_size").value);
    console.log("Test: " + playerA + " | " + playerB)
    if (playerA > playerB) {
        document.getElementById("result").innerHTML = "Player A wins with a lead of " + playerA + " points."
    } else if (playerA < playerB) {
        document.getElementById("result").innerHTML = "Player B wins with a lead of " + playerB + " points."
    } else {
        document.getElementById("result").innerHTML = "Draw"
    }
}

function checkAirQuality() {
    let aqi = document.getElementById("aqiSlider").value
    document.getElementById("aqi").innerHTML = "AQI: " + aqi;
    if (aqi < 51) {
        document.getElementById("levelConcern").innerHTML = "Level of health concern: Good"
        document.getElementById("levelEffect").innerHTML = "Level of health effect: Little or no risk"
        document.body.style.background = "green";
    } else if (aqi > 50 && aqi < 101) {
        document.getElementById("levelConcern").innerHTML = "Level of health concern: Moderate"
        document.getElementById("levelEffect").innerHTML = "Level of health effect: Acceptable quality"
        document.body.style.background = "yellow";
    } else {
        document.getElementById("levelConcern").innerHTML = "Level of health concern: Unhealthy for sensitive groups"
        document.getElementById("levelEffect").innerHTML = "Level of health effect: Generable publics not likely affected"
        document.body.style.background = "red";
    }
}