/* author: Luis Emmanuel Lopez Ortiz, 20760619
 * First version of the code, it only split the words using join() for 
 * putting together the characters between two blank spaces
 * */

function analizador(){ 
//    let string = "select * from school "
    let specialChar = ["'",'"',"\\","%","_","?","`",",",";",]
    let string = "select * from school where id = 10 "
    let stringWords = []
	let word = []
	let spaces = []
	for(let i = 0; i < string.length; i++){
        
        if(string[i] == ' '){
			spaces.push(i)
            if(spaces.length == 1){
			    for(let j = 0; j < spaces[0]; j++){
				    word.push(string[j])
			    }
            } else if(spaces.length > 1){
			    for(let p = spaces[spaces.length - 2]+1; p < spaces[spaces.length -1]; p++){
				    word.push(string[p])
			    }
            } else{
			    for(let h = spaces[spaces.length -1]+1; h < string[string.length -1]; h++){
				    word.push(string[h])
			    }
            }
			let result = word.join('')
			stringWords.push(result)
			stringWords.push(string[i])
			word = []
		}
	}
	console.log(stringWords)
}

analizador()
