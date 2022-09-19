export const testFunction = () => {
    console.log("Typescript Exercise 1")
}
testFunction();

export const isbnValidation = (isbn:string) => {
    let notIncluded = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
    isbn = isbn.toUpperCase();

    if(isbn.length != 10){
        console.log( isbn +" -> false. " + isbn + " has invalid length.")
        return;
    }

    for(let i = 0; i < notIncluded.length; i++){
        if(isbn.indexOf(notIncluded[i]) > -1){
            console.log( isbn +" -> false. " + isbn + " has invalid characters.");
            return;
        } 
    }

    if(isbn.indexOf('X') > -1){
        if(isbn.indexOf('X')!= 9){
            console.log( isbn +" -> false. " + "X has been found in an invalid position. ")
            return;
        }
    }

    // if the isbn is true for all validation. 
    let total = 0;
    for(let position = 0; position < isbn.length; position++){
        if(isbn[position] === 'X'){
            total += 10 * (position + 1);         
        }else{
            total += parseInt(isbn[position]) * (position+1);         
        }
    }
    
   (total % 11 == 0) ? console.log(isbn+" -> true."): console.log(isbn + "-> false.");
    return;
}


export const changeItUp = (str:string) =>{
    let strArr = [];
    let newStr = "";
    for(let i = 0; i< str.length;i++){
        strArr.push(str[i]);

        strArr[i] =  strArr[i].replace(/([a-zA-Z])[^a-zA-Z]*$/, (a)=>{
                        var c= a.charCodeAt(0);
                        switch(c){
                            case 90: return 'A';
                            case 122: return 'a';
                            default: return String.fromCharCode(++c);
                        }
                    });

        strArr[i] = strArr[i].toLowerCase();
        switch(strArr[i]){
            case 'a': strArr[i] = 'A'; break;
            case 'e': strArr[i] = 'E'; break;
            case 'i': strArr[i] = 'I'; break;
            case 'o': strArr[i] = 'O'; break;
            case 'u': strArr[i] = 'U'; break;
            default:  break;
        }

        newStr += strArr[i];
    }
    console.log("Initial String: "+ str + "\nConverted: "+newStr);
}

export const movingZeroesToEnd = () => {
    let arr = [1, 3, 0, 'Morada', 'Iron Man', 0, true, false, 99, 0, 9, 0, 'Aldrin'];   
    var newArray = [];
    let elementToBeDeleted = 0;
    let deletedElementsCounter = 0;
    console.log("Original Array is: "+ arr.toString());

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == elementToBeDeleted){
            if(arr[i] === false){
                newArray.push(arr[i]);
            } else{
                deletedElementsCounter++;
            }    
        }else{
            newArray.push(arr[i]);
        }
    }

    for(let add = 0; add < deletedElementsCounter; add++){
        newArray.push(elementToBeDeleted);
    }

    console.log("New array is : " + newArray.toString());
}

interface record {
    city: string;
    country: string;
    population: number;
}

var tableRecord:record[] = [];
export const process = () => {

    const record1:record = {
        city: 'Manila',
        country: 'Philippines',
        population: 123456
    }
    const record2:record = {
        city: 'Breda',
        country: 'Netherlands',
        population: 234567
    }
    const record3:record = {
        city: 'Tokyo',
        country: 'Japan',
        population: 654321
    }
    
    tableRecord.push(record1);
    tableRecord.push(record2);
    tableRecord.push(record3);

    console.info(tableRecord)
}

var tableRecordFiltered:record[] = [];
export const search = (keyword:string) =>{

    for(let index in tableRecord){
        if(tableRecord[index].city.indexOf(keyword)>-1 || tableRecord[index].country.indexOf(keyword)>-1){
            tableRecordFiltered.push(tableRecord[index]);
        }
    }

    console.log("FILTERED RECORD, keyword: "+ keyword);
    console.info(tableRecordFiltered);

    tableRecordFiltered = [];
}

console.log("1. I cant do it in html");
process();
search('kyo');
search('hi');
search('n');

console.log("2. ISBN validation");
isbnValidation("1112223339");
isbnValidation("111222333");
isbnValidation("1112223339X");
isbnValidation("1234554321");
isbnValidation("1234512345");
isbnValidation("048665088X");
isbnValidation("X123456788");

console.log("3. Change it up.")
changeItUp("ALDRINzdhnQRST12345");
changeItUp("Cat30");

console.log("4. Moving zeroes to end.");
movingZeroesToEnd();