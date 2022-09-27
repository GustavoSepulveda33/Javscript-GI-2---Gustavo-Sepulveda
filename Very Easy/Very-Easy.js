
// Logic roadmap: 
// 1) Start button activates min()
// 2) min():
//     i) Prompt asking whether it is a String or Number 
//     ii) If / Else with conditions for string, number or invalid entry 
//     iii) If they enter Sting --> prompt for first word. 
//         a) put first word through parseInt and into  filter() to make sure the entered value is indeed a word and not a number. Why? Because the prompt command turns any value entered into a string, so one could in theory enter "456" as their first word and the function would still run although it would return an incorrect answer.
//         b) if first word comes back as number, return all the line of code and stop it there; if first word returns NaN (and therefore a word) --> prompt asking for second word. 
//         c) plug second word into subFilter() to verify it is also a word. 
//         d) if second word comes back NaN, compare character lengths and return the min. 
//     iv) If they enter Number ---> prompt asking for first number. 
//         a) repeat filter process but activating the rest of the code only if filter() returns that the value is indeed numeric and not a string. 
//     v) If the value entered is not String or Number, return an error message. 





function min() {

// User input to declare if function should compare String character legnths or Numeric values. (argument type = argType)
    let argType = prompt("What are we comparing? Enter 'String' to compare character lenghts; 'Number' to compare numeric values.");




// First Condition if "String" is selected. 
if (argType == "String" || argType == "string") {

    let string1 = prompt("Enter your first word or phrase:"); 

// Number.isInteger() takes the value in the () and returns "true" if it is a number and "false" if it is NaN (i.e. a string)
// Although prompt turns everything into a string, parseInt will only convert into integers up until the first character thats not a number. So parseInt(123abc) = 123 and parseInt(gustavo) = NaN; 
    let category = parseInt(string1);
    let categoryFilter = Number.isInteger(category) ;


    
// categoryFilter returns "true" if the value entered is a number; returns "fasle" if a string. With this, if someone where to choose "string" as the category  and then enter a number instead of a word or phrase to compare, the prompt will not just convert the number value to a string and incorrectly complete the block of code. 
    filter(categoryFilter);



    // Definiton of filter() & subFilter()
    // subFilter() will only activate if the first word or number is validated as a correct argument for that category. 

    function filter() {
        if (categoryFilter == true) {

            document.getElementById("answer").innerHTML = "Value entered not valid. (Numeic value, not a string)";
            console.log("numeric/ not a string");
            return

        } else {
            // console.log("stringy");

            let string2 = prompt("Enter your second word or phrase:");


            let category1 = parseInt(string2);
            let categoryFilter1 = Number.isInteger(category1); 

            // var categoryFilterSTR2 = Number.isInteger(categorySTR2);


            subFilter(categoryFilter1);
                
                function subFilter() {
                    if (categoryFilter1 == true) {

                        document.getElementById("answer").innerHTML = "Value entered not valid. (Numeic value, not a string)";
                        console.log("numeric/ not a string");
                        return

                    } else {

                        let L1 = string1.length;
                        let L2 = string2.length;
                    
                                if (L1 > L2) {
                                    var difference = L1 - L2;

                                    document.getElementById("answer").innerHTML = "min = " + string2 + " (" + string2 + " is shorter than " + string1 + " by " + difference + " characters.)"
                                    console.log("min = " + string2 + " (" + string2 + " is shorter than " + string1 + " by " + difference + " characters.)");
                    
                                } else if (L2 > L1) {
                                    var difference = L2 - L1; 

                                    document.getElementById("answer").innerHTML = "min = " + string1 + " (" + string1 + " is shorter than " + string2 + " by " + difference + " characters.)"
                                    console.log("min = " + string1 + " (" + string1 + " is shorter than " + string2 + " by " + difference + " characters.)")
                    
                                } else {

                                    document.getElementById("answer").innerHTML = "Invalid Arguments. Try Again, from the top." ; 
                                    console.log("Invalid Arguments. Try Again, from the top.")
                                }

                    // }    else {
                    //     document.getElementById("answer").innerHTML = "Not a number. NaN";
                    //     console.log("what did you do?");
                    // }
                    }
                }
        }
    } 
} else if (argType == "Number" || argType == "number") {

    let num1 = parseInt(prompt("Enter your first number:"));

    let categoryFilter3 = Number.isInteger(num1); 

    filter(categoryFilter3);

    function filter() {
    if (categoryFilter3 == true) {

        let num2 = parseInt(prompt("Enter value for second number:"));

        let categoryFilter4 = Number.isInteger(num2); 

        // console.log(categoryFilter4);

        subFilter(categoryFilter4); 

        function subFilter() {

            if (categoryFilter4 == true) {
                if (num1 > num2) {
                    let difference = num1 - num2;
                    
                    document.getElementById("answer").innerHTML = "min = " + num2 + " (" + num2 + " is less than " + num1 + " by " + difference + ".)";
                    console.log("min = " + num2 + " (" + num2 + " is less than " + num1 + " by " + difference + ".)");
        
                    // return "min = " + num2 + " (" + num2 + " is shorter than " + num1 + " by " + difference + " characters.)"
                } else if (num2 > num1) {
                    let difference = num2 - num1; 
        
                    document.getElementById("answer").innerHTML = "min = " + num1 + " (" + num1 + " is less than " + num2 + " by " + difference + ".)";
                    console.log("min = " + num1 + " (" + num1 + " is less than " + num2 + " by " + difference + ".)");
        
                    // return "min = " + num1 + " (" + num1 + " is shorter than " + num2 + " by " + difference + " characters.)"
                } else {
                    console.log("Invalid Arguments. Try Again, from the top.");
                    // return "Invalid Arguments. Try Again, from the top."
                }
            } else {
                document.getElementById("answer").innerHTML = "Not a number. NaN"; 
                console.log("Stringy / NaN");
            }
        }
    } else {
        document.getElementById("answer").innerHTML = "Not a number. NaN";
        console.log("Stringy / NaN");
    }

    }

} else {
    document.getElementById("answer").innerHTML = "Invalid category selection. Try again.";
    console.log("Invalid category selection. Try again.");
}


} // END OF MIN() FUNCTION ****************************************













