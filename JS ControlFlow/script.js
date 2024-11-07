//JS Loops and Iteration
function blue() {
    for (let i = 0; i < 6; i++) {
      console.log("da ba dee da ba daa");
    }
  }
  
function numbers() {
    for (let i = 25; i >= 0; i -= 5) {
      console.log(i);
    }
  }
  
function names() {
    const people =["scooby","velma","daphne","shaggy","fred"];
    for (let i = 0; i < people.length; i++) {
      console.log(people[i].toUpperCase());
    }
  }
  
  blue(); 
  numbers(); 
  names(); 

//bisa di run dengan mengetik node script.js di terminal