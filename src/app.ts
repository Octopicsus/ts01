let TASK: number = 3

switch (TASK) {

    case 1:

        function sumArray(arr: number[]): number {
            return arr.reduce((accumulator: number, currentValue: number): number =>
                accumulator + currentValue, 0
            );
        }

        console.log(sumArray([1, 2, 3, 4])) //   10
        console.log(sumArray([])) //             0

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

    case 3:

        enum OrderStatus {
            PENDING = 'Order awaiting processing',
            SHIPPED = 'The order has been sent',
            DELIVERED = 'The order has been delivered',
            CANCELLED = 'Order cancelled',

            UNKNOWN = 'Error: Unknown order status'
        }

        function getOrderStatus(state: OrderStatus | string): string {

            switch (state) {

                case OrderStatus.PENDING:
                    return OrderStatus.PENDING

                case OrderStatus.SHIPPED:
                    return OrderStatus.SHIPPED

                case OrderStatus.DELIVERED:
                    return OrderStatus.DELIVERED

                case OrderStatus.CANCELLED:
                    return OrderStatus.CANCELLED

                default:
                    return OrderStatus.UNKNOWN
            }
        }



        console.log(getOrderStatus(OrderStatus.PENDING))
        console.log(getOrderStatus(OrderStatus.SHIPPED))
        console.log(getOrderStatus(OrderStatus.DELIVERED))
        console.log(getOrderStatus(OrderStatus.CANCELLED))

        console.log(getOrderStatus('Something going wrong'))
        
        break
}



