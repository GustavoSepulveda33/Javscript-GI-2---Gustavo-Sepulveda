

const monthName = [
    "placekeeper", 
    "January",
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December", 
]



function month() { 

    var input = prompt("You Right About Now:   ......................................................I could just throw out a real sneaky number. A number he will never suspect!.....but, do I wanna be known as the sneaky instructor? I'm not sure.............................The real question is: if he can really read my mind, does he know I LOVE christmas? To be safe, I shouldn't pick 12........... (ENTER YOUR NUMBER HERE)")
    
    
    let telekeneticPowers = Number.isInteger(parseInt(input)); 



    var interceptedThought = parseInt(input); 



    if (telekeneticPowers == true) {
        alert("At least you weren't tying to be slick and think of a word and not a number.") ; 

        var interceptedThought = parseInt(input); 

        // console.log("interceptedThought" + interceptedThought)

        if (interceptedThought == 12) {

            document.getElementById("answer").innerHTML = "Cmon man, everybody knows you love Christmas!  Easy guess, you could have tried harder but, whatever. Your answer is " + input + " - " + monthName[input] + "." ;
            console.log("C'mon man, everybody know you love Christmas at almost an unhealty level. Easy guess, you could have tried harder but whatever. Your answer is " + input + " - " + monthName[input] + "."); 

        } else {

            if (interceptedThought < 1 || interceptedThought > 12) {

                document.getElementById("answer").innerHTML = "Hey hey hey! No cheating! I said think of a number between 1 and 12. Try again from the top."
                console.log("Hey hey hey! No cheating! I said think of a number between 1 and 12. Try again from the top.");

            } else {

                document.getElementById("answer").innerHTML = "My powers have divined the answer to me. Your answer is " + input + " - " + monthName[input] + "." ;
                console.log("My powers have divined the answer to me. Your answer is " + input + " - " + monthName[input] + ".") ; 

            }


        }



    } else {
        alert("Are you trying to be a cheater? Don't you get I can read minds? Try again from the top, and this time, think of a number, not a word.");  
        console.log("Are you trying to be a cheater? Don't you get I can read minds? Try again from the top, and this time, think of a number, not a word."); 
    }












    // console.log("-------------------------------")
    // console.log(input); 
    // console.log(telekeneticPowers);
    // console.log(interceptedThought);
}