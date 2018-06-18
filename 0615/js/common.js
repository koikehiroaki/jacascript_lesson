var num = 100;
num = 20;
console.log(num);

//constは再代入ができない
const num2 = 10;
//num2 = 30;
console.log(num2);

const num3 = Math.floor(Math.random() * 10);
console.log(num3)

//num3の変数が奇数なら、「奇数です」と表示する
//２で割り切れなかったとき

//自分
if (num3 % 2 > 0) {　
    console.log(num3, '奇数です');
}

//他
if (num3 % 2 === 1) {　
    console.log(num3, '奇数です');
}

if (!(num3 % 2 === 0)) {　
    console.log(num3, '奇数です');
}

//num3が奇数の場合は「奇数です」偶数の場合は「偶数です」と表示する

var result = '';
if (num3 % 2 !== 0) {
    //出力
    console.log(num3, '奇数です')
    //変数　
    result = '奇数です';
} else if (num3 === 0) {
    //出力
    console.log(num3, '０です')
    //変数
    result = '０です';
} else {
    //出力
    console.log(num3, '偶数です');
    //変数
    result = '偶数です';
}

$('.box').html(num3 + 'は' + result);
