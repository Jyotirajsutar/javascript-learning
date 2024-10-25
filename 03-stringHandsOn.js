
function stringHandsOn(){
    var alok = "   Hey you are doing good, keep it up    ";
    console.log(`1.Given a String: ${alok}`);
    var result = alok.length;
    console.log(`2.Length of the String is: ${result}`);
    // var alok = "Hey you are doing good, keep it up";
    var result = alok.trim();
    console.log(`3.After trim Stringis: ${result}, and it's Length is: ${result.length}`);
    console.log(`4.First Character is: ${result.charAt(0)}, and Last Character is: ${result.length-1}`);
    var resultValue = result.split(" ");
    console.log(`5.The Count Of Total Words is: ${resultValue.length}`);
    var indexOfGood = result.indexOf('good');
    console.log(`6.The  Index Of word good is: ${indexOfGood}`);
    var resultOfSubstring = result.substring(22);
    console.log(`7.The Substring starting from index 22 is: ${resultOfSubstring}`);
    var resultOfEndValue = result.endsWith("up");
    console.log(`8.Is string ends with word up: ${resultOfEndValue}`);
    var resultOfStartValue = result.startsWith("Hey");
    console.log(`9.Is string starts with word Hey: ${resultOfStartValue}`);   
}
stringHandsOn();