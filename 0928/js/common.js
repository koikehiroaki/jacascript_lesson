function test() {
    console.log('test')
}

test() // 実行






function addNum(num, num1) {
    console.log(num + num1)
}

addNum(1, 10) //引数（ひきすう）を渡して実行






//引数に渡された数だけfor文を回す
function forNumber(num) {
    for (var i = 0; i <= num; i++) {
        console.log(i)
    }
}

forNumber(2)
forNumber(10)





// return
function addNum2(num, num1) {
    return num + num1  //処理
}

console.log(addNum2(1, 1000)) //処理した結果（1001の数字）として返ってくる







//引数で渡した数が入った配列を返す関数
//指定の数が入った配列をreturnをつかって返す関数
function numArray(num) {
    var ary = []   //この変数(ary)は「numArray関数」内でしか使えない変数です（ローカル変数）


    for (var i = 0; i < num; i++) {
        ary[i] = i
        //ary.push(i)
    }

    return ary

}

console.log(numArray(20))
console.log(numArray(50))

//console.log(array)   //arrayが「numArray関数」外で定義（グローバル変数）されてないのでここでエラーになります。







//指定の数が入った配列をreturnを使わないで返す関数?(自分でプログラムを考えたので間違っている可能性あり)
function numArray2(num2) {
    var ary2 = []         


    for (var i = 0; i < num2; i++) {
        ary2[i] = i
        //ary2.push(i)
    }

    console.log(ary2)

}

numArray2(20)
numArray2(50)
