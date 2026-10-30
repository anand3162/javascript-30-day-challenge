// Day 11 – Palindrome Checker
// String utilities: palindrome detection, longest word, and vowel counting.

function isPalindrome(text) {
  const textLower = text.toLowerCase();
  let cleaned = "";
  for (const char of textLower) {
    if (char >= "a" && char <= "z") {
      cleaned += char;
    }
  }
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}
console.log(
  `"Was it a car or a cat I saw" → ${isPalindrome("Was it a car or a cat I saw")}`,
);
console.log(`"Madam, I'm Adam" → ${isPalindrome("Madam, I'm Adam")}`);
console.log(
  `"A man, a plan, a canal: Panama" → ${isPalindrome("A man, a plan, a canal: Panama")}`,
);
console.log(`"Hello, world!" → ${isPalindrome("Hello, world!")}`);
console.log(`"Racecar" → ${isPalindrome("Racecar")}`);

function longestWord(sentence) {
  const words = sentence.split(" ");
  let longest = "";
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

console.log(`The longest word -> ${longestWord("i am kundi")}`);

function countVowels(text) {
  const cleaned = text.toLowerCase();
  let count = 0;
  for (const char of cleaned) {
    if ("aeiou".includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(`Vowels in "Hello World": ${countVowels("Hello World")}`);
