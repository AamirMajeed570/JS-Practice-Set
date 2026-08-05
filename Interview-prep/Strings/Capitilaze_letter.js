let sentence = "my name is khan";

function capitalizeWords(sentence){

    let words = []
    let word = ""

    for(let ch of sentence){
        if( ch !== " "){
            word += ch;
            word = word.at(0).toUpperCase() + word.slice(1)
            console.log("Word ===",word)
        } else if(word.length > 0){
            words.push(word);
            word = "";
        }

    }
        if(word.length > 0){
            words.push(word)
        }
    return words.join(" ");
}

console.log(capitalizeWords(sentence))