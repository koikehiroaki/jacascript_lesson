//Q4

for (var a = 1900 ; a <= 2100 ; a++){
    if (a % 4 === 0){
        if (a % 100 > 0){
            console.log(a)
        }else{
            if(a % 400 === 0){
                console.log(a)
            }
        }
    }
        
}