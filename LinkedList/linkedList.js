class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    addNodeAtTail(value) {
        const node = new ListNode(value)

        if (!this.head) {
            this.size++
            return this.head = node
        }

        let current = this.head

        while(current.next) {
            current = current.next
        }

        current.next = node
        this.size++

        return this.head
    }

    addNodeAtHead(value) {
        const node = new ListNode(value)

        if (!this.head) {
            this.size++
            return this.head = node
        }

        node.next = this.head
        this.size++
        return this.head = node
    }

    addNodeAt(index, value) {
        let count = 0
        let previous = this.head
        let current = this.head

        if (index == 0) return this.addNodeAtHead(value)
        else if (index == this.size) return this.addNode(value)
        else if (index > this.size) return

        while(count < index) {
            if (count < index - 1) previous = previous.next
            current = current.next
            count++
        }

        const node = new ListNode(value)
        node.next = current
        previous.next = node
        this.size++

        return this.head
    }

    removeNodeFromTail() {
        let current = this.head
        let previous

        while (current.next) {
            previous = current
            current = current.next
        }

        previous.next = null
        this.size--

        return this.head
    }

    removeNodeFromHead() {
        this.size--
        return this.head = this.head.next
    }

    removeNodeAt(index) {
        let current = this.head
        let previous
        let count = 0

        if (index == 0) return this.removeNodeFromHead()
        else if (index == this.size - 1) return this.removeNodeFromTail()
        else if (index > this.size - 1) return

        while (count < index) {
            previous = current
            current = current.next
            count++
        }

        previous.next = current.next
        this.size--

        return this.head
    }

    printList() {
        let current = this.head

        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
}

let ll = new LinkedList()
ll.addNodeAtTail(3)
ll.addNodeAtTail(7)
ll.addNodeAtTail(5)
ll.addNodeAtTail(1)
ll.removeNodeAt(3)

ll.printList()
