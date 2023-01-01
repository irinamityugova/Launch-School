const today= new Date(Date.now())
const time = today.getHours();
console.log("time: ", time);
let dayTime = "morning";

let name = prompt("What's your name?");

function greet () {

  if (12 <= time && time <= 16) {
  dayTime = "afternoon";
} else if (17 <= time && time <= 22) {
  dayTime = "evening";
} else if (23 <= time || time <= 5) {
  dayTime = "night";
}

  alert(`Good ${dayTime}, ${name}!`)
  console.log(`Good ${dayTime}, ${name}!` );

}




