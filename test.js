const string = "Привет! Как дела?";

let letters = ["у", "е", "а", "о", "э", "я", "и", "ю", "ы", "ё"];

let result = "";

for (let i = 0; i < string.lenght; i++) {
  let character = string[i];
  if (letters.includes(character)) {
    result += character;
  }
  
}

console.log(result);
