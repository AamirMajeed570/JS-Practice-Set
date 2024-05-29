// Currying : It is a method in JS that takes one argument and expects a second argument
// f(a,b) -- f(a)(b)
function f(a){
    return function (b){
        return `${a} ${b}`
    }
}
console.log(f(3)(5))
// g(a,b,c) -- g(a)(b)(c)
function g(a){
    return function (b){
        return function(c){
            return `${a} ${b} ${c}`
        }
    }
}

// console.log(g(1)(2)(3))

function sum(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

console.log(sum(3)(4)(5))

function mul(a){
    return function(b){
        return function(c){
            return function(d){
                return function(e){
                    return a * b * c * d * e;
                }
            }
        }
    }
}
console.log(mul(2)(3)(4)(5)(6))