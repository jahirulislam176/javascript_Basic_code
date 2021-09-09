//infinityforloop
//var isRunning =true


for(; ;){
    var rand =Math.floor(Math.random()*10+1)
    if(rand ==9){
        console.log('winner winner chicken Dinner')
        break
    }else{
        console.log('You have got'+rand)
    }

}