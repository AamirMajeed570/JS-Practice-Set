let s = "raaaajj";

let obj = {}

for(let char of s){
    const ele = s[char];

    if(obj[char]){
        obj[char] += 1;
    }else{
        obj[char] = 1;
    }
}

console.log(obj)
const keys = Object.keys(obj)

console.log(keys.sort())