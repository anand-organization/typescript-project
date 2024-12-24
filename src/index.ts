function greet(name: string): string {
    return `Hello, ${name}! Welcome to my TypeScript project.`;
}

console.log(greet("Anand"));

enum Status {
    Active,
    Inactive,
    Suspended,
}

interface User {
    id: number
    name: string
    email: string
    status: Status
}

class UserManager {
    private users: User[] = []

    addUser(user: User): void {
        this.users.push(user)
    }

    removeUser(id: number): boolean {
        const index = this.users.findIndex((user) => user.id === id)
        if (index !== -1) {
            this.users.splice(index, 1)
            return true
        }
        return false
    }

    listUsers(): User[] {
        return [...this.users]
    }

    findUserByEmail(email: string): User | undefined {
        return this.users.find((user) => user.email === email)
    }
}

class MathUtils {
    static add(a: number, b: number): number {
        return a + b
    }

    static subtract(a: number, b: number): number {
        return a - b
    }

    static multiply(a: number, b: number): number {
        return a * b
    }

    static divide(a: number, b: number): number {
        if (b === 0) throw new Error('Division by zero')
        return a / b
    }
}

function generateRandomNumbers(count: number): number[] {
    const numbers: number[] = []
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * 100))
    }
    return numbers
}

function calculateAverage(numbers: number[]): number {
    const sum = numbers.reduce((acc, num) => acc + num, 0)
    return sum / numbers.length
}

const userManager = new UserManager()

userManager.addUser({ id: 1, name: 'Alice', email: 'alice@example.com', status: Status.Active })
userManager.addUser({ id: 2, name: 'Bob', email: 'bob@example.com', status: Status.Suspended })
userManager.addUser({ id: 3, name: 'Charlie', email: 'charlie@example.com', status: Status.Inactive })

const allUsers = userManager.listUsers()

const bob = userManager.findUserByEmail('bob@example.com')

const randomNumbers = generateRandomNumbers(10)

const average = calculateAverage(randomNumbers)

const result1 = MathUtils.add(10, 20)
const result2 = MathUtils.subtract(50, 15)
const result3 = MathUtils.multiply(5, 6)
const result4 = MathUtils.divide(100, 4)

class Product {
    constructor(public id: number, public name: string, public price: number) {}
}

class Cart {
    private items: Product[] = []

    addProduct(product: Product): void {
        this.items.push(product)
    }

    removeProduct(productId: number): boolean {
        const index = this.items.findIndex((item) => item.id === productId)
        if (index !== -1) {
            this.items.splice(index, 1)
            return true
        }
        return false
    }

    calculateTotal(): number {
        return this.items.reduce((acc, item) => acc + item.price, 0)
    }
}

const cart = new Cart()

cart.addProduct(new Product(1, 'Laptop', 1200))
cart.addProduct(new Product(2, 'Phone', 800))
cart.addProduct(new Product(3, 'Headphones', 150))

cart.removeProduct(2)

const cartTotal = cart.calculateTotal()

function filterProductsByPrice(products: Product[], threshold: number): Product[] {
    return products.filter((product) => product.price < threshold)
}

const cheapProducts = filterProductsByPrice(cart['items'], 1000)

function mapProductsToNames(products: Product[]): string[] {
    return products.map((product) => product.name)
}

const productNames = mapProductsToNames(cart['items'])

function logDetails(): void {
    console.log('All Users:', allUsers)
    console.log('Bob:', bob)
    console.log('Random Numbers:', randomNumbers)
    console.log('Average:', average)
    console.log('Math Results:', result1, result2, result3, result4)
    console.log('Cart Total:', cartTotal)
    console.log('Cheap Products:', cheapProducts)
    console.log('Product Names:', productNames)
}

logDetails()

