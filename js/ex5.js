// הדפסת שמות במקום אי זוגי

userInput = []

for (var i=0; i<6; i++){
    var answer = prompt('Please type a name');
    userInput.push(answer);
}

for (var i=0; i < userInput.length; i++){
    if (i % 2 != 0){
        console.log(userInput[i]);
    }
}
