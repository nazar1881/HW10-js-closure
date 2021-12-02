console.log('Задача №4:');
function sum(x) {
  return function(i) {
    console.log(x + i);
  }
}
sum(1)(2);

console.log('---------------------------');
console.log('Задача №5:');

for (let i = 1; i <= 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 0);  
}
// Ошибка в использование var, ключевое слово let, которое появилось в ES6,
// позволяет создавать новую привязку при каждом вызове функции


