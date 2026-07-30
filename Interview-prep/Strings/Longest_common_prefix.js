let str = ["flower", "flow", "flight"]

function LongestCommonPrefix(str){
    str.sort();

    let first = str[0];
    let last = str[str.length-1];
    let minLength = Math.min(first.length,last.length)
    let i = 0;

    while(i < minLength && first[i] === last[i]){
        i++;
    }

    return first.substring(0,i)
}

console.log(LongestCommonPrefix(str))