function IsItPalindrome (string) {
  const cleanedStr = string.replace(/\s/g, '').toLowerCase();//убираем пробелы и только маленькие буквы
  
  const reversedStr = cleanedStr.split('').reverse().join('');//переворачиваем слово и соединяем слова

  return cleanedStr === reversedStr;//сравниваем
}
console.log(IsItPalindrome("Ага"));
console.log(IsItPalindrome("Папа"));
console.log(IsItPalindrome("Лиза"));
console.log(IsItPalindrome("Лёша на полке клопа нашёл"));
