const trie = require("./trie");

(function(){
    let words = ["apple","deal","dear","cat"];

    let dictionary = new trie(words); // builds a trie

    console.log(dictionary.getAllWords()); // returns [ 'apple', 'deal', 'dear', 'cat' ]

    console.log(dictionary.getWordsWithPrefix("dea")); // [ 'deal', 'dear' ]

}())