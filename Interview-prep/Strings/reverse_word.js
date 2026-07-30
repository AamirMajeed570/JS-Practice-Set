let sentence = "welcome to the jungle";

function reverseWords(sentence){
    let words = []
    let word = ""
    for(let ch of sentence){
        if(ch !== " "){
            word += ch;
        }
        // if space
        else if(word.length > 0){
            words.push(word);
            word = "";
        }
    }
    if(word.length > 0){
        words.push(word)
    }

    words.reverse();

    return words.join(" ");
}

console.log(reverseWords(sentence))