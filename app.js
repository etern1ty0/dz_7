// 1
class Worker {
    constructor (name,surname,rate ,days){
        this.name = name
        this.surname = surname
        this.rate = rate 
        this.days = days
    } 
getsalary(){
    return this.rate*this.days
}   
}   
const worker = new Worker('Нурдан', 'Канатов', 10, 31);
console.log(worker.getsalary());
console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);

// 2
class secondWork {
constructor (name,surname,rate ,days){
    this.name = name
    this.surname = surname
    this.rate = rate 
    this.days = days
} 
get getFullName () {
    return  console.log(`${this.name} ${this.surname}`);
}
get getDaysandRate () {
    return console.log(`${this.rate} ${this.days}`);
}
getsalary(){
return this.rate*this.days
}   
}   
const nurdan = new secondWork('nurdan', 'kanatov', 10, 31);
console.log(nurdan.getsalary());
nurdan.getDaysandRate
nurdan.getFullName