/* author: Luis Emmanuel Lopez Ortiz, 20760619
 * */
var special_char = ["'",'"',"\\","%","_","?","`",",",";","*", "="] 
var alphabet = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"]
var number = ['0','1','2','3','4','5','6','7','8','9']
var validated_query = []
const fs = require('fs')

function isSpecialCharacter(letter){
        if(special_char.some(character => character == letter) == true){
            console.log(letter)
            validated_query.push(letter)
        } else{return}
}

function isLetterFromAlphabet(letter){
    if(alphabet.some(character => character == letter) == true){
        console.log(letter)
        validated_query.push(letter)
    }else {return}
}

function isNumber(num){
    if(number.some(character => character == num) == true){
        console.log(num)
        validated_query.push(num)
    } else{return}
}
/*
function main(){
    fs.readFile('query.txt', 'utf8', (err, data)) => {
        if(err){
            console.log(err)
            return
        }
    }
    var cadena_split = data.split('\n')
    var validar_length = cadena_split[0].length
    
}
*/
isSpecialCharacter('0')
isLetterFromAlphabet('a')
isNumber('a')

console.log(validated_query)
