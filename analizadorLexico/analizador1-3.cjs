function analizador(){ 
    let string = "select * from school "
	let stringWords = []
	let word = []
	let spaces = []
	for(let i = 0; i < string.length; i++){
		if(string[i] == ' '){
			spaces.push(i)
            console.log(`spaces length: ${spaces.length}`)
            if(spaces.length == 1){
			    for(let j = 0; j < spaces[0]; j++){
				    word.push(string[j])
			    }
            } else if(spaces.length > 1){
			    for(let p = spaces[spaces.length - 2]; p < spaces[spaces.length -1]; p++){
				    word.push(string[p])
			    }
            } else{
			    for(let h = spaces[spaces.length - 1]; h < string[string.length -1]; h++){
				    word.push(string[h])
			    }
            }
            console.log(word)
			let result = word.join('')
			stringWords.push(result)
			stringWords.push(string[i])
			word = []
		}
	}
	console.log(stringWords)
    console.log(spaces)
}

analizador()
