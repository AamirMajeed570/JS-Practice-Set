// Stack implementation using array
// class myStack {
//     constructor(cap){
//         this.arr = new Array(cap);
//         this.capacity = cap;
//         this.top = -1;
//     }

//     push(value){
//         if(this.top === this.capacity -1){
//             console.log("Stack Overflow");
//             return;
//         }
//         this.arr[++this.top] = value;
//     }

//     pop(){
//         if(this.top === -1){
//             console.log("Stack Underflow");
//             return;
//         }
//         return this.arr[this.top--];
//     }

//     peek(){
//         if(this.top === -1){
//             console.log("Stack is empty");
//             return;
//         }
//         return this.arr[this.top];
//     }

//     isEmpty(){
//         if(this.top === -1){
//             console.log("Stack is empty");
//             return true;
//         }
//     }
// }

// myStack.prototype.print = function(){
//     if(this.top === -1){
//         console.log("Stack is empty");
//         return;
//     }
//     for(let i = this.top; i >=0; i--){
//         console.log(this.arr[i])
//     }
// }

// let st = new myStack(5);
// st.push(10);
// st.push(20);
// st.push(30);
// st.print();

// Implement two Stacks in an array
class TwoStacks {

    constructor(cap) {
        this.arr = new Array(cap);
        this.size = cap;
        this.top1 = -1;
        this.top2 = cap;
    }

    push1(value){
        if(this.top1 +1 === this.top2){
            console.log("Stack Overflow");
            return;
        } 
        this.arr[++this.top1] = value; 
    }

    push2(value){
        if(this.top1 +1 === this.top2){
            console.log("Stack Overflow");
            return;
        } 
        this.arr[--this.top2] = value;
    }

    pop1(){
        if(this.top1 === -1){
            console.log("Stack Underflow");
            return;
        }

        return this.arr[this.top1--];
    }

    pop2(){
        if(this.top2 === this.size){
            console.log("Stack Underflow");
            return;
        }

        return this.arr[this.top2++];
    }

    peek1(){
        if(this.top1 === -1){
            console.log("Stack 1 is empty");
            return;
        }
        return this.arr[this.top1];
    }

    peek2(){
        if(this.top2 === this.size){
            console.log("Stack 2 is empty");
            return;
        }
        return this.arr[this.top2]
    }

}

TwoStacks.prototype.print1 = function(){
    console.log("Print the elements of Stack1\n")
    if(this.top1 === -1){
        console.log("Stack 1 is empty\n");
        return;
    }
    for(let i = this.top1;i >=0; i--){
        console.log(this.arr[i]);
    }
}

TwoStacks.prototype.print2 = function(){
    console.log("Print the elements of Stack2")
    if(this.top2 === this.size){
        console.log("Stack 2 is empty");
    }

    for(let i = this.size-1; i >=this.top2; i--){
        console.log(this.arr[i]);
    }
}

let ts = new TwoStacks(6);
ts.push1(10);
ts.push1(20);
ts.print1()
ts.push2(0.5)
ts.push2(1.5);
ts.push2(12.5);
ts.pop2();
ts.print2();