//what is Pure Function?
'* It Returns the same result if given the arguments'
'*it does not cause any observable side effects' 
function sqr(n){
    return n*n
}
console.log(sqr(2))
console.log(sqr(3))
console.log(sqr(4))
console.log(sqr(9))
 

var n=100
function change(){
     n=10
}
change()
console.log(n)

// var point={
//     x:10,
//     y:20
// }
// function printPoint(point){
//     point.x=100
//     point.y=200
//     console.log(point)
// }
// printPoint(point)
// console.log(point)


var obj={
    x:10,
    y:20
}
function objOut(obj){
    obj.x=100
    obj.y=200
    console.log(obj)

}
objOut(obj)
// console.log(obj)