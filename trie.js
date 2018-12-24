class trieNode {
    /**
     * 
     * @param {Array} words
     * Returns a trie built with strings in 'words'
     */
    constructor(words) {
        if (words) {
            let root;
            words.forEach((word) => {
                let curr = root;
                [...word].forEach((c) => {
                    if (!root) {
                        root = new trieNode();
                        root.setChild(c);
                        curr = root;
                    }
                    else {
                        if (!curr.hasChild(c)) {
                            curr.setChild(c);
                        }
                    }
                    curr = curr.children[c];
                });
            });
            return root;
        }
        else {
            this.children = {};
        }
    }

    setChild(e) {
        if (!this.children[e]) {
            this.children[e] = new trieNode();
        }
    }

    hasChild(e) {
        return (this.children[e]) ? true: false;
    }
    /**
     * 
     * @param {trieNode} node
     * @param {string} str 
     * @param {Array} res
     * 
     * Returns all the words formed by children of a node
     */
    getAllWords(node, str, res) {
        node = node || this;
        str = str || "";
        res = res || [];
        
        if (Object.keys(node.children).length === 0) {
            res.push(str);
        }
    
        Object.keys(node.children).forEach((key) => {
            this.getAllWords(node.children[key], str + key, res);
        });
        
        return res;
    }
    /**
     * 
     * @param {string} str 
     * Returns all strings in trie with prefix 'str'
     */
    getWordsWithPrefix(str) {

        let trie = this;
        let curr = trie;

        [...str].forEach((c) => {
            if (curr.hasChild(c)) {
                curr = curr.children[c];
            }
        });
    
        return this.getAllWords(curr).map(e => str + e);
    }

}

module.exports = trieNode;