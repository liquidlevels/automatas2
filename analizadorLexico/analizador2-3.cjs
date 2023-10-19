/* author: Luis Emmanuel Lopez Ortiz, 20760619
 * */
var special_char = [" ","'",'"',"\\","%","_","?","`",",",";","*","="] 
var alphabet = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"]
var number = ['0','1','2','3','4','5','6','7','8','9']
var validated_query = []
var making_some_words = []
var splited_string
var splited_line
var result
var string_words = []
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
/*
function wordsWithSense(some_shit_array){
    for(let i = 0; i < some_shit_array.length; i++){
        if(isLetterFromAlphabet(some_shit_array[i]) == true){
            making_some_words.push(some_shit_array[i])
            console.log(`character: [${some_shit_array[i]}]`)
            console.log(`making some words: [${making_some_words}]`)
            //primero no jalaba, despues utilice el "continue" para que continue con la siguiente iteracion y jalo xd
            //algo mas tecnico seria que si i+1 == "_" hace un push a making_some_words y despues continuara con la siguiente
            //iteracion, por lo que ya lo tomara como parte de la palabra y seguira con las validaciones en la siguiente iteracion
            if(some_shit_array[i+1] == "_"){
                making_some_words.push(some_shit_array[i+1])
                continue
            }
            //en este caso, si i+1 es un espacio, tomara todo lo anterior que se agrego a making_some_words y lo va a juntar con join("") y asi
            //formara una palabra, despues esta el caso de que si el siguiente es diferente a una letra, pues tampoco tiene sentido seguir agregando
            //a making_some_words :)
            if(some_shit_array[i+1] == " " || isLetterFromAlphabet(some_shit_array[i+1]) == false){
                result = making_some_words.join("")
                string_words.push(result)
                console.log(`string words: [${string_words}]`)
                making_some_words = []
            }
        }
    }
}
*/

function validations(splited_line){
    for(let n = 0; n < splited_line.length; n++){
        if(isLetterFromAlphabet(splited_line[n]) == true){
            making_some_words.push(splited_line[n])
            console.log(`character: [${splited_line[n]}]`)
            console.log(`making some words: [${making_some_words}]`)
            if(splited_line[n+1] == "_"){
                making_some_words.push(splited_line[n+1])
                //utilice splice para quitar del array el "_" y que no lo agregue por separado y se duplique
                splited_line.splice(n+1,1) //(n+1 es el indice y 1 es la cantidad de items que se va a quitar)
                continue
            }
            if(splited_line[n+1] == " " || isLetterFromAlphabet(splited_line[n+1]) == false){
                result = making_some_words.join("")
                string_words.push(result)
                validated_query.push(result)
                //console.log(`string words: [${string_words}]`)
                making_some_words = []
            }

        } else if(isSpecialCharacter(splited_line[n]) == true){
            validated_query.push(splited_line[n])
        } else if(isNumber(splited_line[n]) == true){
            validated_query.push(splited_line[n])
        } else {
            console.log(`hay un caracter no valido: [${splited_line[n]}]`)
            return
        }
    }
    console.log(validated_query)
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
            console.log(splited_line)
            validations(splited_line)
        }
    });
}

main()
