const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["cookies", "chocolate", "ice cream"];
const insertZ = ["A mysterious figure", "a stray dog", "an alien"];

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replaceAll(":inserty:", yItem);
  newStory = newStory.replaceAll(":insertz:", zItem);

  const customName = document.getElementById("customname");
  if (customName.value !== "") {
    newStory = newStory.replace("Bob", customName.value);
  }

  const ukRadio = document.getElementById("uk");
  if (ukRadio.checked) {
    const weightInStones = Math.round((300 / 14) * 10) / 10;
    const temperatureInC = Math.round(((94 - 32) * 5 / 9) * 10) / 10;
    newStory = newStory.replace("300lbs", `${weightInStones} stones`);
    newStory = newStory.replace("94°F", `${temperatureInC}°C`);
  }

  const storyElement = document.getElementById("story");
  storyElement.style.visibility = "visible";
  storyElement.textContent = newStory;
}

document.getElementById("generate").addEventListener("click", result);
