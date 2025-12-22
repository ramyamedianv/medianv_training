class student{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    greet():string{
        return `Hello,my name is${this.name}`;
    }

}

const s1=new student('ramya',23);
console.log(s1.greet());



//short hand constructor 

class User{
    constructor(
        public name:string,
        private password:string,
        protected role:string
        
    ){}
}


export {};