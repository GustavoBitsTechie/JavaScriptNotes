//console.log("Hello World!");
//console.log("This is a test website.");

//window.alert("Welcome to my website!");
//window.confirm("Do you like this website?");

//This is just a test website to practice HTML, CSS, and JavaScript.//


//document.getElementById("myH1").textContent = "Welcome!";

//document.getElementById("myP").textContent = "This is a test website to practice HTML, CSS, and JavaScript.";

/* let x = 5;
let y = 10;
let z = x + y;
console.log(z);*/

/*let age = 25;
let price = 10.99;
let gpa = 2.1;
console.log(price);
console.log(age);
console.log(gpa);
console.log(`You are ${age} years old.`);
console.log(`The price is $${price}.`);
console.log(`Your gpa is ${gpa}.`);*/

/*let firstName = "Gustavo";
let lastName = "Cordova";
let fullName = firstName + " " + lastName;
let favoriteFood = "Pizza";
let email = "WhatTheBalloon@gmail.com";

console.log(firstName);
console.log(lastName);
console.log(favoriteFood);
console.log(email);
console.log(fullName);

console.log (`My name is ${fullName} and I like ${favoriteFood}. You can contact me at ${email}.`);*/


/*let online = true;
let offline = false;
let forSale = true;
let isStudent = true;

console.log(`Bro is online: ${online}   Bro is offline: ${offline}`);
console.log(`This item is for sale: ${forSale}`);
console.log(`Bro is a student: ${isStudent}`);*/

/*let fullName = ("Gustavo Cordova");
let age = 25;
let isStudent = true;

document.getElementById("p1").textContent = `Your name is ${fullName}.`;
document.getElementById("p2").textContent = `You are ${age} years old.`;
document.getElementById("p3").textContent = `It is ${isStudent} that you are a student.`;
*/

// arithmetic operators//

//let students = 31;

//students = students + 1;
//students = students -1;
//students = students * 2;
//students = students / 2;
//students = students **2;
//students = students % 2;
//let extraStudents = students % 3;

//students += 1;
//students -= 1; //students = students - 1;
//students *= 2; //students = students * 2;
//students /= 2; //students = students / 2;
//students **= 2;
//students %= 2;
//students++;
//students--;



//console.log(students);

//let result = 1 + 2 *3 + 4 ** 2;
//console.log(result);

/*let username;
    
username = window.prompt("What is your name?");

console.log(`Hello, ${username}! Welcome to my website!`);
*/
/*let username;
document.getElementById("submitBtn").onclick = function() {
    username = document.getElementById("myText").value;
    console.log(`Hello, ${username}! Welcome to my website!`);}*/
                 //Type conversion
    /* let age = window.prompt("How old are you?");
    age = Number(age);
    age += 1;

    console.log(age);*/

    /*let x = "0";
    let y = "0";
    let z = "0";

    x = Number(x);
    y = String(y);
    z = Boolean(z);

    console.log(x, typeof x);
    console.log(y, typeof y);
    console.log(z, typeof z);   */

                //const is a variable that cannot be changed

    /*const pi = 3.14;
    let radius;
    let circumference;

    //radius = window.prompt("Enter the radius of the circle:");
    radius = Number(radius);

    circumference = 2 * pi * radius;

   document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("radius").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    console.log(`The circumference of the circle is ${circumference}cm.`);
   }*/

         //math object = built-in object that provides collection of properties and methods.

        /* Math.PI;
         console.log(Math.PI);
         console.log(Math.E);*/

         /*let x = 3.21;
         let y = 2;
         let z;

         z = Math.round(x); // rounds to the nearest integer
         console.log(z);

         z = Math.floor(x); //rounds down
         console.log(z);

         z = Math.ceil(x); //rounds up
         console.log(z);

         z = Math.trunc(x); //removes the decimal part and returns the integer part
         console.log(z);

         z = Math.pow(x, y); //z = x ** y;
         console.log(z);

         z = Math.sqrt(x); // give you the square root of x
         console.log(z);

         z = Math.abs(y); // returns the absolute value of y negative to positive or positive to negative.
         console.log(z);

         z = Math.min(x, y); // returns the smallest value
         console.log(z);

         z = Math.max(x, y); // returns the largest value
         console.log(z);

         z = Math.random();  // returns a random number between 0 (inclusive) and 1 (exclusive)
         console.log(z);

         z = Math.sin(x); // returns the sine of x (x is in radians)
         console.log(z);

         z = Math.cos(x); // returns the cosine of x (x is in radians)
         console.log(z);    

         z = Math.tan(x); // returns the tangent of x (x is in radians)
         console.log(z);

         z = Math.log(x); // returns the natural logarithm of x
         console.log(z);    

         z = Math.exp(x); // returns e raised to the power of x
         console.log(z);*/ 

                 // Random Number Generator

        /*const min = 50;
        const max = 100;

         let randomNum = Math.floor(Math.random() * (max - min) + min);// returns a random number between 50 (inclusive) and 100 (inclusive)
         

         console.log(randomNum);*/

         // If statements
         
        /* let age = 13;

         if(age >= 18) {
            console.log("You are an adult.");
         }
         else  {
            console.log("You must be at least 18 years old to access this website.");
            };*/

         /*let time = 19;

         if (time < 12) {
            console.log("Good morning!");
            
         }
         else if (time < 18) {
            console.log("Good afternoon!");
         }
         else {
            console.log("Good evening!");
         }*/

           /* let students = true;

            if(students) {
                console.log("Welcome, students!");
            }
            else {
                console.log("Sorry, this website is only for students.");
            }*/
            
            /*let username = "Gustavo";

            if (username === "Gustavo") {
                console.log("Welcome, Gustavo!");
            }
            else {
                console.log("Sorry, you are not Gustavo.");
            }*/

            /*let age = 18;
            let hasLicense = false;

            if (age >= 16 && age < 18) {
                console.log("You are old enough to drive with a learner's permit.");
            }
            else if (age >= 18) {
                console.log("You are old enough to drive by yourself. Woohoo! Congrats!");
            }
            else {
                console.log("You are not old enough to drive.");
            }
            if (hasLicense) {
                console.log("You have a driver's license. Woohoo!");
            }
            else {
                console.log("You do not have a driver's license.");
            }*/

               /* let age = 18;

                if (age >= 18) {
                    console.log("You are old enough to enter this website.");

                }
                else {
                    console.log("Sorry, you are not old enough to enter this website.");
                }*/