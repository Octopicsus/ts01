"use strict";
let TASK = 3;
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
    case 3:
        let OrderStatus;
        (function (OrderStatus) {
            OrderStatus["PENDING"] = "\n Order awaiting processing ... \n ";
            OrderStatus["SHIPPED"] = "\n The order has been sent ... \n ";
            OrderStatus["DELIVERED"] = "\n The order has been delivered ... \n ";
            OrderStatus["CANCELLED"] = "\n Order cancelled ... \n ";
            OrderStatus["UNKNOWN"] = "\n Error: Unknown order status!";
        })(OrderStatus || (OrderStatus = {}));
        function getOrderStatus(state) {
            switch (state) {
                case OrderStatus.PENDING:
                    return OrderStatus.PENDING;
                case OrderStatus.SHIPPED:
                    return OrderStatus.SHIPPED;
                case OrderStatus.DELIVERED:
                    return OrderStatus.DELIVERED;
                case OrderStatus.CANCELLED:
                    return OrderStatus.CANCELLED;
                default:
                    return OrderStatus.UNKNOWN;
            }
        }
        console.log(getOrderStatus(OrderStatus.PENDING));
        console.log(getOrderStatus(OrderStatus.SHIPPED));
        console.log(getOrderStatus(OrderStatus.DELIVERED));
        console.log(getOrderStatus(OrderStatus.CANCELLED));
        console.log(getOrderStatus('Something going wrong'));
        break;
}
