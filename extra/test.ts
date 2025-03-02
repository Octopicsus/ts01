// let x: number = 10;
// let q: string = 'hello';

// const myArray: any[] = [39, 'Octo'];

//---------------------------------------------

// let nickname: string = 'Octo'
// let age: number = 39

// let digits: number[] = [12, 23, 34]
// let digits2: Array<number> = [23, 243, 21]

// let user: any = {
//     isAdmin: true,
//     name: 'Andy'
// }

// age = 23

//---------------------------------------------

// type userType = { name: string, isAdmin: boolean, password?:string }

// let user: userType = {
//     isAdmin: true,
//     name: 'Octo',
// }

// function sum(a: number = 0, b: number = 0): string {
//     return `Result: ${a + b}`
// }

// console.log(sum(2, 3))

// function showData(obj: userType) {
//     console.log(obj.name)
//     console.log(obj.isAdmin)
// }

// showData(user);

//---------------------------------------------

// type IDType = number | string

// const userId: IDType = 4
// const user2Id: IDType = 'not a number'

// type userType = {
//     id: IDType,
//     name: string,
//     age: IDType,
//     isAdmin?: boolean
//     toString(): string
// }

// const user: userType = {
//     id: 42,
//     name: 'Octo',
//     age: 39,
//     toString() {
//         return `${this.name} ${this.id} ${this.age}${
//             this.isAdmin ? ', администратор' : ''
//         }`;
//     }
// }

// console.log(user.toString())

//---------------------------------------------

// type Human = {
//     name: string,
//     age: number,
//     showData(): void
// }

// type Developer = Human & {
//     skills: string[]
// }

// const myDev: Developer = {
//     name: 'Octo',
//     age: 20,
//     skills: ['JS', 'TS', ''],
//     showData: function () {
//         console.log(this.skills)
//         return 'sadad';
//     }
// }

// console.log(myDev)

// myDev.showData()

//---------------------------------------------

// enum buttonStates {
//     ON = 'ON',
//     OFF = 'OFF',
//     NUMBER = 42
// }

// document.querySelector('input')?.addEventListener('change', (event) => {

//     const inputElement = event.target as HTMLInputElement

//     const state: buttonStates = inputElement.checked ? buttonStates.ON : buttonStates.OFF
//     toggleButton(state)
// })

// function toggleButton(state: buttonStates): void {
//     console.log(state)
// }

//--------------------------------------------- Partial

// type employee = {
//     name: string,
//     startDate: string,
//     salary: number
// }

// type partialEmployee = Partial<employee>

// const engineer: partialEmployee = {
//     name: 'Octo'
// }

// console.log(engineer.name)

//--------------------------------------------- Readonly

// type EmployeeType = {
//     name: string,
//     startDate: string,
// }

// type readOnlyEmployee = Readonly<EmployeeType>

// const employee: readOnlyEmployee = {
//     name: 'Octo',
//     startDate: '17-Feb-2021'
// }

// /* employee.name = 'Andy' */

// console.log(employee.name)

//--------------------------------------------- type: readonly

// type EmployeeType = {
//     name: string,
//     startDate: string,
//     readonly salary: number
// }



// const employee: EmployeeType = {
//     name: 'Octo',
//     startDate: '17-Feb-2021',
//     salary: 0
// }

// /* employee.salary = 1000 */

// console.log(employee.salary)
// console.log(employee.name)

//--------------------------------------------- Required

// type EmployeeType = {
//     name: string,
//     startDate: string
// }

// type PartialEmployee = Partial<EmployeeType>
// type RequiredEmployee = Required<PartialEmployee>

// const fullEmployee: RequiredEmployee = {
//     name: 'Octo',
//     startDate: '17-02-2021'
// }

//--------------------------------------------- Pick

// type EmployeeType = {
//     name: string,
//     salary: number,
//     startDate: string
// }

// type pickedEmployee = Pick<EmployeeType, 'name' | 'salary'>

// const pEmployee = {
//     name: 'Andy',
//     salary: 1000
// }

//--------------------------------------------- 

// type shopComment = {
//     id: string
//     content: string
// }

// type Product = {
//     id: string
//     title: string
//     description: string
//     price: number
//     comments?: shopComment[]
//     photo: string
// }

// const products: Product[] = [
//     { id: '1', title: 'OnePlus', description: 'Good phone', photo: 'url...', price: 10500 }
// ]

// type ProductInBoxType = Pick<Product, 'id' | 'title' | 'photo'>

// const { id, title, photo } = products[0];

// const selectedProduct: ProductInBoxType = { id, title, photo };\

//--------------------------------------------- never

// function error(message: string): never {
//     throw new Error(message)
// }

//--------------------------------------------- void

// function lofMessage(message: string): void{
//     console.log(message);
// }

// lofMessage('This message not log')

//--------------------------------------------- privet stativ protected

// class Employee {
//     id: number
//     name: string
//     private salary: number

//     static count: number = 0

//     constructor(name: string, salary: number) {
//         this.name = name
//         this.salary = salary
//         Employee.count++
//         this.id = Employee.count
//     }

//     changeSalary(newValue: number) {
//         console.log(`Salary has been changed: ${newValue}`)
//         this.salary = newValue
//     }

//     showSalary(){
//         console.log(this.salary)
//     }
// }

// const obj = new Employee('Engineer', 3500)
// obj.changeSalary(4000)

// class CustomEmployee extends Employee {
//     constructor(name: string, salary: number) {
//         super(name, salary)
//     }

//     showInfo(){
//         console.log(this.name)
//         this.showSalary()
//     }
// }

// const newObj = new CustomEmployee('Artis', 2500)
// newObj.showInfo()

// let myNumber: number = Employee.count

// console.log(++myNumber)

//--------------------------------------------- Abstract Class

// abstract class Animal {
//     abstract species: string

//     constructor(public name: string){}

//     abstract makeSound(): void

//     displayInfo(){
//         console.log(`This is a ${this.species}. And his name is ${this.name}.`)
//     }
// }

// class Dog extends Animal{
//     species = 'Dog'
//     constructor(name: string){
//         super(name)
//     }

//     makeSound(){
//         console.log('- "Bark-bark!"')
//     }

//     displayInfo(): void {
        
//     }
// }

// const myDog = new Dog('Rex')
// myDog.displayInfo()
// myDog.makeSound()
