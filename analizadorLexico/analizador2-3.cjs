/* author: Luis Emmanuel Lopez Ortiz, 20760619
 * */
var special_char = [" ","'",'"',"\\","%","_","?","`",",",";","*","="] 
var alphabet = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"]
var number = ['0','1','2','3','4','5','6','7','8','9']
var validated_query = []
var making_some_words = []
var splited_string
var splited_line
const fs = require('fs')
/*
*Las funciones basicamente regresan true si es que el caracter que reciben como parametro esta dentro de alguno de los arrays de numeros, letras o
*caracteres especiales, si no, devuelven false
*en este caso use la funcion some(), que devuelve un booleano si es que se cumple la arrow function que toma como parametro
* character => character == letter, donde el primer character es el parametro de la arrow function y luego ese mismo parametro lo compara con letter
*/
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

function wordsWithSense(some_shit_array){
    let result
    let string_words = []
    for(let i = 0; i < some_shit_array.length; i++){
        if(isLetterFromAlphabet(some_shit_array[i]) == true){
            making_some_words.push(some_shit_array[i])
            console.log(`character: [${some_shit_array[i]}]`)
            console.log(`making some words: [${making_some_words}]`)
            console.log(`iteration: ${i}`)
            
            if(some_shit_array[i+1] == "_"){
                making_some_words.push(some_shit_array[i+1])
                continue
            }

            if(some_shit_array[i+1] == " " || isLetterFromAlphabet(some_shit_array[i+1]) == false){
                result = making_some_words.join("")
                string_words.push(result)
                console.log(`string words: [${string_words}]`)
                making_some_words = []
            }
        }
    }
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
        wordsWithSense(validated_query)
    });
}

main()
