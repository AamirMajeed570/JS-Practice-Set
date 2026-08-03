let str = "madam"
let i,j;
let flag = true;
for(i = 0,j=str.length-1;i<str.length;i++,j--){
    console.log(str[i],str[j])
    if(str[i] !== str[j]){
        flag = false;
    }
}

console.log(flag ? "Palindrome" : "Not Palindrome")