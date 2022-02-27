class Queue {
    constructor() {
        this.items = []
        this.front = 0
        this.rear = 0
    }

    enqueue(x) { this.items[this.rear++] = x }

    dequeue() { return this.items[this.front++] }

    printQueue() {
        if (this.front >= this.rear) 
            console.log("Queue is empty")
        let a = this.front
        while (a < this.rear) 
            console.log(this.items[a++])
    }
}
const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log("\nPrint queue:-")
queue.printQueue()
queue.enqueue(4)
console.log("\nPrint after enqueue:-")
queue.printQueue()
queue.dequeue()
console.log("\nPrint after dequeue:-")
queue.printQueue()
console.log("\n")
