let number = "5347";

function findLargestOddNumber(number) {
    for (let i = number.length - 1; i >= 0; i--) {
        if (Number(number[i]) % 2 !== 0) {
            return number.slice(0, i + 1);
        }
    }
    return "";
}

console.log(findLargestOddNumber(number));