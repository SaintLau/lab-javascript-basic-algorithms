// Iteration 1: Names and Input
let hacker1 = 'João';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Laura';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The diver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);

} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops

//3.1 

let newHacker1 = '';


for (let i = 0; i < hacker1.length; i++){
    newHacker1 += (hacker1[i].toUpperCase() + ' ');  
    
}
console.log(newHacker1);


//3.2
let revHacker2 = ''; 
for (let i =  hacker2.length -1; i >= 0;  i--){
    revHacker2 += (hacker2[i]);
} 
console.log(revHacker2);

//3.3

