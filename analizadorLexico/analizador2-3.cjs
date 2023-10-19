/* author: Luis Emmanuel Lopez Ortiz, 20760619
 * */
var special_char = [" ",".","'",'"',"\\","%","_","?","`",",",";","*","="] 
var alphabet = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"]
var number = ['0','1','2','3','4','5','6','7','8','9']
var validated_query = []
var making_some_words = []
var making_some_numbers = []
var splited_string
var splited_line
var result
var string_words = []
const fs = require('fs')
const words = {
        1: ' ',
        2: '+',
        3: '-',
        4: '*',
        5: '/',
        6: '%',
        7: '&',
        8: '|',
        9: '^',
        10: '=',
        11: '>',
        12: '<',
        13: '>=',
        14: '<=',
        15: '<>',
        16: "'",
        17: '"',
        18: ';',
        19: ',',
        20: '`',
        30: '(',
        31: ')',
        32: '[',
        33: ']',
        34: '{',
        35: '}',
        50: '+=',
        51: '-=',
        52: '*=',
        53: '/=',
        54: '%=',
        55: '&=',
        56: '^-=',
        57: '|*=',
        60: 'ALL',
        61: 'AND',
        62: 'ANY',
        63: 'BETWEEN',
        64: 'EXISTS',
        65: 'IN',
        66: 'LIKE',
        67: 'NOT',
        68: 'OR',
        69: "SELECT",
        100: "ABORT",
        101: "ABSOLUTE",
        102: "ACCESS",
        103: "ACTION",
        104: "ADD",
        105: "AFTER",
        106: "ALL",
        107: "ALLOCATE",
        108: "ALTER",
        109: "AND",
        110: "ANY",
        111: "ARE",
        112: "AS",
        113: "ASC",
        114: "ASSERTION",
        115: "AT",
        116: "AUTHORIZATION",
        117: "AVG",
        118: "BEGIN",
        119: "BETWEEN",
        120: "BIT",
        121: "BOTH",
        122: "BY",
        123: "CALL",
        124: "CASCADE",
        125: "CASCADED",
        126: "CASE",
        127: "CAST",
        128: "CATALOG",
        129: "CHAR",
        130: "CHARACTER",
        131: "CHECK",
        132: "CLOSE",
        133: "COLLATE",
        134: "COLUMN",
        135: "COMMIT",
        136: "CONNECT",
        137: "CONNECTION",
        138: "CONSTRAINT",
        139: "CONTINUE",
        140: "CONVERT",
        141: "CORRESPONDING",
        142: "COUNT",
        143: "CREATE",
        144: "CROSS",
        145: "CURRENT",
        146: "CURRENT_DATE",
        147: "CURRENT_TIME",
        148: "CURRENT_TIMESTAMP",
        149: "CURSOR",
        150: "DATABASE",
        151: "DATE",
        152: "DAY",
        153: "DEALLOCATE",
        154: "DECLARE",
        155: "DEFAULT",
        156: "DEFERRABLE",
        157: "DEFERRED",
        158: "DELETE",
        159: "DESC",
        160: "DESCRIBE",
        161: "DISTINCT",
        162: "DO",
        163: "DOMAIN",
        164: "DOUBLE",
        165: "DROP",
        166: "ELSE",
        167: "END",
        168: "END-EXEC",
        169: "ESCAPE",
        170: "EXCEPT",
        171: "EXEC",
        172: "EXECUTE",
        173: "EXISTS",
        174: "EXTERNAL",
        175: "FETCH",
        176: "FIRST",
        177: "FLOAT",
        178: "FOR",
        179: "FOREIGN",
        180: "FOUND",
        181: "FROM",
        182: "FULL",
        183: "FUNCTION",
        184: "GET",
        185: "GLOBAL",
        186: "GO",
        187: "GRANT",
        188: "GROUP",
        189: "HAVING",
        190: "HOUR",
        191: "IDENTITY",
        192: "IF",
        193: "IMMEDIATE",
        194: "IN",
        195: "INDICATOR",
        196: "INDEX",
        197: "INNER",
        198: "INSERT",
        199: "INT",
        200: "INTEGER",
        202: "WHERE",
        999: "",
    }
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

function validations(splited_line){
    for(let n = 0; n < splited_line.length; n++){
        if(isLetterFromAlphabet(splited_line[n]) == true){
            making_some_words.push(splited_line[n])
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
                making_some_words = []
            }
        } else if(isSpecialCharacter(splited_line[n]) == true){
            validated_query.push(splited_line[n])
        } else if(isNumber(splited_line[n]) == true){
            making_some_numbers.push(splited_line[n])
            console.log(`making some numbers: [${making_some_numbers}]`)
            if(isNumber(splited_line[n+1]) == true){
                continue
            }
            if(splited_line[n+1] == '.'){
                making_some_numbers.push(splited_line[n+1])
                continue
            }
            if(splited_line[n+1] == " " || isNumber(splited_line[n+1]) == false){
                result = making_some_numbers.join("")
                string_words.push(result)
                validated_query.push(result)
                making_some_numbers = []
            }

        } else {
            console.log(`hay un caracter no valido: [${splited_line[n]}]`)
            return
        }
    }
    console.log(validated_query)
}

function toukens(validated_query, words){
    let tokens = []
    const lengths = validated_query.length;
    for (const [key, value] of Object.entries(words)) {
        for (let i = 0; i < lengths; i++) {
            if (validated_query[i] === value) {
                tokens.push(key);
                console.log(`value: [${value}]`);
                validated_query.splice(i, 1)
                console.log(validated_query[i])
                break
            } else if(isLetterFromAlphabet(validated_query[i]) == true){
                console.log('palabra de usuario')
            }
        }
    }
    console.log('tokens:' + tokens)
}

function main(){
    fs.readFile('query.txt', 'utf8', (err, data) => {
        if(err){
            console.log(err)
            return
        }
        splited_string = data.split('\n')
        splited_string.pop() //esto se hace con el fin de quitar las comillas vacias que hacia el data.split('\n') al final de cadena_split
        for(let i = 0; i < splited_string.length; i++){
            splited_line = splited_string[i].split("")
            console.log(splited_line)
            validations(splited_line)
            toukens(validated_query, words)
        }
    });
}
main()
