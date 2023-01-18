// Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, 
// который будет преобразовывать XML в JS-объект и выводить его в консоль.
// {
//     list: [
//       { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//       { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//     ]
// }

const parser = new DOMParser();
const xmlStr = `<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`;
const source = parser.parseFromString(xmlStr, "text/xml");
const elements = source.querySelectorAll("student");
var result = new Object();

result.list = [];
for (let i=0; i < elements.length; i++) {
    result.list.push({});
    nameElement = elements[i].querySelector("name");
    result.list[i].name = nameElement.querySelector("first").textContent + ' ';
    result.list[i].name += nameElement.querySelector("second").textContent;
    result.list[i].age = elements[i].querySelector("age").textContent;
    result.list[i].prof = elements[i].querySelector("prof").textContent;
    result.list[i].lang = nameElement.getAttribute("lang");
}
console.log(result);
