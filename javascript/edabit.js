

function detectWord(str) {
    strArray = str.split()
    console.log(strArray)
	hiddenWordArray = []
	
	for(let i = 0; i < strArray.length; i++) {
		if (strArray[i] === strArray[i].toLowerCase()) {
			hiddenWordArray.push(strArray[i])
		}
	}
	
	hiddenWord = hiddenWordArray.join('')
	console.log(hiddenWord) 
}


let hand = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
  ]

  console.log(hand.length )