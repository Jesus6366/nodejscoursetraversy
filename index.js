import { generateRandomNumber, celciusToFahrenheit } from "./utils.js";

import getPost from "./postController.js";

console.log(`random number: ${generateRandomNumber()}`);

console.log(`celcius to fahrenheit ${celciusToFahrenheit(0)}`);

console.log(getPost());
