class Node {
    value: number;
    next: Node | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

// no1 -> no2 ->no3

class LinkedList {
    length: number = 0;
    head: Node | null;
    tail: Node | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value: number) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail!.next = newNode; // [1, 2, 3, 4, 5, 6]
        this.tail = newNode;
        this.length++;
    }

    size(): number {
        return this.length;
    }

    get(value: number): Node | null {
        let currentNode = this.head;

        while (currentNode && currentNode.value !== value) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }
}

function hash(value: number, size: number): number {
    return value % size;
}

function main() {
    let arr: LinkedList[] = [];
   
    for (let i = 0; i < 10; i++) {
        let list = new LinkedList();
        arr.push(list);
    }

    for (let i = 0; i < arr.length; i++) {

        const linkedList = arr[i];

        for (let i = 0; i < 1000; i++) {
        const value = Math.random() * 1000;
        linkedList!.append(value);
        }
    }

    const value = 23983434;
    
    const index = hash(value, arr.length);

    console.log(index);

    const linkedList = arr[index];

    console.log(linkedList);

    linkedList!.append(value);

    console.log(linkedList!.get(value));

    console.log(arr.length, arr[index]);

    const output = {
        1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        4: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        5: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        6: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        7: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        8: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        9: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        10: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    }

    console.log(output);
}

main();