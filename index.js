function scuberGreetingForFeet(someValue){
  // Write your code here!
  if (someValue<=400){
    return "This one is on me!";
  }
  else if (someValue>400 && someValue<=2500)
  {
    return 'I will gladly take your thirty bucks.';
  }
  else{
    return "No can do.";
  }
}

function ternaryCheckCity(){
  // Write your code here!
  let city;
  return city==="NYC" ? "Ok, sounds good." : "No go.";

}

function switchOnCharmFromTip(){
  // Write your code here!
  let tip;
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
      break;
  }
}

scuberGreetingForFeet(199);