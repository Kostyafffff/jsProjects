export const hasSpam = (text: string, spamWords: string[]): boolean =>  {

   const lowerCasedSpam = spamWords.map(word => word.toLowerCase());

   return text
            .replace(/[,.!:;]/g, '')
            .split(' ')
            .map(item => item.toLowerCase())
            .some(it => lowerCasedSpam.includes(it));
}
// Данная функция должна находить запрещенные слова в тексте, и удалять его при помощи текста переданного в агрументе replaceWith
// Если слово было написано с большими буквами то большие буквы должны и остаться в конечном тексте, если слово не является спамом

/* Пример работы
const text = 'A b c D e f G h i';
const spam = ['a', 'c', 'h'];

const result = replaceSpam(text, spam, 'XXX');
console.log(result); // 'XXX b XXX D e f G XXX i'
*/
export const replaceSpam = (text: string, spam: string[], word: string): string => {
   const words = text.split(' ');

   const resultArray: string[] = [];

   words.forEach(it => {
      if (isSpamWord(it, spam)){
        resultArray.push(wordConverter(it, word));
      }
      else {
        resultArray.push(it);
      }
   });

   return resultArray.join(' ');
}

export const isSpamWord = (word: string, spam: string[]): boolean => spam.includes(
    word.toLowerCase()
        .replace(/[,.!:;]/g, '')
);

export const wordConverter = (word: string, wordToReplace: string): string => {
   if (isEndWithChar(word)) {
      return `${wordToReplace}${word.charAt(word.length-1)}`
   }

   return wordToReplace;
}

export const isEndWithChar = (word: string): boolean => {
   const charArray = ['.', ',', ':', '-', ';', '?', '!', '(', ')'];

   return charArray.some(it => it === word.charAt(word.length-1));
}
