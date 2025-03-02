let TASK: number = 2

switch (TASK) {

    case 1:

        function sumArray(arr: number[]): number {
            return arr.reduce((accumulator: number, currentValue: number): number =>
                accumulator + currentValue, 0
            );
        }

        console.log(sumArray([1, 2, 3, 4])) // Должно вывести 10
        console.log(sumArray([])) // Должно вывести 0

        break

    case 2:

        type userType = { name: string, age: number, isActive: boolean }

        function createUser(name: string, age: number, isActive: boolean = true): userType {
            return {
                name,
                age,
                isActive
            }
        }

        const newUser = createUser('Анна', 25, true)
        console.log(newUser)

        const newUser2 = createUser('David', 14)
        console.log(newUser2)

        break

}



