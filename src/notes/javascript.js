const jsNotes = `
--- Event listeners ---
const element = document.querySelector(".my-element");
element.addEventListener("click", () => console.log("clicked"));

--- Export / Import syntax ---
export const array = [1, 2, 3];
export { dog, cat };
export default data;

import { myArray } from "./data.js";
import * as myImports from "./data.js";
import data from "./data.js";

--- Classes ---
class Warrior {
  constructor(name, strength) {
    this.name = name;
    this.health = 100;
    this.strength = strength;
  }
  attack() {
    return \`\${this.name} deals \${this.strength} damage!\`;
  }
}

--- Array methods ---
arr.forEach(x => console.log(x));
arr.map(x => x * 2);
arr.filter(x => x % 2 == 0);
`;

export default jsNotes;
