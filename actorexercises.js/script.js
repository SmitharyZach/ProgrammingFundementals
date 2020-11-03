function findElement(n, yourArray){
    console.log(yourArray[n])
}

function removeLastElement(yourArray){
    lastElement = yourArray.pop()
    console.log(lastElement)
}

function randomElement(yourArray){
    min = 0
    max = Math.floor(yourArray.length)
    n = Math.floor(Math.random() * (max - min) + min)
    console.log(yourArray[n])
}

function addElement(element, yourArray){
    yourArray.push(element)
    console.log(yourArray)
}

testArray = [1,2,3,4,5]

// removeLastElement(testArray)
// findElement(0, testArray)
// randomElement(testArray)
// addElement(45, testArray)

// for(let counter = 0; counter <= 20; counter++){
//     if (counter % 2 === 0) {
//         console.log(`${counter} is even`)
//     } else {
//         console.log(`${counter} is odd`)
//     }
// }

// let callBack = 9
// for (counter = 1; counter <=10; counter++){
//     console.log((counter * 9))
//     callBack =+ callBack * counter
// }

// console.log(callBack, 'callback')

// let n = 10;
// while (n>0){
//     console.log(n)
//     n--
// }

problemArray = [['Lion', 'Deer', 'Sheep'],['Cub', 'Fawn', 'Lamb']]

for(let i = 0; i < problemArray.length; i++){
    console.log(problemArray[i])
}

for(let i = 0; i < problemArray.length; i++){
    for(let j = 0; n < problemArray[j].length; j++){
        console.log(problemArray[i][j])
    }
}