const obj1 ={
    fname: 'adil',
    lname: 'Umar',
    getfullName: function(){
        console.log(`hello ${this.fname} ${this.lname}`)
    }
}


const obj2 ={
     fname: 'Faria',
    lname: 'waseer',
    getfullName: function(){
        console.log(`hello ${this.fname} ${this.lname}`)
    }
}

console.log(obj1.getfullName());
console.log(obj2.getfullName());
// Dry -- Dont repeat yourself

// classes 
class  person{
     constructor(fname, lname){
      this.fname = fname,
      this.lname = lname
     }
     getfullName(){
        return `${this.fname} ${this.lname}`
     }
}

const p1 = new person('adil', 'Umar');
const p2 = new person('faria', 'waseer')
console.log(p1);
console.log(p2);
console.log(p1.getfullName());
console.log(p2.getfullName());


