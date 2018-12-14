console.log('test')

//jquery_ver (js_verもある)

var tabMenuItem = $('.tabMenuItem')
var tabMenu = $('.tabItem')
var prev = $('.prev')
var next = $('.next')
var isRoop = false /*  trueは繰り返し　falseは歯止め　*/

var currentNum = 0 // currentNumとは自分の位置を表す

// 引数num番目のクラスだけonを実行する
function move(num) {
    var last = tabMenuItem.length - 1

    if (isRoop) {

        /*  繰り返しver   */
        if (num < 0) {
            num = last
        } else if (num > last) {
            num = 0
        }

    } else {

        /*  歯止めver　　*/
        num = Math.min(num, last)
        num = Math.max(num, 0)

    }

    currentNum = num // 常に自分の位置を持っているようにする。持っていないと繰り返し下の方のprev.on('click', function ())とnext.on('click', function ())のcurrentNumが繰り返し使えない。

    /*console.log(currentNum)*/


    //一回onを全て消してからonをつける
    tabMenuItem.removeClass('on') //クラスを消す
    tabMenuItem.eq(num).addClass('on') //tabMenuItem.addClass('on')でonをつける。eqは一つづつ取る
    tabMenu.removeClass('on')
    tabMenu.eq(num).addClass('on')
}

tabMenuItem.on('click', function () {
    //console.log($(this).index()) //クリックした位置のタグの順番を取ってくる
    move($(this).index()) //引数
})

prev.on('click', function () {
    /*console.log('前', currentNum)*/
    //ここで次の値をmove関数に渡してあげる
    move(currentNum - 1) //currentNumとは自分の位置を表す
})

next.on('click', function () {
    /*console.log('次', currentNum)*/
    //ここで次の値をmove関数に渡してあげる
    move(currentNum + 1)
})
