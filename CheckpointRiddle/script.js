const puzzleInput = "0,[5, 14, 9, 7];\
					 1,[15, 14, 2, 13]; 2,[7, 16, 5, 0]; 3,[14, 5, 0, 6];\
					4,[10, 18, 9, 12]; 5,[16, 9, 7, 20]; 6,[9, 18, 18, 14]; 7,[0, 14, 7, 19];\
					8,[15, 1, 16, 7]; 9,[17, 19, 3, 10]; 10,[7, 12, 2, 19]; 11,[7, 0, 14, 2];\
					12,[7, 18, 8, 9]; 13,[0, 5, 17, 20]; 14,[20, 3, 0, 0]; 15,[14, 16, 3, 18];\
					16,[5, 9, 5, 7]; 17,[19, 1, 0, 3]; 18,[9, 11, 0, 5]; 19,[12, 1, 12, 18];\
					20,[7, 14, 1, 6]; 21,[20, 15, 20, 8]; 22,[14, 14, 5, 9]; 23,[4, 5, 13, 0];\
					24,[12, 15, 14, 14]; 25,[9, 5, 20, 17]; 26,[14, 12, 13, 17]; 27,[15, 0, 19,\
					19]; 28,[12, 0, 3, 7]; 29,[1, 14, 18, 12]; 30,[4, 17, 7, 18]; 31,[2, 18, 5,\
					1]; 32,[8, 11, 0, 4]; 33,[16, 4, 8, 5]; 34,[19, 9, 11, 0]; 35,[19, 0, 0,\
					11]; 36,[17, 4, 0, 8]; 37,[17, 18, 18, 7]; 38,[2, 17, 1, 12]; 39,[14, 7,\
					10, 6]; 40,[9, 10, 18, 20]; 41,[17, 20, 9, 3]; 42,[5, 0, 18, 19]; 43,[18,\
					14, 7, 20]; 44,[9, 12, 16, 9]; 45,[6, 6, 9, 0]; 46,[12, 17, 17, 10]; 47,[6,\
					3, 13, 10]; 48,[9, 2, 8, 17]; 49,[18, 9, 0, 11]; 50,[4, 19, 4, 8]; 51,[0,\
					1, 3, 4]; 52,[0, 7, 11, 6]; 53,[7, 20, 8, 4]; 54,[12, 5, 1, 5]; 55,[16, 7,\
					20, 5]; 56,[20, 7, 6, 0]; 57,[6, 13, 10, 6]; 58,[9, 18, 16, 18]; 59,[13, 2,\
					8, 0]; 60,[3, 7, 7, 4]; 61,[19, 19, 1, 2]; 62,[7, 2, 12, 20]; 63,[4, 5, 7,\
					14]; 64,[12, 5, 16, 12]; 65,[7, 3, 0, 12]; 66,[20, 14, 10, 5]; 67,[12, 0,\
					1, 13]; 68,[12, 8, 9, 2]; 69,[8, 17, 5, 9]; 70,[17, 8, 16, 1]; 71,[20, 9,\
					12, 5]; 72,[5, 2, 19, 3]; 73,[9, 0, 0, 15]; 74,[14, 0, 10, 5]; 75,[20, 2,\
					1, 8]; 76,[9, 2, 1, 0]; 77,[20, 9, 2, 5]; 78,[18, 16, 11, 7]; 79,[5, 12, 1,\
					0]; 80,[2, 7, 17, 17]; 81,[13, 19, 5, 7]; 82,[1, 15, 19, 8]; 83,[19, 12, 4,\
					9]; 84,[0, 9, 14, 4]; 85,[13, 16, 12, 20]; 86,[9, 3, 19, 0]; 87,[7, 15, 18,\
					19]; 88,[14, 20, 0, 1]; 89,[12, 14, 8, 9]; 90,[8, 0, 12, 8]; 91,[0, 4, 18,\
					0]; 92,[4, 13, 1, 17]; 93,[11, 14, 0, 8]; 94,[8, 16, 13, 8]; 95,[11, 4, 16,\
					12]; 96,[7, 0, 11, 14]; 97,[13, 10, 0, 19]; 98,[19, 17, 5, 5]; 99,[20, 7,\
					12, 2]"
var puzzle = [];
var edgePieces = [];
var cornerPieces = [];
var sortedPuzzle = [];
var choices = [];
let rowIndex = 0;
let columnIndex = 0;

for(let i = 0; i < 10; i++) {
	sortedPuzzle[i] = new Array(10);
}


function parsePuzzleInput() {

	let puzzlePiece = {};
	let eachSpot;
	var split = puzzleInput.split(";");
	for (let i = 0; i < split.length; i++) {
		split[i] = split[i].trim();
		eachSpot = split[i].split(",");

		puzzlePiece.id = eachSpot[0];
		puzzlePiece.top = parseInt(eachSpot[1].trim().replace('[', ''));
		puzzlePiece.right = parseInt(eachSpot[2].trim());
		puzzlePiece.bottom = parseInt(eachSpot[3].trim());
		puzzlePiece.left = parseInt(eachSpot[4].trim().replace(']',''));
		puzzlePiece.position = "";

		if (isAnEdgePiece(puzzlePiece)) {
			if (numberOfZeros(puzzlePiece) > 1) {
				cornerPieces.push(puzzlePiece);
			} else {
				edgePieces.push(puzzlePiece);
			}
		} else {
			puzzle.push(puzzlePiece);
		}
		puzzlePiece = {};
	}
}

function isAnEdgePiece(puzzlePiece) {
	return (puzzlePiece.top === 0 || puzzlePiece.right === 0 || puzzlePiece.bottom === 0 || puzzlePiece.left === 0);
}

function numberOfZeros(puzzlePiece) {
	let amountOfZeros = 0;
	for (var property in puzzlePiece) {
		if (puzzlePiece[property] === 0) {
			amountOfZeros++;
		}
	}

	return amountOfZeros;
}


function rotatePuzzlePiece(puzzlePiece) {
	let temp = {};
	temp.top = puzzlePiece.top;
	temp.right = puzzlePiece.right;
	temp.bottom = puzzlePiece.bottom;
	temp.left = puzzlePiece.left;

	puzzlePiece.right = temp.top;
	puzzlePiece.bottom = temp.right;
	puzzlePiece.left = temp.bottom;
	puzzlePiece.top = temp.left;
}

function findPuzzlePieceWithId(id) {
	for (let i = 0; i < puzzle.length ; i++) {
			if (puzzle[i].id === id) {
				return puzzle[i];
			}
	}

	for (let i = 0; i < edgePieces.length; i++) {
		if (edgePieces[i].id === id) {
			return edgePieces[i];
		}
	}

	for (let i = 0; i < cornerPieces.length; i++) {
		if (cornerPieces[i].id === id) {
			return cornerPieces[i];
		}
	}

	return {};
}

function findMatchingPuzzlePiece(number) {
	var matches = [];
	for (let i = 0; i < puzzle.length ; i++) {
		for (let prop in puzzle[i]) {
				if(puzzle[i][prop] === number) {
					matches.push(puzzle[i]["id"]);
				}
			}
	}
	return matches;
}	

function findMatchingPuzzlePieces(puzzlePiece) {
	var numbersToLookFor = [puzzlePiece.top, puzzlePiece.right, puzzlePiece.bottom, puzzlePiece.left];
	var results = [];

	for (let i = 0; i < numbersToLookFor.length; i++) {
		if (numbersToLookFor[i] !== 0) {
			let matches = findMatchingPuzzlePiece(numbersToLookFor[i]);
			var matched = {
				id : puzzlePiece["id"],
				numberThatMatched : numbersToLookFor[i],
				matches : matches
			};
			results.push(matched);
			matched = {};
		}
	}

	return results;

}


function gatherNumbers(puzzlePiece) {
	var numbers = [];
	for(var prop in puzzlePiece) {
		if (prop !== "id" && prop !== "position") {
			numbers.push(puzzlePiece[prop]);
		}
	}

	return numbers;
}

function findFirstMatch(numbers, withZero) {
	var piece = {};
	var setToGoOver = withZero ? edgePieces : puzzle;
	for(let i = 0; i < setToGoOver.length; i++) {
		piece = setToGoOver[i];
		var pieceNumbers = gatherNumbers(piece);
		for (let j = 0; j < pieceNumbers.length; j++) {
			if (numbers.indexOf(pieceNumbers[j]) !== -1) {
				return piece;
			}
		}
	} 
	return {};
}

function filterOutZeros(numbers) {
	return numbers.filter(function(element) {
		return element !== 0;
	});
}


function findPieceWithZero(numbers) {
	numbersToLookFor = filterOutZeros(numbers);
	return findFirstMatch(numbersToLookFor, true);
}

function findAMatch() {
	var match = {};
	var puzzlePieceToMatch = sortedPuzzle[rowIndex][columnIndex];
	var numbersToLookFor = gatherNumbers(puzzlePieceToMatch);

	//Edge cases
	if (rowIndex === 0 || rowIndex === 9 || columnIndex === 0 || columnIndex === 9) {
		match = findPieceWithZero(numbersToLookFor);
	} else {
		match = findFirstMatch(numbersToLookFor, false);
	}

	return match;
}


/* Start of flow */
function startSolution() {
	parsePuzzleInput();
	//Top left puzzle piece is with id == 91
	var firstPuzzlePiece = findPuzzlePieceWithId("91");
	firstPuzzlePiece.position = rowIndex + "." + columnIndex;
	sortedPuzzle[0][0] = firstPuzzlePiece;
	var foundMatch = findAMatch();
	if (foundMatch) {
		sortedPuzzle[rowIndex][++columnIndex] = foundMatch;
		foundMatch.position = rowIndex + "." + columnIndex;
	}
}

