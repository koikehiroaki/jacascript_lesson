//０〜１まで（未満）のランダムな数字
console.log(Math.random());

//小数点を切る
console.log(Math.floor(3.555));

//０〜９までのランダムな数字（少数あり）
console.log(Math.random() * 10);

console.log(Math.random() * 10　 + 1);

//０〜９までのランダムな整数
console.log(Math.floor(Math.random() * 10));

//1~10
console.log(Math.floor(Math.random() * 10) + 1);

//配列の値をランダムで出す
var names = ['亀井', '渡邊', '安部']
console.log(names[Math.floor(Math.random() * names.length)])

//繰り上げ
console.log(Math.ceil(3.1))

//四捨五入
console.log(Math.round(3.5))

//最大・最小　それぞれを取得する
console.log(Math.min(1, 2, 3, 4))
console.log(Math.max(1, 2, 3, 4))

//最大値・最小値を決めたい
var randomNum = Math.floor(Math.random() * 10)
console.log(Math.min(randomNum, 50))　 //最大値を５０とする
console.log(Math.max(randomNum, 50))　 //最小値を５０とする


//javascript問題　　関数
//Q1
console.log('Q1')

function numObj(num) {
    var nums = {
        odd: [],
        even: []
    }

    for (var i = 0; i <= num; i++) {
        if (i % 2 !== 0) {
            nums.odd.push(i)
        } else {
            nums.even.push(i)
        }
    }
    return nums
}
console.log(numObj(100))

//Q2
console.log('Q2')

var fruits = ['りんご', 'めろん', 'ぶどう'];

function addFruit(fruits, fruit) {
    fruits.push(fruit)
    return fruits
}
console.log(addFruit(fruits, 'すいか'))

//Q3
console.log('Q3')

function randomNum1(num) {
    return Math.floor(Math.random() * num)
}
console.log(randomNum1(10))
