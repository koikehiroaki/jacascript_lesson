//配列は何個もいれられる
//変数は一つ


//               ０       １          ２
var fruits = ['みかん', 'ぶどう', 'さくらんぼ']
console.log(fruits)

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])


// 配列の中の配列
var fruits2 = [
	['りんご', 'さくらんぼ', 'いちご'], //赤い果物    ０番目   
	['かき', 'みかん', 'びわ'], // オレンジ色果物    １番目  
	['バナナ', 'パイナップル', 'レモン'] //黄色い果物   ２番目 
]

console.log(fruits2)
console.log(fruits2[1])
console.log(fruits2[1][1])


var orange = fruits2[1]
console.log(orange)
console.log(orange[1])


//object

//配列あり   連想配列と多次元配列を使って整理
var fruits3 = {
    red: ['りんご', 'さくらんぼ', 'いちご'],
    orange: ['かき', 'みかん', 'びわ'],
    yellow: ['バナナ', 'パイナップル', 'レモン']
}


console.log(fruits3.yellow)
console.log(fruits3['yellow'][1])

//配列なし   連想配列
var fruits4 = {
    red: 'りんご',
    orange: 'みかん',
    yellow: 'バナナ'
}

//２つの取り方がある
console.log(fruits4.red)
console.log(fruits4['red'])

// var fruits3のorangeを取り出す
//上記の２つの例の２つ目の[]がついている方は下のように先に変数を作れるという利点がある
var color = 'orange'
console.log(fruits3[color])




//配列の長さを取ってくる objectはダメ
console.log(fruits.length)

//for文を使って var fruitsを取ってくる
for (var i = 0; i < fruits.length; i++) {
    console.log(i)
    console.log(fruits[i])
}

//配列に値を代入する
var colors = ['赤', '青', '黄色']
console.log(colors)
colors[0] = '茶色'
colors[3] = '紫'
console.log(colors)

//オブジェクトに値を代入する
var colors2 = {}
colors2.red = '赤'
console.log(colors2)



