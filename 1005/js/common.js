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

//var fruits = ['りんご', 'めろん', 'ぶどう'];
//
//function addFruit(fruits, fruit) {
//    fruits.push(fruit)
//    return fruits
//}
//console.log(addFruit(fruits, 'すいか'))



var fruits = ['りんご', 'めろん', 'ぶどう'];

function addFruit(ggg, fruit) {
    ggg.push(fruit)
    return ggg
}
console.log(addFruit(fruits, 'すいか'))


//Q3
console.log('Q3')

function randomNum1(num) {
    //1~10
    return Math.floor(Math.random() * num + 1)
    //0~10
    //return Math.floor(Math.random() * (num + 1))

    //Math.random()はMath.floorをしてもブラウザの表示は小数点が切れるが実際のMath.random()は小数点は切れない
}
console.log(randomNum1(10))

//Q4
console.log('Q4')

function randomRangeNum(numA, numB) {
    var randomNum1 = Math.floor(Math.random() * (numB - numA + 1) + numA)
    //Math.random()はMath.floorをしてもブラウザの表示は小数点が切れるが実際のMath.random()の小数点は切れない
    //計算は () => かけ算 => 通常 の順番で計算するので Math.random() * (numB - numA + 1) を先に計算する
    return randomNum1
}
console.log(randomRangeNum(3, 10))


//Q5
console.log('Q5')

function text(mozi) {
    if (mozi.length <= 4) {
        return mozi
    } else {
        return mozi.slice(0, 4) + '...'
    }
}

console.log(text('0123456789'))
console.log(text('0123'))
console.log(text('01'))

//Q6
console.log('Q6')

function getMoneyFormat(numX) {
    var str = String(numX)
    var newString = ''
    for (var i = str.length - 1, j = 1; i >= 0; i--, j++) {
        console.log(i, j)
        if (j % 3 === 0 && j !== str.length) {
            newString = ',' + str[i] + newString
        } else {
            newString = str[i] + newString
        }
    }
    return newString
}

console.log(getMoneyFormat(12345678))
