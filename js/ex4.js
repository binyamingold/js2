// הדפסת יום עבודה או סופ"ש

var day = Number(prompt ("enter num from 1 to 7"))

 switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Workday")
        break;
    case 6:
    case 7:
        console.log("Weekend")
        break;

 }