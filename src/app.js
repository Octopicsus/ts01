"use strict";
let TASK = 2;
switch (TASK) {
    case 1:
        function sumArray(arr) {
            return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        }
        console.log(sumArray([1, 2, 3, 4]));
        console.log(sumArray([]));
        break;
    case 2:
        function createUser(name, age, isActive = true) {
            return {
                name,
                age,
                isActive
            };
        }
        const newUser = createUser('Анна', 25, true);
        console.log(newUser);
        const newUser2 = createUser('David', 14);
        console.log(newUser2);
        break;
}
