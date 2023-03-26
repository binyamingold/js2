// רשימת מוצרים בסדר הפוך

userInput = []

for (var i=0; i<6; i++){
    var answer = prompt('Please type a prodact');
    userInput.push(answer)
}
console.log(userInput)

for (var i = 5; i > -1; i--){
    console.log(userInput[i]);
}