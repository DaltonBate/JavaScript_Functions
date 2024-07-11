console.log("EXERCISE 1:\n==========\n");

// Exercise 1 Section

function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printOdds(10); // 1, 3, 5, 7, 9
printOdds(100); // 1, 3, 5-99

console.log("EXERCISE 2:\n==========\n");

// Exercise 2 Section

function checkAge(name, age) {
    let oldEnoughMsg = `Congrats ${name}! you can drive!`;
    let tooYoungMsg = `Sorry ${name}, you need to wait ${16 - age} year(s) until you can drive.`;

    if (age < 16) {
        console.log(tooYoungMsg);
    }else{
        console.log(oldEnoughMsg)
    }
}

checkAge("Ben", 12);
checkAge("Frank", 18);
checkAge("Logan", 32);

console.log("EXERCISE 3:\n==========\n");

// Excercise 3 Section

function checkQuadrant(x, y) {
    if (x > 0 && y > 0) {
        return 1;
    }else if (x < 0 && y > 0) {
        return 2;
    }else if (x < 0 && y < 0) {
        return 3;
    }else if (x > 0 && y < 0) {
        return 4; 
    }else if (x == 0 && y != 0) {
        return "X Axis";
    }else if (x != 0 && y == 0) {
        return "Y Axis";
    }else {
        return "Origin";
    }

    
}

checkQuadrant(1, 1);
checkQuadrant(-1, 1);
checkQuadrant(-1, -1);
checkQuadrant(1, -1);
checkQuadrant(0, -1);
checkQuadrant(1, 0);
checkQuadrant(0, 0);

console.log(`Quadrant value is ${checkQuadrant}.`)
 

console.log("EXERCISE 4:\n==========\n");

// Excercise 4 Section

function isValidTriangle(a, b, c) {
   return a + b > c || a + c > b || b + c > a
}

function checkTriangle(a, b, c) {
  let isValid = isValidTriangle(a, b, c);
  if (isValid) {
    //what type of triangle
    if (a == b && b == c) {
      return `Equilateral`;
    }else if (a == b || b == c || a == c) {
      return `Isosceles`;
    }else {
      return `Scalene`
    }
  } else {
    return `Not a valid triangle.`;
  }
}

console.log(`${isValidTriangle}`)

console.log("EXERCISE 5:\n==========\n");

// Excercise 5 Section

// 15 days used, 15 days remaining
// Average daily use: 3.333 GB/day
// You are EXCEEDING your average daily use (3.73 GB/day),
// continuing this high usage, you'll exceed your data plan by
// 11.9 GB.
// To stay below your data plan, use no more than 2.93 GB/day.


function dataUsageFeedback(planLimit, day, usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingData = planLimit - usage;
    let remainingDays = periodLength - usage
    let projectedUsage = remainingDays * currentAvg
    let statusMsg;

    console.log(`${day} day(s) used ${remainingDays} day(s) remaining`);
    console.log(`Average projected use: ${projectedAvg} GB/day`);

     if (currentAvg > projectedAvg) {
        statusMsg = "EXCEEDING"
     }else if (currentAvg < projectedAvg) {
        statusMsg = 'UNDER' 
     }else {
        statusMsg = "AT"
     }
     

    console.log(`You are ${statusMsg} exceding oyu average daily use (${currentAvg} GB/day), continuing this high usage, 
    you'll end up using ${planLimit - (usage + projectedUsage)} GB from your data limit.`);
}

dataUsageFeedback(50, 12, 25);
