"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = exports.process = exports.movingZeroesToEnd = exports.changeItUp = exports.isbnValidation = exports.testFunction = void 0;
const testFunction = () => {
    console.log("Typescript Exercise 1");
};
exports.testFunction = testFunction;
(0, exports.testFunction)();
const isbnValidation = (isbn) => {
    let notIncluded = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
    isbn = isbn.toUpperCase();
    if (isbn.length != 10) {
        console.log(isbn + " -> false. " + isbn + " has invalid length.");
        return;
    }
    for (let i = 0; i < notIncluded.length; i++) {
        if (isbn.indexOf(notIncluded[i]) > -1) {
            console.log(isbn + " -> false. " + isbn + " has invalid characters.");
            return;
        }
    }
    if (isbn.indexOf('X') > -1) {
        if (isbn.indexOf('X') != 9) {
            console.log(isbn + " -> false. " + "X has been found in an invalid position. ");
            return;
        }
    }
    // if the isbn is true for all validation. 
    let total = 0;
    for (let position = 0; position < isbn.length; position++) {
        if (isbn[position] === 'X') {
            total += 10 * (position + 1);
        }
        else {
            total += parseInt(isbn[position]) * (position + 1);
        }
    }
    (total % 11 == 0) ? console.log(isbn + " -> true.") : console.log(isbn + "-> false.");
    return;
};
exports.isbnValidation = isbnValidation;
const changeItUp = (str) => {
    let strArr = [];
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        strArr.push(str[i]);
        strArr[i] = strArr[i].replace(/([a-zA-Z])[^a-zA-Z]*$/, (a) => {
            var c = a.charCodeAt(0);
            switch (c) {
                case 90: return 'A';
                case 122: return 'a';
                default: return String.fromCharCode(++c);
            }
        });
        strArr[i] = strArr[i].toLowerCase();
        switch (strArr[i]) {
            case 'a':
                strArr[i] = 'A';
                break;
            case 'e':
                strArr[i] = 'E';
                break;
            case 'i':
                strArr[i] = 'I';
                break;
            case 'o':
                strArr[i] = 'O';
                break;
            case 'u':
                strArr[i] = 'U';
                break;
            default: break;
        }
        newStr += strArr[i];
    }
    console.log("Initial String: " + str + "\nConverted: " + newStr);
};
exports.changeItUp = changeItUp;
const movingZeroesToEnd = () => {
    let arr = [1, 3, 0, 'Morada', 'Iron Man', 0, true, false, 99, 0, 9, 0, 'Aldrin'];
    var newArray = [];
    let elementToBeDeleted = 0;
    let deletedElementsCounter = 0;
    console.log("Original Array is: " + arr.toString());
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == elementToBeDeleted) {
            if (arr[i] === false) {
                newArray.push(arr[i]);
            }
            else {
                deletedElementsCounter++;
            }
        }
        else {
            newArray.push(arr[i]);
        }
    }
    for (let add = 0; add < deletedElementsCounter; add++) {
        newArray.push(elementToBeDeleted);
    }
    console.log("New array is : " + newArray.toString());
};
exports.movingZeroesToEnd = movingZeroesToEnd;
var tableRecord = [];
const process = () => {
    const record1 = {
        city: 'Manila',
        country: 'Philippines',
        population: 123456
    };
    const record2 = {
        city: 'Breda',
        country: 'Netherlands',
        population: 234567
    };
    const record3 = {
        city: 'Tokyo',
        country: 'Japan',
        population: 654321
    };
    tableRecord.push(record1);
    tableRecord.push(record2);
    tableRecord.push(record3);
    console.info(tableRecord);
};
exports.process = process;
var tableRecordFiltered = [];
const search = (keyword) => {
    for (let index in tableRecord) {
        if (tableRecord[index].city.indexOf(keyword) > -1 || tableRecord[index].country.indexOf(keyword) > -1) {
            tableRecordFiltered.push(tableRecord[index]);
        }
    }
    console.log("FILTERED RECORD, keyword: " + keyword);
    console.info(tableRecordFiltered);
    tableRecordFiltered = [];
};
exports.search = search;
console.log("1. I cant do it in html");
(0, exports.process)();
(0, exports.search)('kyo');
(0, exports.search)('hi');
(0, exports.search)('n');
console.log("2. ISBN validation");
(0, exports.isbnValidation)("1112223339");
(0, exports.isbnValidation)("111222333");
(0, exports.isbnValidation)("1112223339X");
(0, exports.isbnValidation)("1234554321");
(0, exports.isbnValidation)("1234512345");
(0, exports.isbnValidation)("048665088X");
(0, exports.isbnValidation)("X123456788");
console.log("3. Change it up.");
(0, exports.changeItUp)("ALDRINzdhnQRST12345");
(0, exports.changeItUp)("Cat30");
console.log("4. Moving zeroes to end.");
(0, exports.movingZeroesToEnd)();
