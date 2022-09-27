
// I came back and re-did this javascript page after I finished the GI. By the time I got to the Hard challange, I learned some things that made me realize I could have steamlined this page a lot more, so I went ahead and did it. 
// I sill kept the original JS file in the folder. There are some section I re-used in this page that have comments explaining the logic behind them in the original JS file. 
// Figured you might want to see that. 




function min() {

    if (document.getElementById("radioString").checked == true) {
        console.log("Opction checked: String");

        var string1= prompt("Enter your first word or phrase."); 

        let category = parseInt(string1);
        let categoryFilter = Number.isInteger(category) ;


        if (categoryFilter == true) {

            document.getElementById("answer").innerHTML = "Value entered not valid. (Numeic value, not a string)";
            console.log("numeric/ not a string");
            return

        } else {

            var string2 = prompt("Enter your second word or phrase:");

        }

        let category1 = parseInt(string2);
        let categoryFilter1 = Number.isInteger(category1); 

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

        }


    } else if (document.getElementById("radioNumber").checked == true) {
        console.log("Option checked: Number"); 

        var num1 = parseInt(prompt("Enter your first number:"));
        let categoryFilter3 = Number.isInteger(num1); 


        if (categoryFilter3 == false) {

            document.getElementById("answer").innerHTML = "Invalid input. Input will only compare numbers."; 
            console.log("Invalid input. Input will only compare numbers.");
            return

        }

        

        if (categoryFilter3 == true) {

            var num2 = parseInt(prompt("Enter your second number:"));
            let categoryFilter4 = Number.isInteger(num2); 


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

            document.getElementById("answer").innerHTML = "Invalid input. Input will only compare numbers."; 
            console.log("Invalid input. Input will only compare numbers.");
            return

            }


            }

    } else {

        document.getElementById("answer").innerHTML = "Choose a category to begin."; 
        console.log("Choose a category to begin."); 
    }


}