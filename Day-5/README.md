# Day 5: DOM Manipulation

The purpose is to understand how JavaScript reaches into the live HTML tree,
creates new elements, mutates existing ones, and responds to user actions in real time.

## What does this project cover?
A Skill Tracker embedded inside the Dev Card that will add skills, toggle learning/mastered, delete them
- `querySelector` to grab elements from the DOM
- `classList.add`, `.remove`, `.toggle`, `.contains` to flip CSS classes from JS
- `addEventListener` to listen for user actions
- `data-index` to stamp custom metadata onto HTML elements
- `.map((item, index) => ...)` — second argument gives position in array
- `array.push()` to add skill objects dynamically
- `array.splice(index, 1)` to delete items from array
- `input.value` to read what user typed

## Constraints
- No frameworks, no libraries
- All skill state lives in the `devData.skills` array — DOM is just a reflection of it
- No hardcoded skills in HTML

## How it works
```
user types skill name     →  addSkill() reads input.value
push { name, status }     →  into devData.skills array
buildCard() called        →  rebuilds entire innerHTML from current array state
user clicks skill pill    →  toggleSkill(index) flips status learning ↔ mastered
user clicks X             →  deleteSkill(index) splices item out of array
buildCard() called again  →  DOM reflects updated array
```
## Bugs I hit
- **Quote collision** : used `"mastered"` inside a class attribute that was
  already wrapped in `"`. Browser breaks the string. Use single quotes inside.
- **Button outside span** : closed `</span>` before the delete button,
  so button floated outside the pill. Missed a closing tag position.
- **Duplicate event listeners** : every `buildCard()` re-attached a new listener
  to the Add button. One click fired multiple times. Fixed with `cloneNode(true)`
  to wipe old listeners before attaching fresh one.
- **Span overflow/overlap** : `<p>` tag with inline spans wraps weirdly.
  Fixed by switching to `<div>` with `display: flex` and `flex-wrap: wrap`.

## Key insight
The DOM is not the source of truth. The JS array is.
Never read state from the DOM but store it in data, render from data.
This pattern (data → render) is exactly how React works under the hood.

## File structure
```
Day-5/
├── index.html    (just an empty div)
├── style.css     (styling)
└── script.js     (addSkill, toggleSkill, deleteSkill, rebuilt buildCard)
```

## Improvements / what's next
- Skills vanish on page refresh, no persistence yet
- Day 6: localStorage will persist skills across refreshes + event delegation will clean up the listener mess properly