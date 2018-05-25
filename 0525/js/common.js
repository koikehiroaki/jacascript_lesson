var test = 'てすと';
console.log(test);

//余りを表す//
console.log(10 % 3);

//掛ける//
console.log(10 * 3);

//割る//
console.log(10 / 3);

//javascriptのタイプについて//
//文字列//
var text = '文字列'; //シングル　or ダブルで囲う（主にシングルを使う）//
console.log(text);

//数値//
var num = 1;
console.log(num);

//論理値//
var bool = true;
var bool2 = false;
console.log(bool, bool2);

//文字列を数値に変換する//
console.log(parseInt('100px'));

//空文字と数字の０はfalse//
//数字の１以上と存在する文字はtrue//
console.log(Boolean('てすと'));
console.log(Boolean(1));
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(-1));


$('.box').parallaxFit({
    start: 0,
    end: 500,
    toStyle: {
        left: '300px'
    }
        
    
    
})








