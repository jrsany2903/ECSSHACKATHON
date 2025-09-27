
function validatePassword(pword){

    console.log(pword)
    const r = parseInt(pword.slice(1, 3), 16); // "3a"
    const g = parseInt(pword.slice(3, 5), 16); // "7b"
    const b = parseInt(pword.slice(5, 7), 16); // "d5"
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

function selectRandomLetter(){
    let num = Math.random()
    num = Math.round(num * 26)
    return "abcdefghijklmnopqrstuvwxyz"[num]
}


function Savetofile(forminfo){
    //connect to Wills python rest API
    

}

function checkName() {
    const firstname = document.getElementById("firstname").value
    const surname = document.getElementById("surname").value
    const full = document.getElementById("full").value
    const firsur = firstname + " " + surname
    if (firsur != full) {
        document.getElementById("firstname").value = "NAMES DO NOT MATCH!"
        document.getElementById("surname").value = "DO YOU NOT KNOW YOR NAME!"
        document.getElementById("full").value = "I EXPECT BETTER FROM YOU!"
    }
}
