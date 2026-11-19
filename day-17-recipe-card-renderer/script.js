/**
 * Day 17 - Recipe Card Renderer
 * Javascript 30 Day Challenge
 *
 * Renders an array of recipe objects as styled cards, sorted by
 * cooking time. Uses destructuring, optional chaining and nullish
 * coalescing to safely handle missing notes and author fields.
 */

const recipes = [
  { title: "Tomato Pasta", minutes: 20, servings: 2, author: { name: "Anand" } },
  { title: "Vegetable Stir Fry", minutes: 15, servings: 3, notes: "Use a hot pan." },
  { title: "Banana Pancakes", minutes: 25, servings: 4 },
];

const recipeList = document.querySelector("#recipe-list");

recipes.sort((a, b) => a.minutes - b.minutes);
recipes.forEach((recipe) => {
  const {title, minutes, servings, notes, author} = recipe; 
  const authorName = author?.name;

  const card = document.createElement("div");
  card.classList.add("recipe-card");
  
  const heading = document.createElement("h3");
  heading.textContent = title;
  card.appendChild(heading);

  const time = document.createElement("p");
  time.textContent = minutes + " min";
  card.appendChild(time);

  const servingText = document.createElement("p");
  servingText.textContent = servings + " Servings";
  card.appendChild(servingText);

  const notesText = document.createElement("p");
  notesText.textContent = "Notes: " + (notes ?? "No notes provided") ;
  card.appendChild(notesText);

  if (authorName) {
    const authorNameText = document.createElement("p");
  authorNameText.textContent = "By, " + authorName;
  card.appendChild(authorNameText);
  };

  
  recipeList.appendChild(card);
});

console.log("Recipe Card Renderer script loaded.");
