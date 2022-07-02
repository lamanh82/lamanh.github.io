let linkedlist = {}
linkedlist.add = function(ele) {
    if (this.data) {
        let current = this;
        while (current.next) {
            current = current.next;
        }
        current.next = {data: ele, next: null};
    } else {
        this.data = ele;
        this.next = null;
    }
}
linkedlist.remove = function(ele) {
    let current = this;
    let previous = null;
    while (current) {
        if (current.data == ele) {
            if (previous) {
                previous.next = current.next;
            } else {
                this.data = current.next.data;
                this.next = current.next.next;
            }
        } else {
            previous = current;
        }
        current = current.next;
    }
}
linkedlist.print = function() {
    let current = this;
    let value = "LinkedList{";
    while(current.next) {
        value += current.data + ',';
    }
    value += current.data + '}';
    console.log(value);
}

linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //Expected Result: LinkedList{1,2,3};
linkedlist.remove(2);
linkedlist.print(); //Expected Result: LinkedList{1,3};