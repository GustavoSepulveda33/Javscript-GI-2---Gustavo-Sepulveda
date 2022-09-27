


// Variables: 

const Mass = [
    8, //Tom
    45, //Jerry
] ; 

const Height = [
    9, //Tom
    10, //Jerry
]; 


// BMI = mass / height ^2 = mass / (height * height)

// var radioChoice; 
function selectedInput(mass, height) {

    // console.log((mass / (height * height))); 
    return((mass / (height * height)));
}


function bmiChoice() {

    if (document.getElementById("radioTom").checked == true) {
        
        console.log("Checked option: Tom"); 
        console.log("Tom's BMI is: " + selectedInput(Mass[0], Height[0]));

        console.log("Is Tom's BMI higher than Jerry's?     " + Boolean(selectedInput(Mass[0], Height[0]) > selectedInput(Mass[1], Height[1])));
        document.getElementById("sub-answer1").innerHTML = "Is Tom's BMI higher than Jerry's?     " + Boolean(selectedInput(Mass[0], Height[0]) > selectedInput(Mass[1], Height[1])); 
        document.getElementById("answer").innerHTML = "Tom's BMI is: " + selectedInput(Mass[0], Height[0]);

        // selectedInput(Mass[0], Height[0]); 
        
    } else if ( document.getElementById("radioJerry").checked == true) {

        console.log("Checked option: Jerry");
        console.log("Jerry's BMI is: " + selectedInput(Mass[1], Height[1]));

        document.getElementById("sub-answer1").innerHTML = "Is Jerry's BMI higher than Tom's?     " + Boolean(selectedInput(Mass[1], Height[1]) > selectedInput(Mass[0], Height[0])); 
        console.log("Is Jerry's BMI higher than Tom's?     " + Boolean(selectedInput(Mass[1], Height[1]) > selectedInput(Mass[0], Height[0])));
        document.getElementById("answer").innerHTML = "Jerry's BMI is: " + selectedInput(Mass[1], Height[1]) ; 

        // selectedInput(Mass[1], Height[1]); 

    } else {

        document.getElementById("answer").innerHTML = "Choose what to calculate." ; 
        console.log("Choose what to calculate"); 
    }


}


// function bmiComp() {

//     if (document.getElementById("sndQTom").checked == true) {
//         console.log("You think Tom is higher");
//     } else if (document.getElementById("sndQJerry").checked == true) {
//         console.log("You think Jerry is higher"); 
//     } else {
//         console.log("C'mon you gotta have a hunch! Who do you think higher?");
//     }

// }


