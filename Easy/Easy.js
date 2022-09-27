

const firstName = [
    "George", 
    "Saul",
    "Michael",  
]


const lastName = [ 
    "Washington",
    "Goodman",
    "Jordan", 
]

const age = [
    290,
    44,
    59,
]



function person(){

console.log("Hi, my name is " + firstName[1] + " " + lastName[1] + " and I'm " + age[1] + " years old."); 
document.getElementById("answer").innerHTML = "Hi, my name is " + firstName[1] + " " + lastName[1] + " and I'm " + age[1] + " years old." ; 
document.getElementById("img").style.display = "block" ; 

console.log("--------------------------"); 

console.log("firstName array: " + firstName);
console.log("--------------------------"); 

console.log("lastName array: " + lastName);
console.log("--------------------------"); 

console.log("age array: " + age);


}





