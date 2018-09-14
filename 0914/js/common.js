//Q1   
var num1 = []
for (var i = 0; i <= 50; i++) {
    num1.push(i)
}
console.log(num1)
//for文の{}をconsole.logの外に出すと５０回console.logしたことになってしまう

num1.reverse()
console.log(num1)


//Q2
var fruits = ['りんご', 'バナナ', 'パイナップル', 'ぶどう', 'すいか', 'めろん'];
for (var i = 0; i <= 5; i++)
    console.log(fruits[i])


//Q3
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
var date = '2013/4/26';
console.log(date.split('/'))
var a = date.split('/')
