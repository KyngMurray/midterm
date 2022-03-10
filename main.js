// ===================================================================================================COMPLETED================================


function sumOfOdds(num1,num2){
    let sum = 0;
    while (num1 <= num2) {
        if (num1 % 2 === 1 || num1 % 2 === -1) {
            sum += num1;
        }
        num1++;
    }
    return sum;
}

// console.log("sumOfOdds")
// let num1 = 1
// let num2 = 11
// console.log(sumOfOdds(num1, num2))

// console.log("////////////////////////////////////////////////////////////////////////////\n");

// ===================================================================================================COMPLETED================================

function arraySubtract(array1, array2){
    let sumArray = []
    for (let i = 0; i < array1.length; i++){
        sumArray.push(array1[i]-array2[i])
    }
    return sumArray
}

// // /* console.logs to test */

// console.log("arraySubtract")
// let array1 = [5, 10, 4, 23]
// let array2 = [3, 7, 2, 20]
// console.log(arraySubtract(array1, array2))

// console.log("////////////////////////////////////////////////////////////////////////////\n");

// =====================================================================================================COMPLETED==============================

function surroundArray(array, str, strX){

    array.unshift(str)
    array.push(strX)
    return array

}

// /* console.logs to test */

// console.log("surroungArray")
// let array = [1, 2, 3, 4]
// let str = "Numbers"
// let strX = "Names"
// console.log(surroundArray(array, str, strX));

// console.log("////////////////////////////////////////////////////////////////////////////\n");

// =====================================================================================================COMPLETED==============================

function longestString(arrStr) {
    let longest = arrStr[0]
    if (arrStr[0] === undefined) {
        longest = ''
    }
    for (let count = 1; count < arrStr.length; count++) {
        if (arrStr[count].length > longest.length) {
            longest = arrStr[count]
        }
    }
    return longest
}


// // /* console.logs to test */
// console.log("longestString");

// let arrStr = ['mom', 'momma', 'mommaaaa']
// console.log(longestString(arrStr))

    // console.log("////////////////////////////////////////////////////////////////////////////\n");

// ====================================================================================================COMPLETED===============================

function sToR(str){
    let newLetter = " ";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "R") {
            newLetter += "S";
        } else if (str[i] === "r") {
            newLetter += "s";
        } else if (str[i] === "S") {
            newLetter += "R";
        } else if (str[i] === "s") {
            newLetter += "r";
        } else {
            newLetter += str[i];
        }
    }
    return newLetter;
}

// /* console.logs to test */

// console.log("sToR");
// let str = "Remember, She likes it Deep"
// console.log(sToR(str));

// console.log("////////////////////////////////////////////////////////////////////////////\n");

// ====================================================================================================COMPLETED===============================

function divisibleBy4And7(num){
    if (num % 4 === 0 && num % 7 === 0){
        return true
    } else {
    return false
    }
}

// /* console.logs to test */

// console.log("divisibleBy4And7")
// let num = 32
// let num = 28
// console.log(divisibleBy4And7(num))

// console.log("////////////////////////////////////////////////////////////////////////////\n");

// ====================================================================================================COMPLETED===============================

function exclamationAndQuestion(str){

    for (let i = 0; i < str.length; i++){
        if (str.includes("!") && str.includes("?")){
            return true
        }
    }
    return false

}

// /* console.logs to test */
// console.log("exclamationAndQuestion")

// let str = "Good Afternoon!?"
// let str = "Good Afternoon!"
// let str = "Good Afternoon?"

// console.log(exclamationAndQuestion(str))

// console.log("////////////////////////////////////////////////////////////////////////////\n");

// ====================================================================================================COMPLETED===============================

function countAB(str) {
    let countA = " ";
    let countB = " ";
    let array = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "A") {
            countA += str[i];
        }
        if (str[i] === "b" || str[i] === "B") {
            countB += str[i];
        }
    }
    array.push(countA.length);
    array.push(countB.length);
    return array;
}

// // /* console.logs to test */
// console.log("countAB");
// let str = "ABCabcdefABCDEFGabcdefgAaBbcCA"
// console.log(countAB(str))

// console.log("////////////////////////////////////////////////////////////////////////////\n");

// ====================================================================================================COMPLETED===============================

function addStringIfLastS(arrStr, str){
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i][arrStr[i].length - 1] === "s" || (arrStr[i][arrStr[i].length - 1] === "S")){
            arrStr[i] += str;
        }
    }
    return arrStr;
}

// /* console.logs to test */
// console.log("addStringIfLastS");

// let arrStr = ['test', 'testing', 'testings']
// let str = "Test"
// console.log(addStringIfLastS(arrStr, str));

// console.log("////////////////////////////////////////////////////////////////////////////\n");

// // ===================================================================================================??????????????===========================

function twoSmallest(){

}

// /* console.logs to test */
// console.log("twoSmallest");

// console.log("////////////////////////////////////////////////////////////////////////////\n");