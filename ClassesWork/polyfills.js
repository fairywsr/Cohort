// fallback or backup functions are called polyfill

const arr = [1, 2, 3, 4, 5]

if(!Array.prototype.myForEach){
    // real signature of forEach function
    //--- no returm, function as input, function takes 2 parameters are value & index call fn for everyvalue of array
    Array.prototype.myForEach = function(userfn){
     const orignalArr = this 
     for(let i = 0; i < orignalArr.length; i++){
        userfn(orignalArr[i], i)
     }
    }
}

arr.myForEach(function(value, index){
      console.log(`Value at index ${index} is ${value}`)
})


//  polyfill of map (Array Method)
if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userfn){
         const result = [];
           for(let i = 0; i < this.length; i++){
            const value = userfn(this[i], i)
            result.push(value);
           }

         return result;
    }
}

const n = arr.map((e) => e*3); // default function of arrays 
const n2 = arr.myMap((e) => e*4); 
console.log(arr);
console.log(n);
console.log(n2);

