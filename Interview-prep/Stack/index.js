let stack = []

// Stack Operations

// Insert in a Stack

let top = 0;

function pushStack(ele) {
    console.log(ele)

    stack[top++] = ele;
}
console.log("hello")
function displayElement() {
    console.log("Display ele", stack,top)
    for (let i = 0; i < top; i++) {
        console.log(stack[i])
    }
}

function popElement(){
    if( top === 0){
        console.log("Stack is empty")
        return;
    }

    const ele = stack[--top];
    stack.length = top;
    return ele;
}

pushStack(10)
pushStack(20)
pushStack(30)
displayElement()
console.log(popElement())
displayElement()