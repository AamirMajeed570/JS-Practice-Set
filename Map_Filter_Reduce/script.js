const nums = [1,2,3,4];

// const multiply = nums.map((data)=>{
//     return data*5;
// })
// PloyFill for map
Array.prototype.myMap= function(cb){
    let temp = []
    for(let i=0;i<this.length;i++)
        {
            temp.push(cb(this[i],i,this));
        }
        return temp;
}

const multiply = nums.myMap((num,i,arr)=>{
    return num*3;
})

// console.log(multiply)

const sum = nums.reduce((acc,curr)=>{
    return acc+curr;
},2)

// console.log(sum);

let students = [
    {name:"Piyush",rollNumber:31,marks:80},
    {name:"Jenny",rollNumber:23,marks:69},
    {name:"Kaushal",rollNumber:13,marks:35},
    {name:"Dilpreet",rollNumber:19,marks:30}
]

// let result = students.map((obj)=>{
//     return obj.name.toUpperCase();
// })

// let result = students.filter((stu)=> stu.marks>60)

// let result = students.filter((stu)=>{
//     return [stu.name ,stu.rollNumber, stu.marks]
// }).filter((data)=>{ 
//     return data.marks>60
// })

// console.log(result);

const res = students.filter((stu)=>{
   return stu.marks > 60
}).map((data)=>{
    return data.name.toUpperCase();
})

console.log(res);