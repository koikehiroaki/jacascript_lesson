var test = 'てすと';
console.log(test, typeof test);
var num = 1;
console.log(num, typeof num);
var num2 = '2';
console.log(num2, typeof num2);
var bool = true;
console.log(bool, typeof bool);
console.log(false, typeof false);

//比較演算子
console.log(1 === 1);
console.log(1 !== 1);
console.log(1 < 2);
console.log(1 > 2);
console.log(1 >= 1);
console.log(1 <= 1);

//コメント
/* 
複数行コメント
*/

//論理演算子
var num = 10;
console.log(num > 5 && num < 20);

var num2 = Math.floor(Math.random() * 10); //ランダムに０から９までの数を入れる
console.log(num2, num2 === 5 || num2 === 3);　　 //その数字と比較して５もしくは３の数字だった場合true
