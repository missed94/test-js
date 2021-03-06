
/*Объявляем переменную со строкой*/ 
let string = "Привет мир";

/*все буквы в нижнем регистре*/ 
string = string.toLowerCase(string);
/*Объявляем переменную с массивом гласных*/ 
let letters = ["у", "е", "а", "о", "э", "я", "и", "ю", "ы", "ё"];
/*Объявляем пустую переменную, в которую в последствии будем добавлять буквы*/ 
let result = '';

/*цикл для перебора букв в строке*/
for (let i = 0; i < string.length; i++) {
  /*Переменная с присвоенным значением буквы строки*/
  let character = string[i];

  /*условие: если буква из строки совпадает с буквой из массива*/
  /*includes(character) позволяет определить, 
    содержит ли массив искомый элемент. 
    В случае нахождения элемента метод возвращает логическое значение true, 
    в обратном случае false.*/
  if (letters.includes(character)) {

    /*если условие true, то в строку добавляется гласная буква*/ 
    result += character;
  }
  
}

console.log(result);
