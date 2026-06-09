console.log(100 + 80 + 75 + 70 + 80);

console.log(100000 - 80000);

console.log(32*64);

console.log(10/2);

let num = 3;
num++;
console.log(num);

let number = 0;
number--;
console.log(number);

const nameA = 8000;
const nameB = 12000;
if(nameA > nameB){
    console.log("A君の方が多い");
}   else{
    console.log("B君の方が多い");
};

const nameC = 3000;
if (nameA > nameB && nameA > nameC){
    console.log("A君が一番多い");
} else if (nameB > nameA && nameB > nameC){
    console.log("B君が一番多い");
} else if (nameC > nameB && nameC > nameA){
    console.log("C君が一番多い");
};

const newBtn = document.getElementById("btn");
newBtn.addEventListener("click",()=>{
    const score = Math.floor(Math.random() * 100) + 1;
    console.log(score)
    if(score === 100){
        alert("満点！");
    } else if (score >= 80){
        alert("合格です")
    } else if (score >= 30){
        alert("赤点です");
    } else {
        alert("不合格です");
    }
})

const newText = document.getElementById("text");
newText.addEventListener("blur",()=>{
    switch(newText.value){
        case "saitama":
            console.log("埼玉");
            break;
        case "tokyo":
            console.log("東京");
            break;
        case "kanagawa":
            console.log("神奈川");
            break;
        default:
            console.log("未確認");
    }
})

const randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);

const maxNum = Math.max(1,4,6);
console.log(maxNum);

const minNum = Math.min(1,4,6);
console.log(minNum);

for(let i = 1; i <= 10; i++){
    console.log("実行");
}

const fruits = ["apple", "banana", "cat"]
for(const fruit of fruits){
    console.log(fruit);
}

const addNum = [1, 2, 3];
let total = 0;
for(let i = 0; i < addNum.length; i++){
    total += addNum[i];
}
console.log(total);

const numberStringArray = [1, 'hoge', 2, 'huga', 3, 'piyo']
const stringArray = [];
const numberArray = [];
for (const item of numberStringArray) {
    if (typeof item === "string") stringArray.push(item);
    if (typeof item === "number") numberArray.push(item);
}
console.log(stringArray);
console.log(numberArray);

let sum = 0;
for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        continue;
    }
    sum += i ;
}
console.log(sum);

const object = ["apple", "banana", "cat"];
object.forEach((B)=> {
    console.log(B);
});

let i = 0;
while(i < 10){
    console.log("実行");
    i++;
}

// 特定の場所で止めたい時にfor
const food = ["りんご", "バナナ", "スイカ", "メロン"];

for (let i = 0; i < food.length; i++) {
    if (food[i] === "スイカ") {
    console.log("スイカを見つけたので終了");
    break;
    }
    console.log(food[i]);
}

// 数行でかける
const name = ["安田","山田","山川"]
name.forEach((userName)=>{
    console.log(`${userName}さんにメールを送信しました`);
})

// いつ終わるか決まってない
let seaving = 0;
let goal = 500;
while(seaving < goal){
    let deposit = 100;
    seaving += deposit;
    console.log(`現在の貯金額:${seaving}円`);
}

const numbers = [2,4,6,8];
const doubled = numbers.map(numbersNum => {
     return numbersNum * 2;
});
console.log(doubled);

const haNumberThanTree = numbers.some(num => 3 > num);
console.log(haNumberThanTree);

const everyArray = [
    { id: 2, hasSubmitted: true },
    { id: 3, hasSubmitted: false },
    { id: 4, hasSubmitted: true },
];
const judge = everyArray.every(everyObj => everyObj.hasSubmitted === true);
console.log(judge);

const idArray = [
    { id: 2, hasSubmitted: true },
    { id: 3, hasSubmitted: false },
    { id: 4, hasSubmitted: true },
];
const newArray = idArray.filter(filterObj => filterObj.hasSubmitted === true);
console.log(newArray);

const sortArray = [
    { id: 323, hasSubmitted: true },
    { id: 111, hasSubmitted: false },
    { id: 268, hasSubmitted: true },
];
const resultArray = sortArray.sort((a,b) => a.id - b.id);
console.log(resultArray);