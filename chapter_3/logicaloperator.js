//&& || !
//A && B
//true && true=true
//true && false =false

// A || B
// true || true =true
//true // false =true
// false || true=true
//false || false=false
var a=10
var b=20
var c=30
var d=40
if(a >b && c>d){
    console.log('A is greater Than B and C is greater than D')

}else{
    console.log('At least one Condition is False')
}


if(a>b || c>d){
    console.log('A is greater Than B or C is greater than D')

}else{
    console.log('At least one Condition is False')
}

var check=!!(a>b)
console.log(check)