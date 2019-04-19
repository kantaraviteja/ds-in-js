function queue(){
    let head = null, tail = null;
    function createNode(item){
        return {
            value: item,
            next: null
        }
    }
    function add(item){
        let tempNode = createNode(item);
        if (!head) {
            tail = tempNode;
            head = tempNode;
        } else {
            tail.next = tempNode;
            tail = tail.next;
        }
    }
    function remove(){
        if (!head) {
            throw new Error("Queue Empty. Can't perform remove.");
        } else {
            head = head.next;
        }
    }
    function print(){
        for(let t=head; t!=null; t=t.next){
            console.log(t.value);
        }
    }
    return {
        add,
        remove,
        print
    }
}

let q = queue();
q.add(2);
q.remove();
q.add(3);
q.remove();
q.add(4);
q.add(5);
q.remove();
q.print();