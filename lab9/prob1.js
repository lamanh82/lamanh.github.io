class LinkedList {
    constructor(arr) {
        if (arr) {
            arr.foreach(val => this.add(val));
        }
    }
    add(value) {
        if (this.list == undefined) {
            this.list = value;
            this.next = null; 
        } else {
            let current = this;
            while (current.next) {
                current = current.next;
            }
            current.next = {list: value, next: null};
        }
    }
    remove(value) {
        let current = this;
        let previous = null;
        while (current) {
            if (current.list == value) {
                if (previous) {
                    previous.next = current.next;
                } else {
                    this.list = current.next.list;
                    this.next = current.next.next;
                }
            } else {
                previous = current;
            }
            current = current.next;
        }
}
    print() {
        let current = this;
        let output = "LinkedList{";
        //let commas = "";
        while (current.next) {
            output += current.list + ",";
            current = current.next;
        }
        output += current.list + "}";
        console.log(output);
    }
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.print();
list.remove(3);
list.print();
list.add(3);
list.add(4);
list.add(3);
list.remove(3);
list.remove(1);
list.print();