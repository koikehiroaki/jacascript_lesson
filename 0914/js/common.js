//Q1   
console.log('Q1')

var num1 = []
for (var i = 0; i <= 50; i++) {
    num1.push(i)
}
console.log(num1)
//for文の{}をconsole.logの外に出すと５０回console.logしたことになってしまう

num1.reverse()
console.log(num1)

var num2 = []
for (var i = 50; i >= 0; i--) {
    num2.push(i)
}
console.log(num2)

console.log(num1, num2)


//Q2
console.log('Q2')

var fruits = ['りんご', 'バナナ', 'パイナップル', 'ぶどう', 'すいか', 'めろん'];
for (var i = 0; i <= fruits.length - 1; i++)
    console.log(fruits[i])


//Q3
console.log('Q3')

var fruits = {
    red: ['りんご', 'さくらんぼ', 'いちご'],
    orange: ['かき', 'みかん', 'びわ'],
    yellow: ['バナナ', 'パイナップル', 'レモン']
};

for (fruit in fruits) {
    //console.log(fruit, fruits[fruit])
    console.log(fruit + '(' + fruits[fruit] + ')')
    //fruits[fruit]の[fruit]は変数なので''はいらない
}



//Q4
console.log('Q4')

var date = '2013/4/26';
console.log(date.split('/'))
var a = date.split('/')
a.push('金', '10:10')
console.log(a)

//Q5
console.log('Q5')
//pushは配列しか使えない

var numObj = {
    odd: [],
    even: []
}

for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        numObj.even.push(i)
    } else {
        numObj.odd.push(i)
    }
}

console.log(numObj)
