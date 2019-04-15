function createNewNode(value) {
    return {
        value,
        next: null
    };
}

function appendNode(head, value) {
    if (!head) {
        return createNewNode(value);
    } else {
        head.next = appendNode(head.next, value);
        return head;
    }
}
function printList(head) {
    if (head) {
        console.log(head.value);
        printList(head.next);
    }
    return;
}

function deleteNode(head, value) {
    if (!head) {
        return null;
    } else if (head.value === value){
        return head.next;
    } else if(head.next && head.next.value === value){
        head.next = head.next.next;
        return head
    } else {
        head.next = deleteNode(head.next, value);
        return head;
    }
}

function insertNodeAtIndex(head, value, index) {
    if (!head) {
        return createNewNode(value);
    } else if (index === 0) {
        let tempNode = createNewNode(value);
        tempNode.next = head
        return tempNode;
    } else if (index === 1) {
        let tempNode = createNewNode(value);
        tempNode.next = head.next;
        head.next = tempNode;
        return head;
    } else {
        head.next = insertNodeAtIndex(head.next, value, index-1);
        return head;
    }
}

module.exports = {
    appendNode,
    createNewNode,
    printList,
    insertNodeAtIndex,
    deleteNode
}

function main() {
    let head = createNewNode(1);
    head = appendNode(head, 2)
    head = appendNode(head, 3);

    // head = deleteNode(head, 4);
    head = insertNodeAtIndex(head, 4, 3);
    // deleteNode(head, 2);
    printList(head);
}
main();