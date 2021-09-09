var a='abc'
// if(true){
//     if(true){
//         var b='i am B'
//     }
// }
//console.log(b)
// function x(){
//     var a=20
//     function y(){
//         //var a=10
//         console.log(a)
//     }
//     console.log(a)
//     y()
// }
// x()

//  function test(n){
//      function a(){
//          return n%3==0
//      }
//      function b(){
//          return n%5==0
//      }
//      if(a() && b(n)){
//          console.log(n+'is divisible By Both 3 and 5')

//      }
//      else{
//          console.log('Not a valid Number')
//      }
 

//     }
//     test(10)
//     test(15)

    function math(n,n){
        function add(){
           
            var sum=n+n
            return sum
        }
        function added(){
            
            var sum1=n+n
            return sum1

        }
        
        if(add() && added()){
            console.log('The result is equal for both')
        }
        else{
            console.log('Its Incorrect')
        }
        
    }
    math(10,10)