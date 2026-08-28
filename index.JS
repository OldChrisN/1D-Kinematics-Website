const distance = document.getElementById("distance");
const speedog = document.getElementById("speedog");
const speed = document.getElementById("speed");
const acceleration = document.getElementById("acceleration");
const time = document.getElementById("time");
const submitting = document.getElementById("submitting");

const result = document.getElementById("result");
const result1 = document.getElementById("result1")


submitting.onclick = function(){
    result1.textContent = ""
    let ongoing = true;
    let safetyCounter = 0;

    while(ongoing && safetyCounter < 10){
        safetyCounter++;
        let progressMade = false;

        //Yeah I had to vibe code this segment cause I got lazy sorry
        // Moved inside the loop so missing states dynamically update as fields get filled
        //Yeah I had to vibe code this segment cause I got lazy sorry
        let isDistanceMissing = distance.value === "";
        let isSpeedMissing = speed.value === "";
        let isInitialSpeedMissing = speedog.value === "";
        let isAccelerationMissing = acceleration.value === "";
        let isTimeMissing = time.value === "";

        let x0 = 0;
        let x = Number(distance.value);
        let v0 = Number(speedog.value);
        let v = Number(speed.value);
        let a = Number(acceleration.value);
        let t = Number(time.value);

        const allInputs = document.querySelectorAll(".Kinematics-value");
        let filledCount = 0;
        allInputs.forEach(input =>{
            if(input.value !== ""){
                filledCount++;
            }
        });

        if(isNaN(x) || isNaN(v0) || isNaN(v) || isNaN(a) || isNaN(t)){
            console.log("Please enter valid numbers only!");
            result1.textContent = "Please enter a real number"
            return; 
        }

        if(filledCount >= 3){
            if(isDistanceMissing){
                if(speedog.value !== "" && time.value !== "" && acceleration.value !== ""){
                    let solvedX = x0 + (v0 * t) + (0.5 * a * (t ** 2));
                    distance.value = Math.ceil(solvedX);
                    progressMade = true;
                    result1.textContent += `x = ${Math.ceil(solvedX)}m `;
                    console.log(`x = ${solvedX}m`);
                } 
                else if(speedog.value !== "" && speed.value !== "" && time.value !== ""){
                    let solvedX = x0 + (0.5 * (v0 + v) * t);
                    distance.value = Math.ceil(solvedX);
                    progressMade = true;
                    result1.textContent += `x = ${Math.ceil(solvedX)}m `;
                    console.log(`x = ${solvedX}m`);
                }
                else if(speedog.value !== "" && speed.value !== "" && acceleration.value !== ""){
                    let solvedX = x0 + (((v ** 2) - (v0 ** 2)) / (2 * a));
                    distance.value = Math.ceil(solvedX);
                    progressMade = true;
                    result1.textContent += `x = ${Math.ceil(solvedX)}m `;
                    console.log(`x = ${solvedX}m`);
                }
                else{
                    console.log("Not enough info for distance");
                }
            }

            if(isSpeedMissing){
                if(speedog.value !== "" && acceleration.value !== "" && time.value !== ""){
                    let solvedV = v0 + (t * a);
                    speed.value = Math.ceil(solvedV);
                    progressMade = true;
                    result1.textContent += `v = ${Math.ceil(solvedV)}m/s `;
                    console.log(`v = ${solvedV}m/s`);
                } 
                else if(speedog.value !== "" && acceleration.value !== "" && distance.value !== ""){
                    let solvedV = Math.sqrt((v0 ** 2) + (2 * a * x));
                    speed.value = Math.ceil(solvedV);
                    progressMade = true;
                    result1.textContent += `v = ${Math.ceil(solvedV)}m/s `;
                    console.log(`v = ${solvedV}m/s`);
                } 
                else if(distance.value !== "" && speedog.value !== "" && time.value !== ""){
                    let solvedV = (2 * (x - x0) / t) - v0;
                    speed.value = Math.ceil(solvedV);
                    progressMade = true;
                    result1.textContent += `v = ${Math.ceil(solvedV)}m/s `;
                    console.log(`v = ${solvedV}m/s`);
                } 
                else{
                    console.log("Not enough info for speed");
                }
            }

            if(isInitialSpeedMissing) {
                if(speed.value !== "" && acceleration.value !== "" && time.value !== ""){
                    let solvedV0 = v - (a * t);
                    speedog.value = Math.ceil(solvedV0);
                    progressMade = true;
                    result1.textContent += `v0 = ${Math.ceil(solvedV0)}m/s `;
                    console.log(`v0 = ${solvedV0}m/s`);
                } 
                else if(speed.value !== "" && acceleration.value !== "" && distance.value !== ""){
                    let solvedV0 = Math.sqrt((v * v) - (2 * a * x));
                    speedog.value = Math.ceil(solvedV0);
                    progressMade = true;
                    result1.textContent += `v0 = ${Math.ceil(solvedV0)}m/s `;
                    console.log(`v0 = ${solvedV0}m/s`);
                } 
                else if(distance.value !== "" && speed.value !== "" && time.value !== ""){
                    let solvedV0 = (2 * (x - x0) / t) - v;
                    speedog.value = Math.ceil(solvedV0);
                    progressMade = true;
                    result1.textContent += `v0 = ${Math.ceil(solvedV0)}m/s `;
                    console.log(`v0 = ${solvedV0}m/s`);
                } 
                else if(distance.value !== "" && acceleration.value !== "" && time.value !== ""){
                    let solvedV0 = ((x - x0) - (0.5 * a * (t ** 2))) / t;
                    speedog.value = Math.ceil(solvedV0);
                    progressMade = true;
                    result1.textContent += `v0 = ${Math.ceil(solvedV0)}m/s `;
                    console.log(`v0 = ${solvedV0}m/s`);
                } 
                else{
                    console.log("Not enough info for initial speed");
                }
            }

            if(isAccelerationMissing){
                if(speed.value !== "" && speedog.value !== "" && time.value !== ""){
                    let solvedA = (v - v0) / t;
                    acceleration.value = Math.ceil(solvedA);
                    progressMade = true;
                    result1.textContent += `a = ${Math.ceil(solvedA)}m/s^2 `;
                    console.log(`a = ${solvedA}m/s^2`);
                } 
                else if (speedog.value !== "" && time.value !== "" && distance.value !== ""){
                    let solvedA = (2 * ((x - x0) - (v0 * t))) / (t ** 2);
                    acceleration.value = Math.ceil(solvedA);
                    progressMade = true;
                    result1.textContent += `a = ${Math.ceil(solvedA)}m/s^2 `;
                    console.log(`a = ${solvedA}m/s^2`);
                } 
                else if(distance.value !== "" && speed.value !== "" && speedog.value !== ""){
                    let solvedA = ((v ** 2) - (v0 ** 2)) / (2 * (x - x0));
                    acceleration.value = Math.ceil(solvedA);
                    progressMade = true;
                    result1.textContent += `a = ${Math.ceil(solvedA)}m/s^2 `;
                    console.log(`a = ${solvedA}m/s^2`);
                } 
                else if(distance.value !== "" && speed.value !== "" && time.value !== ""){
                    let solvedA = (2 * ((v * t) - (x - x0))) / (t ** 2);
                    acceleration.value = Math.ceil(solvedA);
                    progressMade = true;
                    result1.textContent += `a = ${Math.ceil(solvedA)}m/s^2 `;
                    console.log(`a = ${solvedA}m/s^2`);
                } 
                else{
                    console.log("Not enough info for acceleration");
                }
            }

            if(isTimeMissing){
                if(speed.value !== "" && speedog.value !== "" && acceleration.value !== ""){
                    let solvedT = (v - v0) / a;
                    time.value = Math.ceil(solvedT);
                    progressMade = true;
                    result1.textContent += `t = ${Math.ceil(solvedT)}s `;
                    console.log(`t = ${solvedT}s`);
                }
                else if (speed.value !== "" && speedog.value !== "" && distance.value !== ""){
                    let solvedT = (2 * x) / (v0 + v);
                    time.value = Math.ceil(solvedT);
                    progressMade = true;
                    result1.textContent += `t = ${Math.ceil(solvedT)}s `;
                    console.log(`t = ${solvedT}s`);
                } 
                else if (distance.value !== "" && speedog.value !== "" && acceleration.value !== ""){
                    let solvedT = (-v0 + Math.sqrt((v0 ** 2) + (2 * a * x))) / a;
                    time.value = Math.ceil(solvedT);
                    progressMade = true;
                    result1.textContent += `t = ${Math.ceil(solvedT)}s `;
                    console.log(`t = ${solvedT}s`);
                } 
                else{
                    console.log("Not enough info for time");
                }
            }

        } 
        else{
            console.log("No calculation");
            ongoing = false;
            return;
        }

        if(!progressMade) {
            ongoing = false;
        }
    }
    if(isDistanceMissing) { distance.value = ""; }
    if(isSpeedMissing) { speed.value = ""; }
    if(isInitialSpeedMissing) { speedog.value = ""; }
    if(isAccelerationMissing) { acceleration.value = ""; }
    if(isTimeMissing) { time.value = ""; }
};