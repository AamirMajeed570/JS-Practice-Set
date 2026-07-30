let s = "cawt";
let t = "tasc";
let newS = s.split("").sort().join("");
let newT = t.split("").sort().join("");
function checkAnagram(s,t) {


    if(s.length !== t.length){
        return "Not Anagram"
    }

    // Sort the String
    console.log(s,t)
    if( s === t){
        return "Anagram"

    }

    return "Not Anagram"

}

console.log(checkAnagram(newS,newT))