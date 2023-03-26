// חישוב שטח מלבן

var userNumbers = []
var max = 0;
for (var i=0; i<2; i++){
    var answer = Number(prompt('Please type a number'))
    userNumbers.push(answer)
}

area = userNumbers[0] * 2 + userNumbers[1] * 2;
if (userNumbers[0] === userNumbers[1]){
    console.log(" square area is: ", area);
}
else{
    console.log(" the area is: ",area);
}