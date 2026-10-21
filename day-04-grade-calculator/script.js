// Day 04 – Grade Calculator
// Converts a score (0–100) to a letter grade with a +/- modifier and prints feedback.

const score = 150;
let modifier = "";
let letterGrade;

if (score <= 100 && score >= 0) {
  if (score >= 90) {
    letterGrade = "A";
  } else if (score >= 80) {
    letterGrade = "B";
  } else if (score >= 70) {
    letterGrade = "C";
  } else if (score >= 60) {
    letterGrade = "D";
  } else { letterGrade = "F" };

  if (letterGrade !== "F" && score !== 100) {
    if (score % 10 <= 2) {
      modifier = "-";
    } else if (score % 10 >= 7) {
      modifier = "+";
    }
  }

  console.log(`Your Grade : ${letterGrade}${modifier}`);

  switch (letterGrade) {
    case "A":
      console.log("Congrats, you must be a nerd");
      break;
    case "B":
      console.log("Wow, try harder u can be a nerd");
      break;
    case "C":
      console.log("Oh my god!! Look at johny he got an A");
      break;
    case "D":
      console.log("Soo close, the professor had some mercy on you");
      break;
    case "F":
      console.log("Yooo thats crazy, Better start applying to KFC");
      break;
    default:
      console.log("Unknown grade");
  }
} else { console.log("Invalid score") };
