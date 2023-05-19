// Тип даних який відображає рядок
let myString ="string123";
console.log(myString);

// Тип даних який відображає номер
let myNumber =359;
console.log(myNumber);

// Тип даних який відображає логічні значення
let myBoolean=true;
let myBoolean2=false;
console.log(myBoolean,myBoolean2)

// Тип даних який відображає значення "null"
let myNull = null;
console.log (myNull)

// Тип даних який що змінна немає значення
let myUndefined;
let myUndefined1 = undefined;
console.log(myUndefined,myUndefined1)

// Тип даних який відображає числовий тип
let myBigInt =3124124124n;
console.log(myBigInt)

// Тип даних який відображає символ
let mySymbol =Symbol("433")
console.log(mySymbol)

// Тип даних Object = відображає булеві або логічні значення (True,False)
let myCity = {
    Country: 'Ukraine',
    Name: 'Lviv',
    Age: '767'
}
console.log(myCity)

// Перетворення тип даних з одного в інший
let mynumber =1;
console.log(typeof mynumber);
console.log("type of mynumber after converting", typeof String ("mynumber"));

// Перетворення тип даних з одного в інший
let myNumber1 =25;
console.log(typeof myNumber1)
console.log("type of mynumber1 after converting", typeof Boolean(myNumber1))
console.log("Result after converting", Boolean(myNumber1));

// Додавання з точною відповідью та, Ділення першого та другого  числа з точною відповідью

// let numeric = +prompt("Перше Число",'')
// let numeric2 = +prompt("Друге Число",'')
// let result = numeric+numeric2;
// alert(result);
// let division =prompt("Ділимо загальне Число на ваш розгялд")
// alert(result/division)
// console.log(numeric,division)

// Таблиця confrim ok-or-canel

let question =confirm("The end ?");
console.log(question);



let number1 = 5, number2 = "6", number3 =3, result; // Задача5x6%3= ?
result = number1 * number2 / number3; // Відповідь =10
console.log(result)


let a = +prompt('Введіть число')
let b = +prompt('Введіть друге число')
let sum = a+b;
console.log(sum)
alert(sum)

switch(sum) {
    case 1:
    case 2:
    case 3:
        alert('Ваше число вірне')
        break;
    case 4:
        alert('Ваше число більше 0 але менше 5')
        break;
    case 5:
        alert('Ваше число більше 0 але менше 5')
        break;
    case 6:
    case 7:
    case 8:
        alert('Ваше число більше 5 але менше 10')
        break;
    case 9:
        alert('Ваше число Вірне')
        break;
    case 10:
        alert('Ваше число більше 5 але менше 10')
        break;
    case 11:
    case 12:
    case 13:
        alert('Ваше число Вірне')
        break;
    case 14:
        alert('Ваше число більше 10 але менше 15')
        break;
    case 15:
        alert('Ваше число більше 15 але менше 30')
        break;
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
        alert('Ваше число більше 15 але менше 30')
        break;
    case 25:
        alert('Ваше число Вірне')
        break;
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
        alert('Ваше число більше 15 але менше 30')
        break;
    default:
        console.log('Помилка')
        alert('Найдіть правильні числа від 1-30')

}
 

let age = Number(prompt("Ваш вік ?"))
let userName = String(prompt("Введіть своє імя",''))
if(age < 10) {
    alert(userName + "  Малеча")
} else if (age < 20) {
    alert(userName + "  Підліток ")
} else if (age < 30) {
    alert(userName + "  Дорослий")
} else {
    alert(userName + "  Старий")
}