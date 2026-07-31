let s = "rotation";
let goal = "tionrota";

function checkRotation(s,goal){
    if(s.length !== goal.length){
        return false;
    }

    for(let i = 0;i<s.length;i++){
        let rotated = s.substring(i) + s.substring(0,i);

        if(rotated === goal){
            return true;
        }
    }

    return false;
}


console.log(checkRotation(s,goal))