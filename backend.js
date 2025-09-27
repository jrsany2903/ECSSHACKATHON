
function validatePassword(pword){
    Errors = []
    if (pword.includes("a")){
        Errors.push("Sorry the letter \"a\" is out of commision today.")
    }

    console.log(Errors)
    return Errors
}

function selectRandomLetter(){
    let num = Math.random()
    num = Math.round(num * 26)
    return "abcdefghijklmnopqrstuvwxyz"[num]
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

        angleOffset += velocity;
        velocity *= friction;
        if (velocity <= 0.001){
            velocity = 0;

            result = numbers[numSegments - Math.round((numSegments * (angleOffset % (2 * Math.PI))) / (2 * Math.PI))];
            determineWin(result);
        }
        else {
            requestAnimationFrame(drawRouletteWheel);
        }
    }

    document.getElementById("spin-button").onclick = function() {
        drawRouletteWheel();
        document.getElementById("roulette-input").disabled = true;
        document.getElementById("spin-button").disabled = true;
    }
}

function determineWin(result){
    
}
