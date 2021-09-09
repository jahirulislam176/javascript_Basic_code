 
 
 
 var addition=function(a,b){
    return a+b
    //console.log(a+b)
}

setTimeout(function(){
    console.log('i will call after  5 second')
},5000)
 var another=addition
 console.log(another(7,8))
