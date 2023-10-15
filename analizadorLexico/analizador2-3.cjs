/* author: Luis Emmanuel Lopez Ortiz, 20760619
 * */
var special_char = ["'",'"',"\\","%","_","?","`",",",";","*", "="]
var validated_query = 
const fs = require('fs')

function isSpecialCharacter(query){
    for(let i = 0; i < splited_query.length; i++){
        if(special_char.some(character => character == splited_query[i]) == true){
            console.log(splited_query[i])
            validated_query.push(splited_query[i])

        }
    }
}


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
