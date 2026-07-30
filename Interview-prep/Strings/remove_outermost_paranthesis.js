let str = "((()))";
console.log("String ===",str)

function removeOuterMost(str){
    let level = 0;
    let result = "";
    for(let char of str){
        if(char === '('){
            if(level > 0){
                result += char;
            }
            level += 1;
        }else if(char === ')'){
            level--;
            if(level > 0){
                result += char;
            }
        }
    }

    return result;

}

console.log(removeOuterMost(str))