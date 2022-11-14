// Challenge #1
// 1. Given an array of strings, return only the strings that 
// have exactly 3 characters.

var words = ["car", "bike", "bus", "Van", "scooter"];
for (var i = 0; i < words.length; i++) {
  if (words[i].length === 3) {
    console.log(words[i]);
  }
}

// Challenge #4 
// Start with an array of student names. Print a numbered list 
// of the student's names in alphabetical order. For example, 
// if you start with ["Hector", "Winston", "Finley"], 
// the final output should be 1. Finley 2. Hector 3. Winston.

var names = ["Hector", "Winston", "Finley"];
for (i = 0; i < names.length; i++) {
    var sorted = names.sort();
    console.log(`${i+1} ${sorted[i]}`);
}

// Challenge #3
//Start with an array of strings. Print all of 
// the words in the array, but change every t 
// to an uppercase T.

var animals = ["turtle", "tiger", "tomcat"];
for (i = 0; i < animals.length; i++) {
    console.log(animals[i].replaceAll("t", "T"));
}