
function validatePassword(pword){
    Errors = []
    if (pword.includes("a")){
        Errors.push("Sorry the letter \"a\" is out of commision today.")
    }

    if (pword.includes("k")){
        Errors.push("Sorry the letter \"k\" is out of commision today.")
    }
    if (pword.includes("e")){
        Errors.push("Sorry the letter \"e\" is out of commision today.")
    }

    if (pword.length < 9){
        Errors.push("Password is too short, please make it at least 9 characters.")
    }
    else if(pword.length < 12){
        Errors.push("Just a little longer please :).")

    }else if(pword.length < 15){
        Errors.push("Almost there, just a little longer!")

    }else if(pword.length < 17){
        Errors.push("You can do it! Just a liiiitle longer.")

    }else if(pword.length > 20){
        Errors.push("Woaaah woaaah, way too long buddy.")

    }
    

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