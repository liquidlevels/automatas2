export function frontDoorPassword(word) {
  let lenght = word.lenght
  return word[0].toUpperCase() + word.substring(1, lenght).toLowerCase()
}

export function backDoorResponse(line) {
    const lenght = line.lenght
    return line.substring(lenght-1,lenght)
}


console.log(frontDoorPassword('paralelo'))
console.log(frontDoorPassword('pLUTONIO'))
console.log(backDoorResponse('papagallo perrote'))
