const teas = {
    name: 'Lemon Team',
    type: 'Green Tea',
    caffine: 'low'
}
console.log(teas.type) 

console.log(teas['caffine']);

teas.origin = 'China'
console.log(teas.origin);

teas.caffine = 'medium';
console.log(teas.caffine);

delete teas.type;
console.log(teas.type);

console.log('origin' in teas)

//  for in Objects friendly loops
for(let key in teas){
    console.log(`${key} : ${teas[key]}`);  
}

const myTeas = {
    greenTea:{
        name: 'greenTea',
        caffineLevel: 'Low',
        cups:{
            cup1: '133',
            cup2: '233'
        }
    },
    blackTea:{
        name: 'blackTea',
        caffineLevel: 'High'
    }
}

const MyteasCopy = {...myTeas};  // shallow copy
const teasCopy = teas // just a reference of teas object not a shallow and deep copy

console.log(MyteasCopy)
console.log(teasCopy);


