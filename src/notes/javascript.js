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


---- replace prop -----
  Imagine your browser history is like a stack of papers on your desk:

Without replace (normal navigation):
- You're on Page A (bottom paper)
- You navigate to Page B (add new paper on top)
- You navigate to Page C (add another paper on top)
- Stack: A → B → C
- When you hit "back", you go C → B → A

With replace prop:
- You're on Page A (bottom paper)
- You navigate to Page B with replace (throw away Page A, put Page B in its place)
- You navigate to Page C (add new paper on top)
- Stack: B → C
- When you hit "back", you go C → B (Page A is gone!)

Why would you want this?
Common scenario: Login redirects

// User tries to access protected page
// Gets redirected to login
// After login, redirect to dashboard

<Navigate to="/dashboard" replace />
Without replace: User → Protected Page → Login → Dashboard
- If user hits "back", they go back to login (bad!)

With replace: User → Login → Dashboard  
- If user hits "back", they go back to where they started (good!)

Real-world example:
Think of it like replacing a wrong turn:
- You're driving to the store
- You accidentally turn onto the wrong street
- You make a U-turn and get back on the right path
- You don't want that wrong turn in your "driving history"
`;

export default jsNotes;
