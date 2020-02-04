//Задание 1! слова палиндромы.

//Узнать является ли строка палиндромом.
//Слово палиндром - может читаться справа-налево и слева-направо одинаково. Прим “шалаш”.

function ifPalindrom (str) {
   strReverse = str.split('').reverse().join('')
    if (str === strReverse) {
        return true;
    }
    return false;
}

ifPalindrom('шалаш')
ifPalindrom('test')