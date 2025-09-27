max = new Date("27/09/2025".split("/").reverse().join("-"))
min = new Date("01/01/1000".split("/").reverse().join("-"))

textselection = "abcdefghijklmnopqrstuvwxyz0123456789 "

counter = 0

let userThinksRedWins = false;

function validatePassword(pword){

    console.log(pword)
    const r = parseInt(pword.slice(1, 3), 16);
    const g = parseInt(pword.slice(3, 5), 16); 
    const b = parseInt(pword.slice(5, 7), 16); 
    Errors = []

    if (r > 200){
        Errors.push("Thats faar too much red.")
    }

    if (g > 200){
        Errors.push("Way too green.")
    }

    if (b > 200){
        Errors.push("I simply don't care for blue.")
    }

    if (r + g + b < 250){
        Errors.push("This colour is too dull.")

    }

    // if (pword.includes("a")){
    //     Errors.push("Sorry the letter \"a\" is out of commision today.")
    // }

    // if (pword.includes("k")){
    //     Errors.push("Sorry the letter \"k\" is out of commision today.")
    // }
    // if (pword.includes("e")){
    //     Errors.push("Sorry the letter \"e\" is out of commision today.")
    // }

    // if (pword.length < 9){
    //     Errors.push("Password is too short, please make it at least 9 characters.")
    // }
    // else if(pword.length < 12){
    //     Errors.push("Just a little longer please :).")

    // }else if(pword.length < 15){
    //     Errors.push("Almost there, just a little longer!")

    // }else if(pword.length < 17){
    //     Errors.push("You can do it! Just a liiiitle longer.")

    // }else if(pword.length > 20){
    //     Errors.push("Woaaah woaaah, way too long buddy.")

    //}
    
    

    console.log(Errors)
    const pe = document.getElementById("pword_errors")
    pe.textContent = ""
    for (let i =0; i < Errors.length; i++){
        pe.innerHTML += Errors[i] + "<br>"
        
    }
    return Errors.length < 1
}

function validateAddress(address){
    
}

function rbutton(){
    const ptag = document.getElementById("currentdob")
    const dobinput = document.getElementById("dob")
    ptag.textContent = "01/01/1000"
    dobinput.textContent = new Date("01/01/1000".split("/").reverse().join("-"))
    max = new Date("27/09/2025".split("/").reverse().join("-"))
    min = new Date("01/01/0001".split("/").reverse().join("-"))
    console.log("reset")
}

function hbutton(){
    const ptag = document.getElementById("currentdob")
    const dobinput = document.getElementById("dob")
    current = new Date(dobinput.textContent)
    saveinput = calcmiddledate(current, max)
    min = current
    ptag.textContent = getformatteddate(saveinput)
    dobinput.textContent = saveinput

}

function lbutton(){
    const ptag = document.getElementById("currentdob")
    const dobinput = document.getElementById("dob")
    current = new Date(dobinput.textContent)
    saveinput = calcmiddledate(current, min)
    max = current
    ptag.textContent = getformatteddate(saveinput)
    dobinput.textContent = saveinput
}

function calcmiddledate(d1, d2){
    md = new Date((d1.getTime() + d2.getTime() )/ 2)
    return md
}

function selectRandomLetter(){
    let num = Math.random()
    num = Math.round(num * 36)
    return "abcdefghijklmnopqrstuvwxyz0123456789 "[num]
}

function testshake() {
    const inbar = document.getElementById("address")
    document.getElementById("letterPicker").removeAttribute("hidden")
    document.getElementById("selectLetter_btn").removeAttribute("hidden")
    document.getElementById("undo_btn").removeAttribute("hidden")
    setInterval(changeLetter, 200)
    inbar.setAttribute("readonly", true)
    setTimeout(() => {
        inbar.removeAttribute("readonly")
    }, 1000)
    console.log(inbar.innerText)
    inbar.value = inbar.value.slice(0,-1)
    inbar.classList.toggle("shake-error")
    setTimeout(() => {
        inbar.classList.toggle("shake-error")
    }, 300); // Match duration in CSS
}

function changeLetter(){
    viewer =  document.getElementById("letterPicker")
    counter++
    viewer.value = textselection[counter % 37]
}

function pickletter(){
    document.getElementById("address").value += document.getElementById("letterPicker").value
}

function removeletter(){
    document.getElementById("address").value = document.getElementById("address").value.slice(0,-1)
}


function getformatteddate(d_object){
    return d_object.getDate() + "/" + md.getMonth() + "/" + md.getFullYear()
}


function Savetofile(forminfo){
    //connect to Wills python rest API
    

}


function SubmitButtonClick(){
    // Run whatever validation is needed beforehand

    // Open roulette Wheel modal
    document.getElementById("modal-roulette").style.display = "block"

    // Generate roulette wheel on canvas
    let angleOffset = 0;
    let velocity = Math.random() * 0.3 + 0.15; // Random initial velocity
    const friction = 0.99;

    const canvas = document.getElementById("roulette-canvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(500, 500);
    ctx.arc(500, 500, 500, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    function drawRouletteWheel() {
        const numSegments = 37;
        const angle = (2 * Math.PI) / numSegments;
        const numbers = [
            0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30,
            8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29,
            7, 28, 12, 35, 3, 26
        ];
        const numberDistance = 390; // Distance from center to place numbers

        for (let i = 0; i < numSegments; i++) {
            ctx.beginPath();
            ctx.moveTo(500, 500);
            ctx.arc(500, 500, 500, (i * angle) + angleOffset, ((i + 1) * angle) + angleOffset);
            ctx.fillStyle = i % 2 === 1 ? "red" : "black";
            if (numbers[i] === 0) ctx.fillStyle = "green";
            ctx.fill();
            ctx.stroke();
        }

        // Inner circle thing
        ctx.beginPath();
        ctx.moveTo(500, 500);
        ctx.arc(500, 500, 450, 0, 2 * Math.PI);
        ctx.fillStyle = "silver";
        ctx.fill();

        for (let i = 0; i < numSegments; i++) {
            ctx.beginPath();
            const numberPosX = Math.cos((i * angle + angle / 2) + angleOffset) * numberDistance;
            const numberPosY = Math.sin((i * angle + angle / 2) + angleOffset) * numberDistance;
            ctx.translate(500 + numberPosX, 500 + numberPosY);
            ctx.rotate(((i * angle + angle / 2 + Math.PI / 2) + angleOffset));
            ctx.fillStyle = "black";
            ctx.font = "bold 30px Arial";
            ctx.fillText(numbers[i], -ctx.measureText(numbers[i]).width / 2, 10);
            ctx.rotate(-((i * angle + angle / 2 + Math.PI / 2) + angleOffset));
            ctx.translate(-(500 + numberPosX), -(500 + numberPosY));
        }

        // Arrow
        ctx.beginPath();
        ctx.moveTo(910, 480);
        ctx.lineTo(950, 500);
        ctx.lineTo(910, 520);
        ctx.closePath();
        ctx.fillStyle = "gold";
        ctx.fill();
        ctx.stroke();

        // Update angleOffset and velocity
        angleOffset += velocity;
        velocity *= friction;
        if (velocity <= 0.001){
            velocity = 0;

            // Determine winning color
            const imageData = ctx.getImageData(955, 500, 1, 1);
            const [r, g, b, a] = imageData.data;

            console.log(`RGB: (${r}, ${g}, ${b})`);
            if (r === 255 && g === 0 && b === 0) {
                // Landed on red.

                if (userThinksRedWins) {
                    processSuccessfulSubmission();
                }

                if (!userThinksRedWins) {
                    processUnsuccessfulSubmission();
                }
            }
            else {
                // Landed on black or green.
                
                if (userThinksRedWins) {
                    processUnsuccessfulSubmission();
                }
                if (!userThinksRedWins) {
                    processSuccessfulSubmission();
                }
            }
        }
        else {
            requestAnimationFrame(drawRouletteWheel);
        }
    }

    document.getElementById("spin-button").onclick = function() {
        drawRouletteWheel();
        userThinksRedWins = document.getElementById("roulette-input").checked;
        console.log(userThinksRedWins);
        document.getElementById("roulette-input").disabled = true;
        document.getElementById("spin-button").disabled = true;
    }
}

function checkName() {
    const firstname = document.getElementById("firstname").value;
    const surname = document.getElementById("surname").value;
    const full = document.getElementById("full").value;
    const firsur = firstname + " " + surname;
    if (firsur != full) {
        document.getElementById("firstname").value = "NAMES DO NOT MATCH!";
        document.getElementById("surname").value = "DO YOU NOT KNOW YOR NAME!";
        document.getElementById("full").value = "I EXPECT BETTER FROM YOU!";
    }
}

function validateBeforeSubmit() {}
function processSuccessfulSubmission() {}
function processUnsuccessfulSubmission() {}