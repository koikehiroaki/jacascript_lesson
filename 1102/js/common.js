console.log('test')

//jquery_ver (js_verもある)

var tabMenuItem = $('.tabMenuItem')
var tabMenu = $('.tabItem')
var prev = $('.prev')
var next = $('.next')

var currentNum = 0

// 引数num番目のクラスだけonを実行する
function move(num) {

    //前　次

    currentNum = num
    console.log(currentNum)

    //Menuとコンテンツ

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
    console.log('前', currentNum)
    //ここで次の値をmove関数に渡してあげる
    move()
})

next.on('click', function () {
    console.log('次', currentNum)
    //ここで次の値をmove関数に渡してあげる
    move()
})
