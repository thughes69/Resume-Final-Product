// how to convert fullname.toUpperCase();
let fullName= "Theo Hughes"
let fullNameCaps = fullName.toUpperCase();
   console.log (fullName);

// Calls displayDescription() Function
displayDescription(fullNameCaps, "Software Jr Developer", "Self motivated individual that embrace the challenge to achieve goals");

// Function that accepts x3 arguments (Name, Career, Description), formats accordingly and prints them to the Console. 
function displayDescription(myName, myCareer, myDescription) {
    console.log("Name: " + myName);
    console.log("Career: " + myCareer);
    console.log("Description: " + myDescription + ".");
};

console.log("");
// My Interests:
console.log("My Interests: ");
// Calls displayInterests() Function
displayInterests("Fishing");
displayInterests("Tailgating Football Games");
displayInterests("Reading");

function displayInterests(myInterest) {
    console.log("*  " + myInterest); 
}

console.log("");
// previous jobs
console.log("My Previous Experiences: ");
// Calls the displayPosition() Function
// LM Berry Co
displayPosition("LM BERRY Co", " Sales Represenative", "Sold yellow pages advertising programs to small/ medium size businesses.");
// ATT
displayPosition("ATT", "Digital Sales Manager", "Managed over 200 account reps that sold digital advertising programs to businesses in 9 states.");
// Radco Residential (CBS 42)
displayPosition("CBS 42", "Account Executive", "Create and designed advertising programs for local businesses in Central Alabama");

// Function that accepts x3 arguments (Company Name, Job Title and Job Description), formats accordingly and prints them to the Console. 
function displayPosition(companyName, jobTitle, jobDescription) {
    console.log("*  " + companyName + ", " + jobTitle + " - " + jobDescription + ". ")
};
console.log("");
// My Skills:
console.log("My Skills: ");
// Calls dispaySkill() Function
displaySkill("Playing guitar", true); // 1) Should print - BAM: Playing Drums
displaySkill("HTML5", false); // 2) Should print - HTML5
displaySkill("CSS3", false); // 3) Should print - CSS3
displaySkill("Livestreaming", true); // 4) Should print - BAM: Bootstrap 4.0
displaySkill("JavaScript", true); // 5) Should print - BAM: JavaScript

// Function that accepts x2 arguments (Skill Name / Boolean Value), formats accordingly and prints them to the Console. 
function displaySkill(mySkill, bamBam) {
    if(bamBam == true) { // If (bamBam) true ...BAM: and 'mySkill'.
        console.log("*  BAM: " + mySkill);
    } else if(bamBam == false) {
        console.log("*  " + mySkill); // Else If (bamBam) false ...just 'mySkill'.
    };
};



