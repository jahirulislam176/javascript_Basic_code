function add(a,b){
    return a+b
}
 
 //1. A Function can be stored in a variable
 var sum = add
 console.log(sum(4,5))
 console.log(typeof sum)
 //2.A Function can be Stored in a Array
var arr=[]
arr.push(add)
console.log(arr)
console.log(arr[0](5,3))

 //3.A Function can be stored in an Object
 var obj={
     sum:add
 }
 console.log(obj)
 console.log(obj.sum(7,9))
 //4.We can Create Function as Need
 setTimeout(function (){
console.log('i have created')
 })
 //5.we can pass Function as an Arguments
 
 //6.We can return from Another Function
