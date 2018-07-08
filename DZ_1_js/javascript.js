// let str1= null;
// if(6>5){
//     str1='Evrika1'
//     console.log(str1);
// }else{
//     str1='loser'
//     console.log(str1);
// }
// let str = 6 > 5 ? 'Evrika': 'Loser';
// console.log(str);
/*
  Напишите скрипт, для авторизации администратора в панели управления.

  При загрузке страницы у посетителя запрашивается логин через prompt:

    - Если посетитель нажал Cancel — показыать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы ADMIN_LOGIN,
       показывать alert с текстом 'Доступ запрещен!'
    - Если был введен логин совпадающий со значением константы ADMIN_LOGIN, спрашивать пароль через prompt.

  При вводе пароля:

      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы ADMIN_PASSWORD,
        показывать alert с текстом 'Доступ запрещен!'
      - Если введён пароль который совпадает со значением константы ADMIN_PASSWORD,
        показывать alert с текстом 'Добро пожаловать!'

  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/

const ADMIN_LOGIN = 'admin';
// const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';

let log = prompt(ADMIN_LOGIN);
// let pas= prompt(ADMIN_PASSWORD);
if (log === null) {
    alert('Отменено пользователем!');
} else if (log != 'admin') {
    alert('Доступ запрещен!');

} else if (log === 'admin') {
    const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';
    let pas1 = 'введите пароль';
    let pas = prompt(pas1);
    if (pas === null) {
        alert('Отменено пользователем!');
    } else if (pas === 'm4ngo1zh4ackz0r') {
        alert('Добро пожаловать!');
    } else {
        alert('Доступ запрещен!');
    }

}
/////////////////////////////////////////////////////////

// let firstArray = [1, 2, 3, 4, 5];
// let secondArray = new Array(6, 7, 8, 9);
// console.log(firstArray, secondArray);
// let manthArrey = ['июнь', 'июль', 'август']
// console.log(manthArrey);
// /////////////////////////////////////////////////////
// let emptArray = [];
// console.log(emptArray);
///////////////////////////////////////////////////

// let firstArray = [1, 2, 3, 4, 5,6,7,8,9,10,11];
// firstArray [6]=110;
// firstArray [95]=2;
// firstArray.push(10);
// firstArray.push(12);
//////////////////////////////////////////
// let arrey=[1,2,3,4,5];
///////////////////////////////////////
// firstArray.push(arrey);
// let Del=arrey.pop();
// let secondArr=[];
// secondArr.push(Del);
// console.log(secondArr);
// console.log(arrey );
// ////////////////////////////////////////
// console.log(arrey.shift());
// console.log(arrey);
////////////////////////////////
// console.log(arrey.unshift(27));
// console.log(arrey.unshift(27));
// console.log(arrey.unshift(27));
// console.log(arrey.unshift(27));
// console.log(arrey.unshift(27));
// console.log(arrey.unshift(27));
// console.log(arrey.unshift(27,2,2,2));
// console.log(arrey);

/////////////////////////////////////////////////
// let arr = [[1,2,3],[5,',','qwerty'],[2.5,5.6,'/']];
// console.log(arr[0]);
///////////////////////////////////////
// let firstArray = [1, 2, 3, 4];
// let secondArr = [5, 6, 7];
// let thirdArr = ['a', 'b', 'c'];
// let first = firstArray.pop();
// let second = secondArr.shift();
// let third = thirdArr.pop();
// let fourArr = [];
// fourArr.push(first, third, second);
// console.log(fourArr);
///////////////////////////////////////////////////
// let firstArray = [1, 2, 3, 4,46,5,4,6];
// let lengthArr=firstArray.length;
// firstArray[lengthArr-1];
// console.log(firstArray.length);
// console.log(firstArray[lengthArr-1]);
// ///////////////////////////////////////////
// let firsArray=['khjhjh','hhjxjxb','a','h'];
// console.log(firsArray.indexOf('a'));
// console.log(firsArray.indexOf('h'));
// console.log(firsArray.indexOf('kh'));
////////////////////////////////////////////
// let firsArray=[11,999,45,4];           /////
// console.log(firsArray.includes(11));   //////
/////////////////////////////////////////////
////////revers/////////////////////////////////////////
// let firsArray=[11,999,45,4];
// let reverse=firsArray.reverse()
// console.log(reverse);
///////////////////////////////////////////////////////
///////////////  concat  /////////////////////////////
//////////////////////////////////////////////////////
// let firsArray=[11,999,45,4];
// let secondArray=[211,92,42,42];
// let neww =[211,92,42,42];
// let result=firsArray.concat(secondArray, neww,100);
// console.log(result);
// console.log(firsArray);
/////////////////////////////////////////////////////////
////////   slice     splice                      //////////////////
///////////////////////////////////////////////////////
// let firsArray=[11,999,45,4];
// let neww=firsArray.slice(1,4);
// firsArray.slice(2,3);
// console.log(firsArray);
//
// console.log(neww);
// console.log(firsArray);
////////////////////////////////////////////////////////////////////
// let firsArray=[11,8,45,4,25];
// // let neww=firsArray.splice(1,3);
// // let neww=firsArray.splice(1,0,3);
// // let neww=firsArray.splice(1,0,3,54);
// let neww=firsArray.splice(5,1,'abc');
//
//
// console.log(neww);
// console.log(firsArray);
////////////////////////////////////////////////////////////////////
// let arr = [1, 5, 9, 8, 7, 10];
// // delete
// // let x = arr.splice(1, 3);
// // console.log(arr);
// // console.log(x);
// // paste
// arr.splice(4, 0, 'b');
// arr.splice(1, 0, 'javascript');
// console.log(arr);
// // replace
// arr.splice(5, 1, 'abc');
// console.log(arr);
// arr.splice(1, 4, 'java', 'script');
// console.log(arr);
//////////////////////////////////////////////////////////
/*
  Есть массив имен пользователей.
  В первом console.log вывести длину массива.

  В последующих console.log дополнить конструкцию
  так, чтобы в консоль вывелись указаные в комментариях
  элементы массива.
*/

// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
//
// console.log(users.length); // 4
// // let lengthArr=firstArray.length;
// // firstArray[lengthArr-1];
// // console.log(firstArray.length);
// console.log(users[1,2]); // Poly
// console.log(users[2,3]); // Chelsey
// console.log(users[0,1]); // Mango
// console.log(users[1,2]); // Ajax
///////////////////////////////////////////////////////////////////
/* Есть массив имен пользователей */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];
//
// /* Используя методы массива, последовательно выполнить следующие операции */
//
// // Удалить из начала массива нулевой элемент
// // let user = user.shift(0);
// users.shift(); // ["Poly", "Ajax", "Chelsey"]
// console.log(users);
//
// // Удалить из конца массив последний элемент
// console.log(users); // ["Poly", "Ajax"]
// users.pop();
//
// // Добавить в начало массива любое имя
// console.log(users); // ["добавленое имя", "Poly", "Ajax"]
// users.unshift("Poly", "Ajax")
//
// // Добавить в конец массива два любых имени за одну операцию
//  //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]
// console.log(users.push("имя 1", "имя 2"));
// console.log(users);
//////////////////////////////////////////////////////////////////////////рандомный выбор числа
// let animals = ["cat", "dog", "rabbit", "bird", "fish", "wolf"];
// math = Math.floor(Math.random() * (animals.length));
// let rand = animals[math];
// console.log(rand);
// let entr = prompt('введи оно из этих животных: "cat", "dog", "rabbit", "bird", "fish", "wolf"');
//
// if (rand === entr) {
//
//     alert('вы выиграли');
//
// }else if(entr === null)
// {
//     alert('попробуйте еще раз');
//
// }
// else  (rand != entr)
// {
//     alert('вы проиграли');
// }
///////////////////////////////////////////////////////////////////////////////////////////
// let rand=animals.length(Math.random("cat","dog","rabbit","bird","fish"));
// console.log(rand);
// math = Math.floor(Math.random() * (animals.length));
// let rand = animals[math];
// console.log(rand);


// вивести в консоль випадкову тваринку з масиву

///////////////////////////////////////////////////////////////////////////////////////////////

// let loginArr = ['bob', 'mango', 'admin', 'batman', 'superuser'];
// let user = prompt('введите логин');
// if (loginArr.includes(user)) {
//     alert('такой логин занят');
//
//
// } else if (loginArr = null) {
//     alert('вы отказались');
// }
// else {
//     alert('приветствую');
// }
// console.log(loginArrincludes(6));
// 1) Запропонувати користувачу ввести логін
// 2) Якщо логін є в масиві повідомити юзера що такий логін існує
// 3) Якщо такого логіна немає привітати користувача з реєстрацією і додати його логін в масив loginArr
// 4) Після додавання логіна показати в консолі новий масив в якому буде і логін нашого користувача
// let str = 'oko';
// let str2 = 'test';
//
// let splitstr = str.split('');
// let splitstr2 = str2.split('');
// let rever=splitstr.reverse();
// let rever2=splitstr2.reverse();
// let jstr=rever.join('');
// let jstr2=rever2.join('');
// if(str===jstr){
//     console.log(true);
// }else{
//     console.log(false);
// }
// if(str2===jstr2){
//     console.log(true);
// }else{
//     console.log(false);
// }
// console.log(jstr);
// console.log(jstr2);




// split
// reverse
// join
// 1)Перевірити чи являється слово паліндромом (слово що читається справа на ліво і зліва на право однаково)
//
// 2)Зробити перевірку і вивести в консоль true or false

// console.log(); // 'oko' true
// console.log(); // 'test' false
