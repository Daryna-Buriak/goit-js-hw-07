/*З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).*/

//get the main general list - ul
const lists = document.querySelector("#categories");
//console.log(lists);
//get the number of lists within the main list - ul. Animals, Products, Tech
console.log("Number of categories: " + lists.childElementCount);

//introduce each list as a separate entity -> iterate through them to get titles
const categories = lists.children;
//console.dir(categories);

for (let category of categories) {
  const title = category.getElementsByTagName("h2")[0];
  console.log("Category: " + title.innerText);

  const itemsList = category.getElementsByTagName("ul")[0];
  console.log("Elements: " + itemsList.childElementCount);
}
