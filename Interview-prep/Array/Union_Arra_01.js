let arr1 = [1,2,3,4,5]
let arr2 = [4,5,6,7,8]
let st = new Set();
let st2 = new Set([...arr1,...arr2])
for(let i = 0;i<arr1.length;i++){
    st.add(arr1[i])
    st.add(arr2[i])
}

console.log(Array.from(st))
console.log(Array.from(st2))