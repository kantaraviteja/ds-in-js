function stack(limit=10){
    let top = -1;
    let items = [];

    function push(item){
        if (top+1 === limit) {
            throw new Error("Cannot Push! Stack Overflow!");
        } else {
            top++;
            items[top] = item;
        }
    }
    function pop(){
        if(isEmpty()){
            throw new Error("Stack is Empty! Can't pop!");
        }
        let removedItem = items[top];
        top--;
        return removedItem;
    }
    function print() {
        for(let index=0; index<=top; index++) {
            console.log(items[index]);
        }
    }
    function isEmpty(){
        return top<0;
    }
    function peek(){
        return isEmpty() ? null: items[top];
    }
    return {
        push,
        print,
        pop,
        isEmpty,
        peek
    }
}

// tests
// let st = stack();
// st.push(5);
// // st.push(2);
// st.pop();
// st.push(3);
// st.push(4);
// st.pop();
// st.pop();
// console.log(st.peek());
// st.print();