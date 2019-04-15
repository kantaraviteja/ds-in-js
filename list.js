function createNewNode(value) {
    return {
        value,
        next: null
    };
}

function insertNewNode(head, value) {
    if (!head) {
        return null;
    }
    else if (head.next) {
        insertNewNode(head.next, value);
    } 
    else {
        head.next = createNewNode(value);
    }
    return;
}

function printList(head) {
    if (head) {
        console.log(head.value);
        printList(head.next);
    }
    return;
}
function main() {
    let head = createNewNode(2);
    insertNewNode(head, 3);
    insertNewNode(head, 4);
    printList(head);
}
main();