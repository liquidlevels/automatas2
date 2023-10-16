/* author: Luis Emmanuel Lopez Ortiz, 20760619
 * */
var special_char = ["'",'"',"\\","%","_","?","`",",",";","*", "="] 
var alphabet = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"]
var number = ['0','1','2','3','4','5','6','7','8','9']
var validated_query = []
const fs = require('fs')

function isSpecialCharacter(letter){
        if(special_char.some(character => character == letter) == true){
            return true
        } else{return false}
}

function isLetterFromAlphabet(letter){
    if(alphabet.some(character => character == letter) == true){
        return true
    }else {return false}
}

function isNumber(num){
    if(number.some(character => character == num) == true){
        return true;
    } else{return false}
}

function main(){
    fs.readFile('query.txt', 'utf8', (err, data) => {
        if(err){
            console.log(err)
            return
        }
        var cadena_split = data.split('\n')
        var splited_line;
        //var validar_length = cadena_split[0].length
        cadena_split.pop()
        console.log(cadena_split)
        for(let i = 0; cadena_split.length-1; i++){
            console.log(cadena_split[i])
            splited_line = cadena_split[i].split("")
            console.log(splited_line)
            /*
            for(let n = 0; n < splited_line.length; i++){
                if(isLetterFromAlphabet(splited_line[n])){
                    validated_query.push(splited_line[n])
                } else if(isSpecialCharacter(splited_line[n])){
                    validated_query.push(splited_line[n])
                } else if(isNumber(splited_line[n])){
                    validated_query.push(splited_line[n])
                } else {
                    console.log('error, no valido')
                }
            }
            */
        }
        //console.log(validated_query)
        /*
        for(let i = 0; i < cadena_split[n].length-1; i++){
            if(validar_length == cadena_split[i].length){
                if(isLetterFromAlphabet(cadena_split[i])){
                    validated_query.push(cadena_split[i])
                } else if(isSpecialCharacter(cadena_split[i])){
                    validated_query.push(cadena_split[i])
                } else if(isNumber(cadena_split[i])){
                    validated_query.push(cadena_split[i])
                } else {
                    console.log('error, no valido')
                }
            }
        }
        */
        
        //console.log(cadena_split)
        //console.log(splited_line)
    });
}

main()
