const distance = document.getElementById("distance");
const speedog = document.getElementById("speedog");
const speed = document.getElementById("speed");
const acceleration = document.getElementById("acceleration");
const time = document.getElementById("time");
const submitting = document.getElementById("submitting");

const result1 = document.getElementById("result1");


submitting.onclick = function(){
    result1.textContent = "";
    let ongoing = true;

    let isDistanceMissing = distance.value === "";
    let isSpeedMissing = speed.value === "";
    let isInitialSpeedMissing = speedog.value === "";
    let isAccelerationMissing = acceleration.value === "";
    let isTimeMissing = time.value === "";

    let isDistanceSolved = true;
    let isSpeedSolved = true;
    let isInitialSpeedSolved = true;
    let isAccelerationSolved = true;
    let isTimeSolved = true;


    if(isDistanceMissing){
        isDistanceSolved = false;
        console.log(isDistanceSolved);
    }

    if(isSpeedMissing){
        isSpeedSolved = false;
        console.log(isSpeedSolved);
    }

    if(isInitialSpeedMissing){
        isInitialSpeedSolved = false;
        console.log(isInitialSpeedSolved);
    }
    
    if(isAccelerationMissing){
        isAccelerationSolved = false;
        console.log(isAccelerationSolved);
    }
    
    if(isTimeMissing){
        isTimeSolved = false;
        console.log(isTimeSolved);
    }

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

    while(ongoing){

        if(isNaN(x) || isNaN(v0) || isNaN(v) || isNaN(a) || isNaN(t)){
            console.log("Please enter valid numbers only!");
            result1.textContent = "Please enter a real number";
            return; 
        }

        if(filledCount >= 3){
            if(!isDistanceSolved){
                if(isInitialSpeedSolved == true && isTimeSolved == true && isAccelerationSolved == true){
                    let solvedX = x0 + (v0 * t) + (0.5 * a * (t ** 2));
                    isDistanceSolved = true;
                    x = (solvedX);
                    result1.textContent += `x = ${(solvedX.toFixed(2))}m `;
                    console.log(`x = ${solvedX}m`);
                } 

                else if(isInitialSpeedSolved == true && isSpeedSolved == true && isTimeSolved == true){
                    let solvedX = x0 + (0.5 * (v0 + v) * t);
                    isDistanceSolved = true;
                    x = (solvedX);
                    result1.textContent += `x = ${(solvedX.toFixed(2))}m `;
                    console.log(`x = ${solvedX}m`);
                }

                else if(isInitialSpeedSolved == true && isSpeedSolved == true && isAccelerationSolved == true){
                    let solvedX = x0 + (((v ** 2) - (v0 ** 2)) / (2 * a));
                    isDistanceSolved = true;
                    x = (solvedX);
                    result1.textContent += `x = ${(solvedX.toFixed(2))}m `;
                    console.log(`x = ${solvedX}m`);
                }

                else{
                    console.log("Not enough info for distance");
                }
            }

            if(!isSpeedSolved){
                if(isInitialSpeedSolved == true && isAccelerationSolved == true && isTimeSolved == true){
                    let solvedV = v0 + (t * a);
                    isSpeedSolved = true;
                    v = (solvedV);
                    result1.textContent += `v = ${(solvedV.toFixed(2))}m/s `;
                    console.log(`v = ${solvedV}m/s`);
                } 

                else if(isInitialSpeedSolved == true && isAccelerationSolved == true && isDistanceSolved == true){
                    let solvedV = Math.sqrt((v0 ** 2) + (2 * a * x));
                    isSpeedSolved = true;
                    v = (solvedV);
                    result1.textContent += `v = ${(solvedV.toFixed(2))}m/s `;
                    console.log(`v = ${solvedV}m/s`);
                } 

                else if(isDistanceSolved == true && isInitialSpeedSolved == true && isTimeSolved == true){
                    let solvedV = (2 * (x - x0) / t) - v0;
                    isSpeedSolved = true;
                    v = (solvedV);
                    result1.textContent += `v = ${(solvedV.toFixed(2))}m/s `;
                    console.log(`v = ${solvedV}m/s`);
                } 

                else{
                    console.log("Not enough info for speed");
                }
            }

            if(!isInitialSpeedSolved){
                if(isSpeedSolved == true && isAccelerationSolved == true && isTimeSolved == true){
                    let solvedV0 = v - (a * t);
                    isInitialSpeedSolved = true;
                    v0 = (solvedV0);
                    result1.textContent += `v0 = ${(solvedV0.toFixed(2))}m/s `;
                    console.log(`v0 = ${solvedV0}m/s`);
                } 

                else if(isSpeedSolved == true && isAccelerationSolved == true && isDistanceSolved == true){
                    let solvedV0 = Math.sqrt((v * v) - (2 * a * x));
                    isInitialSpeedSolved = true;
                    v0 = (solvedV0);
                    result1.textContent += `v0 = ${(solvedV0.toFixed(2))}m/s `;
                    console.log(`v0 = ${solvedV0}m/s`);
                } 

                else if(isDistanceSolved == true && isSpeedSolved == true && isTimeSolved == true){
                    let solvedV0 = (2 * (x - x0) / t) - v;
                    isInitialSpeedSolved = true;
                    v0 = (solvedV0);
                    result1.textContent += `v0 = ${(solvedV0.toFixed(2))}m/s `;
                    console.log(`v0 = ${solvedV0}m/s`);
                } 

                else if(isDistanceSolved == true && isAccelerationSolved == true && isTimeSolved == true){
                    let solvedV0 = ((x - x0) - (0.5 * a * (t ** 2))) / t;
                    isInitialSpeedSolved = true;
                    v0 = (solvedV0);
                    result1.textContent += `v0 = ${(solvedV0.toFixed(2))}m/s `;
                    console.log(`v0 = ${solvedV0}m/s`);
                } 

                else{
                    console.log("Not enough info for initial speed");
                }
            }

            if(!isAccelerationSolved){
                if(isSpeedSolved == true && isInitialSpeedSolved == true && isTimeSolved == true){
                    let solvedA = (v - v0) / t;
                    isAccelerationSolved = true;
                    a = (solvedA);
                    result1.textContent += `a = ${(solvedA.toFixed(2))}m/s^2 `;
                    console.log(`a = ${solvedA}m/s^2`);
                } 

                else if (isInitialSpeedSolved == true && isTimeSolved == true && isDistanceSolved == true){
                    let solvedA = (2 * ((x - x0) - (v0 * t))) / (t ** 2);
                    isAccelerationSolved = true;
                    a = (solvedA);
                    result1.textContent += `a = ${(solvedA.toFixed(2))}m/s^2 `;
                    console.log(`a = ${solvedA}m/s^2`);
                } 

                else if(isDistanceSolved == true && isSpeedSolved == true && isInitialSpeedSolved == true){
                    let solvedA = ((v ** 2) - (v0 ** 2)) / (2 * (x - x0));
                    isAccelerationSolved = true;
                    a = (solvedA);
                    result1.textContent += `a = ${(solvedA.toFixed(2))}m/s^2 `;
                    console.log(`a = ${solvedA}m/s^2`);
                } 

                else if(isDistanceSolved == true && isSpeedSolved == true && isTimeSolved == true){
                    let solvedA = (2 * ((v * t) - (x - x0))) / (t ** 2);
                    isAccelerationSolved = true;
                    a = (solvedA);
                    result1.textContent += `a = ${(solvedA.toFixed(2))}m/s^2 `;
                    console.log(`a = ${solvedA}m/s^2`);
                } 

                else{
                    console.log("Not enough info for acceleration");
                }
            }

            if(!isTimeSolved){
                if(isSpeedSolved == true && isInitialSpeedSolved == true && isAccelerationSolved == true){
                    let solvedT = (v - v0) / a;
                    isTimeSolved = true;
                    t = (solvedT);
                    result1.textContent += `t = ${(solvedT.toFixed(2))}s `;
                    console.log(`t = ${solvedT}s`);
                }

                else if (isSpeedSolved == true && isInitialSpeedSolved == true && isDistanceSolved == true){
                    let solvedT = (2 * x) / (v0 + v);
                    isTimeSolved = true;
                    t = (solvedT);
                    result1.textContent += `t = ${(solvedT.toFixed(2))}s `;
                    console.log(`t = ${solvedT}s`);
                } 

                else if (isDistanceSolved == true && isInitialSpeedSolved == true && isAccelerationSolved == true){
                    let solvedT = (-v0 + Math.sqrt((v0 ** 2) + (2 * a * x))) / a;
                    isTimeSolved = true;
                    t = (solvedT);
                    result1.textContent += `t = ${(solvedT.toFixed(2))}s `;
                    console.log(`t = ${solvedT}s`);
                } 

                else{
                    console.log("Not enough info for time");
                }
            }

            if(isDistanceSolved == true && isSpeedSolved == true && isInitialSpeedSolved == true && isAccelerationSolved == true && isTimeSolved == true){
                console.log("The loop is broken");
                ongoing = false;
                break;
            }  
        } 
        
        else{
            console.log("No calculation");
            ongoing = false;
            return;
        }
  
    }
};
