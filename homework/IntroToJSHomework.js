function hello(name){
    if (!name) {console.log("Hellow world")} else { console.log(name)}
}

hello("zach")
hello()

function madlib(name, subject) {
    console.log(`${name}'s favorite subject in school is ${subject}`)
}

madlib("Becca", "math")

function tipAmount(amount, serviceLevel){
    if (serviceLevel === "bad") {
        multiplier = .1
        console.log(amount * multiplier)
    } else if (serviceLevel === "fair") {
        multiplier = .15
        console.log(amount * multiplier)
    } else {
        multiplier = .2
        console.log(amount * multiplier)
    }
}

tipAmount(100, 'good')
tipAmount(40, 'fair')
tipAmount(100, 'bad')


function totalAmount(amount, serviceLevel){
    if (serviceLevel === "bad") {
        multiplier = .1
        console.log((amount * multiplier) + amount)
    } else if (serviceLevel === "fair") {
        multiplier = .15
        console.log((amount * multiplier) + amount)
    } else {
        multiplier = .2
        console.log((amount * multiplier) + amount)
    }
}

totalAmount(100, 'good')
totalAmount(40, 'fair')
totalAmount(100, 'bad')

function splitAMount(amount, serviceLevel, partySize){
    if (serviceLevel === "bad") {
        multiplier = .1
        console.log(((amount * multiplier) + amount) / partySize)
    } else if (serviceLevel === "fair") {
        multiplier = .15
        console.log(((amount * multiplier) + amount) / partySize)
    } else {
        multiplier = .2
        console.log(((amount * multiplier) + amount) / partySize)
    }
}

splitAMount(100, 'good', 5)
splitAMount(40, 'fair', 2)
splitAMount(100, 'bad', 3)