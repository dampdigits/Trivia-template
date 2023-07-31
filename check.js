function checkMCQ(buttonID) {
    document.querySelector(buttonID).onclick = function() {
        if (buttonID == '#correct') {
            document.querySelector(buttonID).style.backgroundColor = 'green';
            document.querySelector('#mcqResponse').innerHTML = 'Correct!';
        }
        else {
            document.querySelector(buttonID).style.backgroundColor = 'red';
            document.querySelector('#mcqResponse').innerHTML = 'Incorrect';
        }
    }
}

checkMCQ('#wrong1');
checkMCQ('#wrong2');
checkMCQ('#wrong3');
checkMCQ('#wrong4');
checkMCQ('#correct');

document.querySelector('#checkButton').onclick = function() {
    if (document.querySelector('#answerField').value == 'IBM') {
        document.querySelector('#answerField').style.backgroundColor = 'green';
        document.querySelector('#freeResponse').innerHTML = 'Correct!';
    }
    else {
        document.querySelector('#answerField').style.backgroundColor = 'red';
        document.querySelector('#freeResponse').innerHTML = 'Incorrect';
    }
}
