/* author: Luis Emmanuel Lopez Ortiz, 20760619
 * */
var special_char = [" ","'",'"',"\\","%","_","?","`",",",";","*","="] 
var alphabet = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"]
var number = ['0','1','2','3','4','5','6','7','8','9']
var validated_query = []
var splited_string
var splited_line
const fs = require('fs')

function isSpecialCharacter(letter){
    return special_char.some(character => character == letter) == true ? true :
        false
}

function isLetterFromAlphabet(letter){
    return alphabet.some(character => character == letter) == true ? true :
        false
}

function isNumber(num){
   return number.some(character => character == num) == true ? true :
        false
}

function words(splited_array){
    
}

function main(){
    fs.readFile('query.txt', 'utf8', (err, data) => {
        if(err){
            console.log(err)
            return
        }
        splited_string = data.split('\n')
        splited_string.pop() //esto se hace con el fin de quitar las comillas vacias al final de cadena_split
        for(let i = 0; i < splited_string.length; i++){
            splited_line = splited_string[i].split("")
            for(let n = 0; n < splited_line.length; n++){
                if(isSpecialCharacter(splited_line[n]) == true){
                    validated_query.push(splited_line[n])
                } else if(isLetterFromAlphabet(splited_line[n]) == true){
                    validated_query.push(splited_line[n])
                } else if(isNumber(splited_line[n]) == true){
                    validated_query.push(splited_line[n])
                } else {
                    return 'wtf is this?'
                }
            }
        }

        console.log(validated_query)
        words(validated_query)
    });
}

main()
