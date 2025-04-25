const saveTextA = "заповнена";
const saveTextB = "";

if (saveTextA && saveTextB) {
    console.log("Обидва поля заповнені");
} else {
    console.log("Не всі поля заповнені");
}

// saveTextA && saveTextB ? console.log("Обидва поля заповнені") : console.log("Не всі поля заповнені");


const saveNumberA = 7;
const saveNumberB = 3;

const resultNamber = saveNumberA + saveNumberB;
resultNamber > 10 ? console.log("Сума більша за 10") : console.log("Сума менша або дорівнює 10");

// if (resultNamber > 10) {
//     console.log("Сума більша за 10");
// } else {
//     console.log("Сума менша або дорівнює 10");
// }


const text = "JavaScript";

if (text.includes('JavaScript')) {
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}

// text.includes('JavaScript') ? console.log("Текст містить слово JavaScript") : console.log("Текст не містить слово JavaScript");


const number = 11;

if (number >= 10 && number <= 20) {
    console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число не входить в діапазон від 10 до 20");
}

// number >= 10 && number <= 20 ? console.log("Число входить в діапазон від 10 до 20") : console.log("Число не входить в діапазон від 10 до 20");


const name = "Taki";
const email = "tarassevcuk@gmail.com";
const password = "qwerty";

if (name.length >= 3 && email.includes('@.') && password.length >= 6 ) {
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}

// name.length >= 3 && email.includes('@.') && password.length >= 6 ? console.log("Перенаправлення на іншу сторінку") : console.log("Помилка: неправильне заповнення");