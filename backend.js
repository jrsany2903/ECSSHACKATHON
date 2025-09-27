
function validatePassword(pword){
    Errors = []
    if (pword.includes("a")){
        Errors.push("Sorry the letter \"a\" is out of commision today.")
    }

    console.log(Errors)
    document.getElementById("pword_errors").textContent = Errors[0]
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