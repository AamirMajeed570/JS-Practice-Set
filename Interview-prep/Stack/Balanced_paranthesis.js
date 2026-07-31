const s = "()[{}()]";



function validParanthesis(s) {
    let stack = []

    for (const ch of s) {
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } else if( ch === ')' || ch === '}' || ch === ']') {
            if (stack.length === 0) {
                return false;
            }

            const top = stack[stack.length - 1];
            console.log(top)
            if ((ch === ')' && top !== '(') || (ch === ']' && top !== '[') || (ch === '}' && top !== '{')) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length;
}

const res = validParanthesis(s);
if (res === 0) {
    console.log("Valid Paranthesis")
} else {
    console.log("Not Valid Paranthesis")
}