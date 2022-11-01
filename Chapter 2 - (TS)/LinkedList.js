"use strict";
class NodeTS {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.current = null;
    }
    ;
    addNode(value) {
        this.current = this;
        if (this.current.next == null) {
            this.next = new NodeTS(value);
        }
        else {
            while (this.current.next) {
                this.current = this.current.next;
            }
            this.current.next = new NodeTS(value);
        }
    }
}
const range = Math.floor((Math.random() * 100));
let LinkedListTS = new NodeTS(range);
for (let i = 0; i < range; i++) {
    const randomNum = Math.floor((Math.random() * 100));
    LinkedListTS.addNode(randomNum);
}
let current = LinkedListTS;
while (current) {
    console.log(current.value);
    current = current.next;
}
