//Access modifiers control who can access properties or methods.

//public(default)
class Car{
    public brand:string;
    constructor(brand:string){
        this.brand=brand;
    }
}
const c1=new Car("BMW");
console.log(c1.brand);// allowed

//private
 class BankAccount{
    private balance:number=0;
    deposit(amount:number){
        this.balance+=amount;
    }

    getBalance(){
        return this.balance;
    }

 }

 const acc=new BankAccount();
 acc.deposit(500);
 console.log(acc.getBalance());

 // acc.balance Error (private)

 //protected


 class Employee{
    protected salary:number;
    constructor(salary:number){
        this.salary=salary;
    }
 }


 class Manager extends Employee{
    showSalary (){
        return this.salary;
    }
 }

 const mgr=new Manager(5000);
 console.log(mgr.showSalary());
// mgr.salary  Error (protected)





export {};