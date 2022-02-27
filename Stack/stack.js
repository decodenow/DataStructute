class Stack {
    constructor() {
        this.items = []
        this.size = -1
    }

    push(x) { this.items[++this.size] = x }

    pop() { return this.items[this.size--] }

    top() { 
        if (this.size < 0) return "Stack is empty"
        return this.items[this.size] 
    }
}

const stack = new Stack()
stack.push(1)
stack.push(5)
stack.push(7)

console.log("\n" + "Before pop")
console.log("el--->", stack.top() + "\n")

stack.pop()
stack.pop()
stack.pop()

console.log("After pop")
console.log("el--->", stack.top() + "\n")
