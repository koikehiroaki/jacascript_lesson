var fruits = ['りんご', 'バナナ', 'パイナップル', 'ぶどう', 'すいか', 'めろん'];

//配列の長さを取る
console.log(fruits, fruits.length)

var fruits2 = ['みかん', 'マンゴー'];

//配列を連結する
console.log(fruits.concat(fruits2))

//文字列として繋げる
var data = [2018, 7, 13]
console.log(data, data.join('/'))

//配列を追加
var fruits3 = ['バナナ']
console.log(fruits3)

//後ろに追加
fruits3.push('ぶどう')
console.log(fruits3)

//前に追加
fruits3.unshift('みかん')
console.log(fruits3)


//配列の削除
//前を削除
fruits3.shift()
console.log(fruits3)

//後ろを削除
fruits3.pop()
console.log(fruits3)


//削除と追加 (入れ替える)
fruits.splice(2, 3, 'みかん', 'みかん', 'みかん')　 //２から３つ分入れ替える
console.log(fruits)

//配列を取り出す
var animal = ['猫', '犬', 'うさぎ', 'ハムスター', 'ふくろう', 'トラ']
console.log(animal.slice(1, 3))　　 // １から３番目まで（３番目は含まない）

//配列の後ろから２つ取ってくる
//4から６番目まで（６番目は含まない）
console.log(animal.slice(animal.length - 2, animal.length))

//並び替え
var num = [3, 1, 2, 5]
console.log(num.sort())

//配列の逆順
console.log(num.reverse())

//区切り文字を指定して文字列から配列に変換　Joinと逆のイメージ
var dateString = '2018/7/13'
console.log(dateString.split('/'))
