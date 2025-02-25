// function iif(){
//   // this is iffi function syntax imediately invoke function
// }()

function truthyValue(value){
    if(value){
        console.log('Truthy')
    }else{
        console.log('falsy')
    }
}
console.log(`0 ${truthyValue(0)}`)
console.log(`1 ${truthyValue(1)}`)
console.log(`Empty Array ${truthyValue([])}`)
console.log(`Empty Object ${truthyValue({})}`)
console.log(`'Empty string' ${truthyValue('')}`)
console.log(`'hello' ${truthyValue('hello')}`)
console.log(`'Array with Elements' ${truthyValue([1, 3, 5, 6])}`)
