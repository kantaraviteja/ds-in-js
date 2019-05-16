# ds-in-js
## Only trie is exposed in the library for now.

### Sample usage
> const trie = require("common_ds");

    let words = ["apple","deal","dear","cat"];
    ```
    let dictionary = new trie(words); // builds a trie

    let allWords = dictionary.getAllWords(); // returns [ 'apple', 'deal', 'dear', 'cat' ]

    let allWordsWithPrefix = dictionary.getWordsWithPrefix("dea"); // [ 'deal', 'dear' ]
    // Can be used to implement an auto complete feature
    ```
